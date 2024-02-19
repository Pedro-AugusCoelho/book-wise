import * as S from '@/styles/components/searchInput'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { ChangeEvent, useState } from 'react'

interface SearchInputProps {
  placeholder: string
  value: string
  inputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function SearchInput({
  placeholder,
  value,
  inputChange,
}: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <S.InputContainer className={isFocused ? 'focused' : ''}>
      <S.Input
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={inputChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />

      <S.InputIcon className={isFocused ? 'focused' : ''}>
        <MagnifyingGlass size={24} />
      </S.InputIcon>
    </S.InputContainer>
  )
}
