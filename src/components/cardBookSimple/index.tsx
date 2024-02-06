import * as S from '@/styles/components/cardBookSimple'
import { Star } from '@phosphor-icons/react'

export default function CardBookSimple() {
  return (
    <>
      <S.Content>
        <S.BookContainer></S.BookContainer>

        <S.InfoContainer>
          <S.Header>
            <span>A revolução dos bichos</span>
            <span>George Orwell</span>
          </S.Header>

          <S.Footer>
            <S.RatingContainer>
              <Star size={14} weight="fill" />
              <Star size={14} weight="fill" />
              <Star size={14} weight="fill" />
              <Star size={14} weight="fill" />
              <Star size={14} weight="thin" />
            </S.RatingContainer>
          </S.Footer>
        </S.InfoContainer>
      </S.Content>
    </>
  )
}
