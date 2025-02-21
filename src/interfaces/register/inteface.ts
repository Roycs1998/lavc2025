export interface CreatePersonaDto {
  persona_nombres?: string;
  persona_apellido_paterno?: string;
  persona_apellido_materno?: string;
  persona_numero_documento?: string;
  persona_correo?: string;
  persona_telefono?: string;
  persona_estado?: string;
  tipo_documento_codigo?: number;
  persona_fecha_nacimiento?: string;
  persona_direccion?: string;
  persona_lugar_trabajo?: string;
  lugar_procedencia?: string;
  persona_celular?: string;
  grado_academico_codigo?: number;
  profesion_codigo?: number;
  persona_genero?: string;
  persona_universidad?: string;
  pais_codigo?: string;
  ubigeo_codigo?: string;
  Empresa?: string;
  persona_datos?: number;
}

export interface CreateUserDto {
  userName: string;
  userPassword: string;
  profileCode: number;

  // Nota: No se envía 'personaCodigo' desde el front; el back se encarga de asignarlo.
}

export interface CreatePersonaUserDto {
  persona: CreatePersonaDto;
  user: CreateUserDto;
}
