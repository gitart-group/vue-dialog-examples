import { getCurrentInstance } from 'vue'

export const useComponentId = (): number => {
  const instance = getCurrentInstance()

  if (!instance)
    throw new Error('useComponentId used out of setup function')

  return instance.uid
}
