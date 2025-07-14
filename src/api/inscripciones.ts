import { toast } from 'react-toastify'

import Api from './api'
import type{ CreateInscripcionPayload } from '@/interfaces/my-events/interface';

export const getAllMyEvents = async (id:number) => {
  try {
    const response = await Api.get<any>(`/inscripciones/my-events/${id}`)

    return response.data
  } catch (error) {
    toast.error(`No se obtuvo las inscripcoiones: ${error}`)
  }
}

export const registerInscripcion = async (payload: CreateInscripcionPayload) => {
  const {
    usuario_codigo,
    taller_codigo,
    tipo_inscripcion,
    inscripcion_correo,
    inscripcion_monto_abonado,
    inscripcion_comprobante,
    inscripcion_archivo_bcp,
    invoice,
    beca_codigo,
    inscripcion_numero_operacion,
    inscripcion_qr_code,
    inscripcion_nfactura,
    inscripcion_razonsocial,
    inscripcion_categoria,
    inscripcion_estado,
    inscripcion_fecha_hora,
    file
  } = payload;

  if (!file) {
    const msg = 'Debes adjuntar el archivo de comprobante.';
    
    toast.error(msg);
    throw new Error(msg);
  }

  const formData = new FormData();
  
  formData.append('usuario_codigo', String(usuario_codigo));
  formData.append('taller_codigo', String(taller_codigo));
  formData.append('tipo_inscripcion', String(tipo_inscripcion));
  formData.append('inscripcion_correo', inscripcion_correo);
  formData.append('inscripcion_monto_abonado', String(inscripcion_monto_abonado));
  formData.append('inscripcion_comprobante', inscripcion_comprobante);

  // Opcionales (solo si vienen definidos)
  if (inscripcion_archivo_bcp) formData.append('inscripcion_archivo_bcp', inscripcion_archivo_bcp);
  if (invoice) formData.append('invoice', invoice);
  if (beca_codigo !== undefined) formData.append('beca_codigo', String(beca_codigo));
  if (inscripcion_numero_operacion) formData.append('inscripcion_numero_operacion', inscripcion_numero_operacion);
  if (inscripcion_qr_code) formData.append('inscripcion_qr_code', inscripcion_qr_code);
  if (inscripcion_nfactura) formData.append('inscripcion_nfactura', inscripcion_nfactura);
  if (inscripcion_razonsocial) formData.append('inscripcion_razonsocial', inscripcion_razonsocial);
  if (inscripcion_categoria) formData.append('inscripcion_categoria', inscripcion_categoria);
  if (inscripcion_estado !== undefined) formData.append('inscripcion_estado', String(inscripcion_estado));
  if (inscripcion_fecha_hora) formData.append('inscripcion_fecha_hora', inscripcion_fecha_hora.toISOString());

  // Por último, el archivo bajo la clave 'file'
  formData.append('file', file, file.name);

  try {
    const response = await Api.post<{ url: string }>(
      '/inscripciones/upload/voucher',
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );

    toast.success('Inscripción registrada correctamente');
    
    return response;
  } catch (err: any) {
    const msg = err?.response?.data?.message || err.message || 'Error al registrar inscripción.';
    
    toast.error(msg);
    throw err;
  }
};
