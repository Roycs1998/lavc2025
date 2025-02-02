
import { CreatePersonaUserDto } from '@/interfaces/register/inteface'
import Api from './api'
import { toast } from 'react-toastify'
import { HttpStatus } from '@/constants/httpStatus';

export const registerNewUser = async (payload: CreatePersonaUserDto) => {
  try {
    const response = await Api.post(`/persona`, payload);
    if (response.data.statusCode === HttpStatus.CREATED) {
      toast.success(response.data.message);
    }
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      toast.error(`No se pudo registrar: ${error.response.data.message}`);
    } else {
      toast.error(`No se pudo registrar: ${error.message}`);
    }
    throw error;
  }
};
