import { http } from '@/plugins/axios'

export async function getSystem() {
  const { data } = await http.request<SystemModel>({ url: 'system' })
  return data
}

export function updateSystem(data: SystemModel) {
  return http.request<SystemModel>({ url: 'system/1', method: 'PUT', data })
}
