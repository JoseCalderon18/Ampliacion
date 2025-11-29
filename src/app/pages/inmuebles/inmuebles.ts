import { Component, OnInit, computed, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardInmuebleComponent } from '../../components/card-inmueble/card-inmueble';
import { CasasController } from '../../../controllers/controladorCasas';
import { ThemeService } from '../../services/theme.service';
import { Casa } from '../../models/modelCasa';

/**
 * Componente de página que muestra el catálogo de inmuebles con sistema de filtros avanzados.
 * Permite filtrar por tipo, provincia, ciudad, precio, habitaciones y baños.
 * Incluye paginación y vista responsive.
 * 
 * @example
 * ```html
 * <app-inmuebles></app-inmuebles>
 * ```
 */
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
  
  /**
   * Lista completa de todas las propiedades disponibles.
   */
  casas: Casa[] = [];
  
  /**
   * Lista de propiedades filtradas según los criterios seleccionados.
   */
  filteredCasas = signal<Casa[]>([]);
  
  // Filtros
  /**
   * Tipos de inmueble seleccionados para filtrar.
   * @default []
   */
  selectedTipos = signal<string[]>([]);
  
  /**
   * Provincias seleccionadas para filtrar.
   * @default []
   */
  selectedProvincias = signal<string[]>([]);
  
  /**
   * Ciudades seleccionadas para filtrar.
   * @default []
   */
  selectedCiudades = signal<string[]>([]);
  
  /**
   * Números de habitaciones seleccionados para filtrar.
   * @default []
   */
  selectedHabitaciones = signal<number[]>([]);
  
  /**
   * Números de baños seleccionados para filtrar.
   * @default []
   */
  selectedBanos = signal<number[]>([]);
  
  /**
   * Precio mínimo para filtrar.
   * @default 0
   */
  precioMin = signal<number>(0);
  
  /**
   * Precio máximo para filtrar.
   * @default 2000000
   */
  precioMax = signal<number>(2000000);
  
  // Paginación
  /**
   * Página actual de la paginación.
   * @default 1
   */
  currentPage = signal<number>(1);
  
  /**
   * Número de elementos por página.
   * @default 9
   */
  itemsPerPage = 9;
  
  // Estado de secciones colapsables
  /**
   * Indica si la sección de filtros por tipo está abierta.
   * @default true
   */
  tipoSectionOpen = signal<boolean>(true);
  
  /**
   * Indica si la sección de filtros por provincia está abierta.
   * @default false
   */
  provinciaSectionOpen = signal<boolean>(false);
  
  /**
   * Indica si la sección de filtros por ciudad está abierta.
   * @default false
   */
  ciudadSectionOpen = signal<boolean>(false);
  
  /**
   * Indica si la sección de filtros por habitaciones está abierta.
   * @default false
   */
  habitacionesSectionOpen = signal<boolean>(false);
  
  /**
   * Indica si la sección de filtros por baños está abierta.
   * @default false
   */
  banosSectionOpen = signal<boolean>(false);
  
  // Modal móvil
  /**
   * Indica si el modal de filtros móvil está abierto.
   * @default false
   */
  mobileFiltersOpen = signal<boolean>(false);
  
  // Opciones de filtros
  /**
   * Lista de tipos de inmueble disponibles.
   */
  tipos = ['Independiente', 'Finca', 'Ático', 'Villa', 'Adosada', 'Piso', 'Dúplex', 'Estudio', 'Rústica'];
  
  /**
   * Lista de ciudades disponibles (se carga dinámicamente).
   */
  ciudades: string[] = [];
  
  /**
   * Lista de provincias disponibles (se carga dinámicamente).
   */
  provincias: string[] = [];
  
  /**
   * Opciones de número de habitaciones disponibles.
   */
  habitaciones = [1, 2, 3, 4, 5];
  
  /**
   * Opciones de número de baños disponibles.
   */
  banos = [1, 2, 3, 4];

  constructor() {}

  /**
   * Inicializa el componente cargando las propiedades y aplicando filtros iniciales.
   */
  ngOnInit(): void {
    this.casas = this.casasCtrl.getCasas();
    this.ciudades = Array.from(new Set(this.casas.map(c => c.ciudad))).sort();
    this.provincias = Array.from(new Set(this.casas.map(c => c.provincia))).sort();
    // Establecer precio máximo automáticamente
    const maxPrecio = Math.max(...this.casas.map(c => c.precio));
    this.precioMax.set(maxPrecio);
    this.filteredCasas.set(this.casas);
  }

  /**
   * Maneja el evento cuando se selecciona una propiedad desde el componente card-inmueble.
   * Puede usarse para realizar acciones adicionales cuando se selecciona una propiedad.
   * @param casa - Propiedad seleccionada
   */
  onPropiedadSeleccionada(casa: Casa): void {
    // Aquí se puede agregar lógica adicional, como tracking, analytics, etc.
    console.log('Propiedad seleccionada:', casa.titulo);
  }

  /**
   * Filtra las propiedades según los criterios seleccionados.
   * Aplica filtros por tipo, provincia, ciudad, precio, habitaciones y baños.
   * Actualiza la lista de propiedades filtradas y resetea la paginación.
   */
  filterCasas(): void {
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
