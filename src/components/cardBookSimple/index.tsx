import * as S from '@/styles/components/cardBookSimple'
import countRateStart from '@/util/countRateStart'
import { Star } from '@phosphor-icons/react'

interface CardBookSimpleProps {
  title: string
  author: string
  rateNumber: number
  cover_url?: string
}

export default function CardBookSimple({
  title,
  author,
  rateNumber,
}: CardBookSimpleProps) {
  const rate = countRateStart(rateNumber)

  return (
    <>
      <S.Content>
        <S.BookContainer></S.BookContainer>

        <S.InfoContainer>
          <S.Header>
            <span>{title}</span>
            <span>{author}</span>
          </S.Header>

          <S.Footer>
            <S.RatingContainer>
              {rate.map((item, k) =>
                item === 'fill' ? (
                  <Star size={16} weight="fill" key={k} />
                ) : (
                  <Star size={16} weight="thin" key={k} />
                ),
              )}
            </S.RatingContainer>
          </S.Footer>
        </S.InfoContainer>
      </S.Content>
    </>
  )
}
