import { RatingCompleted } from '@/@types/rating'
import * as S from '@/styles/components/cardBook'
import { Star } from '@phosphor-icons/react'
import Image from 'next/image'
import { formatDistance } from 'date-fns'
import countRateStart from '@/util/countRateStart'

interface CardBookProps {
  ratings: RatingCompleted
}

export default function CardBook({ ratings }: CardBookProps) {
  const publishedDate = formatDistance(ratings.rating.created_at, new Date(), {
    addSuffix: true,
  })

  const rate = countRateStart(ratings.rating.rate)

  return (
    <>
      <S.Content>
        <S.Header>
          <S.ProfileImageBackground>
            <S.ProfileImageContainer>
              {ratings.user.avatar_url && (
                <Image
                  src={ratings.user.avatar_url}
                  width={35}
                  height={35}
                  alt="user-image"
                />
              )}
            </S.ProfileImageContainer>
          </S.ProfileImageBackground>

          <S.NameContainer>
            <span>{ratings.user.name}</span>
            <span>{publishedDate}</span>
          </S.NameContainer>

          <S.RatingContainer>
            {rate.map((item, k) =>
              item === 'fill' ? (
                <Star size={16} weight="fill" key={k} />
              ) : (
                <Star size={16} weight="thin" key={k} />
              ),
            )}
          </S.RatingContainer>
        </S.Header>

        <S.Body>
          <S.BookContainer>
            {/* <Image
              src={ratings.book.cover_url}
              alt="image-book"
              width={108}
              height={152}
            /> */}
          </S.BookContainer>
          <S.CommentContainer>
            <S.CommentHeader>
              <span>{ratings.book.name}</span>
              <span>{ratings.book.author}</span>
            </S.CommentHeader>

            <S.CommentBody>
              <p>{ratings.book.summary}</p>
            </S.CommentBody>
          </S.CommentContainer>
        </S.Body>
      </S.Content>
    </>
  )
}
