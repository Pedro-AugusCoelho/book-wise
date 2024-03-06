import * as S from '@/styles/components/cardBookSimpleBig'
import countRateStart from '@/util/countRateStart'
import { Star } from '@phosphor-icons/react'
import Image from 'next/image'

interface CardBookSimpleBigProps {
  title: string
  author: string
  rateNumber: { rate: number }[]
  coverUrl?: string
}

export default function CardBookSimpleBig({
  title,
  author,
  rateNumber,
  coverUrl,
}: CardBookSimpleBigProps) {
  const calculateAverage = (rating: { rate: number }[]) => {
    if (rating.length === 0) return 0

    const sum = rating.reduce((acc, review) => acc + review.rate, 0)
    const average = sum / rating.length
    return Math.floor(average)
  }

  const rate = countRateStart(calculateAverage(rateNumber))

  return (
    <>
      <S.CardBook>
        <S.CoverBook>
          {coverUrl && (
            <Image src={coverUrl} alt="ImageBook" width={108} height={152} />
          )}
        </S.CoverBook>

        <S.DescriptionBook>
          <S.HeaderBook>
            <span>{title}</span>
            <span>{author}</span>
          </S.HeaderBook>

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
        </S.DescriptionBook>
      </S.CardBook>
    </>
  )
}
