export interface PopularBook {
  id: string
  name: string
  author: string
  cover_url: string
  ratings: {
    rate: number
  }[]
  _count: {
    ratings: number
  }
}
