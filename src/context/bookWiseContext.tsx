import { PopularBook } from '@/@types/popularBook'
import { RatingCompleted } from '@/@types/rating'
import { api } from '@/lib/axios'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface bookWiseContextType {
  ratings: RatingCompleted[]
  popularBooks: PopularBook[]
  searchAllRating: () => void
  searchPopularBooks: () => void
}

interface bookWiseContextProviderProps {
  children: ReactNode
}

export const BookWiseContext = createContext({} as bookWiseContextType)

export function BookWiseContextProvider({
  children,
}: bookWiseContextProviderProps) {
  const [ratings, setRatings] = useState<RatingCompleted[]>([])

  const [popularBooks, setPopularBooks] = useState<PopularBook[]>([])

  async function searchAllRating() {
    const res = await api.get('/ratings')

    setRatings(res.data.rating)
  }

  async function searchPopularBooks() {
    const res = await api.get('/books/popularBook')

    setPopularBooks(res.data)
  }

  return (
    <BookWiseContext.Provider
      value={{ ratings, popularBooks, searchAllRating, searchPopularBooks }}
    >
      {children}
    </BookWiseContext.Provider>
  )
}
