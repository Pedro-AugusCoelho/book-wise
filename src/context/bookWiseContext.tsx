import { Book } from '@/@types/book'
import { Category } from '@/@types/category'
import { PopularBook } from '@/@types/popularBook'
import { RatingCompleted } from '@/@types/rating'
import { api } from '@/lib/axios'
import category from '@/pages/api/category'
import { ReactNode, createContext, useState } from 'react'

interface bookWiseContextType {
  books: Book[]
  ratings: RatingCompleted[]
  popularBooks: PopularBook[]
  categories: Category[]
  search: string
  searchAllRating: () => void
  searchPopularBooks: () => void
  searchAllCategories: () => void
  fillSearchFilter: (value: string) => void
  selectActiveCategory: (item: Category) => void
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

  const [books, setBooks] = useState<Book[]>([])

  const [popularBooks, setPopularBooks] = useState<PopularBook[]>([])

  const [search, setSearch] = useState<string>('')

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

  async function searchAllBooksByCategory() {
    const categoryId = categories
      .filter((item) => item.active === true)
      .map((item) => {
        return item.id
      })

    const filter = search

    console.log(categoryId)
    console.log(filter)

    // const res = await api.get('/books', {
    //   params: {
    //     category,
    //     filter,
    //   },
    // })

    // setBooks(res.data)
  }

  async function searchPopularBooks() {
    const res = await api.get('/books/popularBook')

    setPopularBooks(res.data)
  }

  async function fillSearchFilter(value: string) {
    await setSearch(value)

    searchAllBooksByCategory()
  }

  async function selectActiveCategory(item: Category) {
    if (item) {
      await setCategories(
        categories.map((category: Category) => {
          if (category.id === item.id) {
            return { ...category, active: true }
          } else {
            return { ...category, active: false }
          }
        }),
      )

      searchAllBooksByCategory()
    }
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
      }}
    >
      {children}
    </BookWiseContext.Provider>
  )
}
