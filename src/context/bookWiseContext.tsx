import { ReactNode, createContext, useState } from 'react'

export interface Book {
  id: number
}

export interface User {
  id: number
}

interface bookWiseContextType {
  books: Book[]
  user: User
  users: User[]
}

interface bookWiseContextProviderProps {
  children: ReactNode
}

export const BookWiseContext = createContext({} as bookWiseContextType)

export function BookWiseContextProvider({
  children,
}: bookWiseContextProviderProps) {
  const [books, setBooks] = useState<Book[]>([])
  const [users, setUsers] = useState<User[]>([])

  const [user, setUser] = useState<User>({} as User)

  return (
    <BookWiseContext.Provider value={{ books, user, users }}>
      {children}
    </BookWiseContext.Provider>
  )
}
