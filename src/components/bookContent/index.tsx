import * as S from '@/styles/components/bookContent'
import { Star } from '@phosphor-icons/react'

export default function BookContent() {
  return (
    <>
      <S.Content>
        <S.Header>
          <S.ProfileImageBackground>
            <S.ProfileImageContainer></S.ProfileImageContainer>
          </S.ProfileImageBackground>

          <S.NameContainer>
            <p>Jaxson Dias</p>
            <span>Hoje</span>
          </S.NameContainer>

          <S.RatingContainer>
            <Star size={16} weight="fill" />
            <Star size={16} weight="fill" />
            <Star size={16} weight="fill" />
            <Star size={16} weight="fill" />
            <Star size={16} weight="thin" />
          </S.RatingContainer>
        </S.Header>
      </S.Content>
    </>
  )
}
