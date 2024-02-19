import { Book } from '@/@types/book'
import { Category } from '@/@types/category'
import { PopularBook } from '@/@types/popularBook'
import { RatingCompleted } from '@/@types/rating'
import { api } from '@/lib/axios'
import { ReactNode, createContext, useState } from 'react'

interface bookWiseContextType {
  books: Book[]
  ratings: RatingCompleted[]
  popularBooks: PopularBook[]
  categories: Category[]
  searchAllRating: () => void
  searchPopularBooks: () => void
  searchAllCategories: () => void
  searchAllBooksByCategory: (category: string) => void
}

interface bookWiseContextProviderProps {
  children: ReactNode
}

export const BookWiseContext = createContext({} as bookWiseContextType)

export function BookWiseContextProvider({
  children,
}: bookWiseContextProviderProps) {
  const [ratings, setRatings] = useState<RatingCompleted[]>([])

  const [categories, setCategories] = useState<any>([])

  const [books, setBooks] = useState<Book[]>([])

  const [popularBooks, setPopularBooks] = useState<PopularBook[]>([])

  async function searchAllRating() {
    const res = await api.get('/ratings')

    setRatings(res.data.rating)
  }

  async function searchAllCategories() {
    const res = await api.get('/category')
    const data: Category[] = res.data

    const dataCurrent: Category[] = [{ id: null, name: 'Tudo', active: true }]

    for (let i = 0; i < data.length; i++) {
      dataCurrent.push({ id: data[i].id, name: data[i].name, active: false })
    }

    setCategories(dataCurrent)
  }

  async function searchAllBooksByCategory(category: string) {
    const res = await api.get('/books', {
      params: {
        category,
      },
    })

    setBooks(res.data)
  }

  async function searchPopularBooks() {
    const res = await api.get('/books/popularBook')

    setPopularBooks(res.data)
  }

  return (
    <BookWiseContext.Provider
      value={{
        books,
        ratings,
        popularBooks,
        categories,
        searchAllBooksByCategory,
        searchAllRating,
        searchPopularBooks,
        searchAllCategories,
      }}
    >
      {children}
    </BookWiseContext.Provider>
  )
}
