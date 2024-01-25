import * as S from '@/styles/components/buttonAuth'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
}

export default function Button({ children }: ButtonProps) {
  return <S.ButtonAuth>{children}</S.ButtonAuth>
}
