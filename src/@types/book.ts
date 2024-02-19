export interface Book {
  id: string
  name: string
  author: string
  cover_url: string
  ratings: {
    rate: number
  }[]
}

export interface BookSimple {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: Date
}
