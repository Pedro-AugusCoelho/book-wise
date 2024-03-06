import * as S from '@/styles/components/cardBookSimple'
import countRateStart from '@/util/countRateStart'
import { Star } from '@phosphor-icons/react'
import Image from 'next/image'

interface CardBookSimpleProps {
  title: string
  author: string
  rateNumber: { rate: number }[]
  coverUrl?: string
}

export default function CardBookSimple({
  title,
  author,
  rateNumber,
  coverUrl,
}: CardBookSimpleProps) {
  const calculateAverage = (rating: { rate: number }[]) => {
    if (rating.length === 0) return 0

    const sum = rating.reduce((acc, review) => acc + review.rate, 0)
    const average = sum / rating.length
    return Math.floor(average)
  }

  const rate = countRateStart(calculateAverage(rateNumber))

  return (
    <>
      <S.Content>
        <S.BookContainer>
          {coverUrl && (
            <Image src={coverUrl} alt="ImageBook" width={64} height={94} />
          )}
        </S.BookContainer>

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
