import { BookCompleted } from '@/@types/book'
import { Category } from '@/@types/category'
import { PopularBook } from '@/@types/popularBook'
import { RatingCompleted } from '@/@types/rating'
import { api } from '@/lib/axios'
import { ReactNode, createContext, useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

interface bookWiseContextType {
  books: BookCompleted[]
  ratings: RatingCompleted[]
  popularBooks: PopularBook[]
  categories: Category[]
  search: string
  searchAllRating: () => void
  searchPopularBooks: () => void
  searchAllCategories: () => void
  fillSearchFilter: (value: string) => void
  selectActiveCategory: (item: Category) => void
  SignInWithGithub: () => void
}

interface bookWiseContextProviderProps {
  children: ReactNode
}

export const BookWiseContext = createContext({} as bookWiseContextType)

export function BookWiseContextProvider({
  children,
}: bookWiseContextProviderProps) {
  const [ratings, setRatings] = useState<RatingCompleted[]>([])

  const [categories, setCategories] = useState<Category[]>([])

  const [books, setBooks] = useState<BookCompleted[]>([])

  const [popularBooks, setPopularBooks] = useState<PopularBook[]>([])

  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    searchAllBooksByCategory()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, search])

  async function searchAllRating() {
    const res = await api.get('/ratings')

    setRatings(res.data.rating)
  }

  async function searchAllCategories() {
    const res = await api.get('/category')
    const data: Category[] = res.data

    const dataCurrent: Category[] = [{ id: 'all', name: 'Tudo', active: true }]

    for (let i = 0; i < data.length; i++) {
      dataCurrent.push({ id: data[i].id, name: data[i].name, active: false })
    }

    setCategories(dataCurrent)
  }

  async function searchAllBooksByCategory() {
    const categoryId = categories.find((item) => item.active === true)?.id

    const filter = search

    const res = await api.get('/books', {
      params: {
        category: categoryId,
        filter,
      },
    })

    setBooks(res.data)
  }

  async function searchPopularBooks() {
    const res = await api.get('/books/popularBook')

    setPopularBooks(res.data)
  }

  function fillSearchFilter(value: string) {
    setSearch(value)
  }

  function selectActiveCategory(item: Category) {
    if (item) {
      setCategories(
        categories.map((category: Category) => {
          if (category.id === item.id) {
            return { ...category, active: true }
          } else {
            return { ...category, active: false }
          }
        }),
      )
    }
  }

  async function SignInWithGithub() {
    await signIn('github', { callbackUrl: '/' })
  }

  async function SignOutWithGithub() {
    await signIn('github', { callbackUrl: '/login' })
  }

  return (
    <BookWiseContext.Provider
      value={{
        books,
        ratings,
        popularBooks,
        categories,
        search,
        fillSearchFilter,
        searchAllRating,
        searchPopularBooks,
        searchAllCategories,
        selectActiveCategory,
        SignInWithGithub,
      }}
    >
      {children}
    </BookWiseContext.Provider>
  )
}
