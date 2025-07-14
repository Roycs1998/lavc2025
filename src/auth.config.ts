import { getServerSession } from 'next-auth'

import { authOptions } from '@/libs/authOptions' // nueva ruta correcta

export async function getSession() {
  return await getServerSession(authOptions)
}
