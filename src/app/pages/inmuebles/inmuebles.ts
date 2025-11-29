import { Component, OnInit, computed, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardInmuebleComponent } from '../../components/card-inmueble/card-inmueble';
import { CasasController } from '../../../controllers/controladorCasas';
import { ThemeService } from '../../services/theme.service';
import { Casa } from '../../models/modelCasa';

@Component({
  selector: 'app-inmuebles',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardInmuebleComponent
  ],
  templateUrl: './inmuebles.html',
  styleUrls: ['./inmuebles.css']
})
export class InmueblesComponent implements OnInit {
  private themeService = inject(ThemeService);
  private casasCtrl = inject(CasasController);
  isDarkMode = this.themeService.isDarkMode;
  
  casas: Casa[] = [];
  filteredCasas = signal<Casa[]>([]);
  
  // Filtros
  selectedTipos = signal<string[]>([]);
  selectedProvincias = signal<string[]>([]);
  selectedCiudades = signal<string[]>([]);
  selectedHabitaciones = signal<number[]>([]);
  selectedBanos = signal<number[]>([]);
  precioMin = signal<number>(0);
  precioMax = signal<number>(2000000);
  
  // Paginación
  currentPage = signal<number>(1);
  itemsPerPage = 9;
  
  // Estado de secciones colapsables
  tipoSectionOpen = signal<boolean>(true);
  provinciaSectionOpen = signal<boolean>(false);
  ciudadSectionOpen = signal<boolean>(false);
  habitacionesSectionOpen = signal<boolean>(false);
  banosSectionOpen = signal<boolean>(false);
  
  // Modal móvil
  mobileFiltersOpen = signal<boolean>(false);
  
  // Opciones de filtros
  tipos = ['Independiente', 'Finca', 'Ático', 'Villa', 'Adosada', 'Piso', 'Dúplex', 'Estudio', 'Rústica'];
  ciudades: string[] = [];
  provincias: string[] = [];
  habitaciones = [1, 2, 3, 4, 5];
  banos = [1, 2, 3, 4];

  constructor() {}

  ngOnInit() {
    this.casas = this.casasCtrl.getCasas();
    this.ciudades = Array.from(new Set(this.casas.map(c => c.ciudad))).sort();
    this.provincias = Array.from(new Set(this.casas.map(c => c.provincia))).sort();
    // Establecer precio máximo automáticamente
    const maxPrecio = Math.max(...this.casas.map(c => c.precio));
    this.precioMax.set(maxPrecio);
    this.filteredCasas.set(this.casas);
  }

  // Filtrar inmuebles
  filterCasas() {
    let filtered = [...this.casas];

    // Filtro por tipos (múltiples selección)
    if (this.selectedTipos().length > 0) {
      filtered = filtered.filter(casa => this.selectedTipos().includes(casa.tipo));
    }

    // Filtro por provincias (múltiples selección)
    if (this.selectedProvincias().length > 0) {
      filtered = filtered.filter(casa => this.selectedProvincias().includes(casa.provincia));
    }

    // Filtro por ciudades (múltiples selección)
    if (this.selectedCiudades().length > 0) {
      filtered = filtered.filter(casa => this.selectedCiudades().includes(casa.ciudad));
    }

    // Filtro por precio
    filtered = filtered.filter(casa => 
      casa.precio >= this.precioMin() && casa.precio <= this.precioMax()
    );

    // Filtro por habitaciones (múltiples selección)
    if (this.selectedHabitaciones().length > 0) {
      filtered = filtered.filter(casa => this.selectedHabitaciones().includes(casa.habitaciones));
    }

    // Filtro por baños (múltiples selección)
    if (this.selectedBanos().length > 0) {
      filtered = filtered.filter(casa => this.selectedBanos().includes(casa.banos));
    }

    this.filteredCasas.set(filtered);
    this.currentPage.set(1); // Resetear a primera página
  }

  // Toggle de checkboxes
  toggleTipo(tipo: string) {
    const current = this.selectedTipos();
    if (current.includes(tipo)) {
      this.selectedTipos.set(current.filter(t => t !== tipo));
    } else {
      this.selectedTipos.set([...current, tipo]);
    }
    this.filterCasas();
  }

  toggleProvincia(provincia: string) {
    const current = this.selectedProvincias();
    if (current.includes(provincia)) {
      this.selectedProvincias.set(current.filter(p => p !== provincia));
    } else {
      this.selectedProvincias.set([...current, provincia]);
    }
    this.filterCasas();
  }

  toggleCiudad(ciudad: string) {
    const current = this.selectedCiudades();
    if (current.includes(ciudad)) {
      this.selectedCiudades.set(current.filter(c => c !== ciudad));
    } else {
      this.selectedCiudades.set([...current, ciudad]);
    }
    this.filterCasas();
  }

  toggleHabitaciones(num: number) {
    const current = this.selectedHabitaciones();
    if (current.includes(num)) {
      this.selectedHabitaciones.set(current.filter(h => h !== num));
    } else {
      this.selectedHabitaciones.set([...current, num]);
    }
    this.filterCasas();
  }

  toggleBanos(num: number) {
    const current = this.selectedBanos();
    if (current.includes(num)) {
      this.selectedBanos.set(current.filter(b => b !== num));
    } else {
      this.selectedBanos.set([...current, num]);
    }
    this.filterCasas();
  }

  // Paginación
  paginatedCasas = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredCasas().slice(start, end);
  });

  totalPages = computed(() => {
    return Math.ceil(this.filteredCasas().length / this.itemsPerPage);
  });

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  onPrecioChange() {
    this.filterCasas();
  }

  resetFilters() {
    this.selectedTipos.set([]);
    this.selectedCiudades.set([]);
    this.selectedProvincias.set([]);
    this.selectedHabitaciones.set([]);
    this.selectedBanos.set([]);
    this.precioMin.set(0);
    const maxPrecio = Math.max(...this.casas.map(c => c.precio));
    this.precioMax.set(maxPrecio);
    this.filterCasas();
  }

  toggleTipoSection() {
    this.tipoSectionOpen.update(v => !v);
  }

  toggleProvinciaSection() {
    this.provinciaSectionOpen.update(v => !v);
  }

  toggleCiudadSection() {
    this.ciudadSectionOpen.update(v => !v);
  }

  toggleHabitacionesSection() {
    this.habitacionesSectionOpen.update(v => !v);
  }

  toggleBanosSection() {
    this.banosSectionOpen.update(v => !v);
  }

  openMobileFilters() {
    this.mobileFiltersOpen.set(true);
  }

  closeMobileFilters() {
    this.mobileFiltersOpen.set(false);
  }

  getVisiblePages(): (number | string)[] {
    const total = this.totalPages();
    const current = this.currentPage();
    const pages: (number | string)[] = [];
    
    if (total <= 7) {
      // Si hay 7 o menos páginas, mostrar todas
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      // Siempre mostrar primera página
      pages.push(1);
      
      if (current <= 3) {
        // Cerca del inicio
        pages.push(2, 3, 4, '...', total);
      } else if (current >= total - 2) {
        // Cerca del final
        pages.push('...', total - 3, total - 2, total - 1, total);
      } else {
        // En el medio
        pages.push('...', current - 1, current, current + 1, '...', total);
      }
    }
    
    return pages;
  }
}
