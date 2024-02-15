import { RatingCompleted } from '@/@types/rating'
import { api } from '@/lib/axios'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface bookWiseContextType {
  ratings: RatingCompleted[]
}

interface bookWiseContextProviderProps {
  children: ReactNode
}

export const BookWiseContext = createContext({} as bookWiseContextType)

export function BookWiseContextProvider({
  children,
}: bookWiseContextProviderProps) {
  const [ratings, setRatings] = useState<RatingCompleted[]>([])

  useEffect(() => {
    handleSearchAllRating()
  }, [])

  async function handleSearchAllRating() {
    const res = await api.get('/ratings')

    setRatings(res.data.rating)
  }

  return (
    <BookWiseContext.Provider value={{ ratings }}>
      {children}
    </BookWiseContext.Provider>
  )
}
