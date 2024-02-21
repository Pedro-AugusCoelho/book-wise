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

export interface BookCompleted {
  id: string
  author: string
  categories: {
    book_id: string
    category: {
      id: string
      name: string
    }
  }[]
  cover_url: string
  created_at: string
  name: string
  ratings: {
    id: string
    rate: number
    description: string
    created_at: string
    book_id: string
  }[]
  summary: string
  total_pages: number
}
