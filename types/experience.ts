export interface Experience {
  id: string | number
  company: string
  role: string
  startDate: string
  endDate?: string
  current?: boolean
  description: string
  responsibilities: string[]
}
