import { BookSimple } from './book'
import { User } from './user'

export interface RatingSimple {
  id: string
  rate: number
  description: string
  created_at: Date
  book_id: string
  user_id: string
}

export interface RatingCompleted {
  rating: RatingSimple
  book: BookSimple
  user: User
}
