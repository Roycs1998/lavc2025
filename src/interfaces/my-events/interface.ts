export interface EventInfo{
  id?: number;
  codeWorkshop: number;
  workshopName: string;
  workshopStartDate: string;
  workshopEndDate: string;
  workshopSchedule: string;
  workshopState: number;
  workshopRegistrationDate: string;
  workshopPhoto: string;
  workshopCostProfessionals: number;
  workshopCostHighschoolStudents: number;
  CostOfWorkshopForForeignProfessionals: number;
  CostOfTheWorkshopForForeignStudents: number;
  workshopCost: number;
  workshopCostProfessionalsDollars: number;
  workshopCostHighSchoolStudentsDollars: number;
  workshopDescription: string;
  location: string | null;
  addressLocation: string | null;
  certified_workshop: number | null;
  workshopTypeId: number;
}

export interface Inscripcion {
  inscripcion_codigo: number;
  inscripcion_fecha_hora: string;
  inscripcion_estado: number;
  taller_codigo: number;
  usuario_codigo: number;
  tipo_inscripcion: number;
  inscripcion_archivo_bcp: string;
  invoice: string;
  beca_codigo: number;
  inscripcion_numero_operacion: string;
  inscripcion_monto_abonado: number;
  inscripcion_fecha: string;
  inscripcion_correo: string;
  inscripcion_qr_code: string;
  inscripcion_comprobante: string;
  inscripcion_nfactura: string;
  inscripcion_razonsocial: string;
  inscripcion_categoria: string;
  taller: EventInfo;
}
