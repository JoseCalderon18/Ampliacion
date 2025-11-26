export interface Usuario{
    uid : string;
    nombre : string;
    email : string;
    password : string; 
}

export interface UsuarioLogin{
    email : string;
    password : string; 
}

export interface UsuarioRegistro{
    nombre : string;
    apellido : string;
    email : string;
    password : string; 
}

