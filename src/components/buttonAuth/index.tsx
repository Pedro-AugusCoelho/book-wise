import * as S from '@/styles/components/buttonAuth'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
}

export default function Button({ children, onClick }: ButtonProps) {
  return <S.ButtonAuth onClick={onClick}>{children}</S.ButtonAuth>
}
