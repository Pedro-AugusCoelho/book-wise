import * as S from '@/styles/components/bookContent'
import { Star } from '@phosphor-icons/react'

export default function BookContent() {
  const wordResume =
    'Lorem ipsum dolor sit amet, consectetur adipisicing consectetur adipisicing consectetur adipisicingconsectetur adipisicing elit. Officia, natus blanditiis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, natus blanditiis? Blanditiis ad velit, ipsum repellendus nisi eligendi labore est deleniti expedita harum asperiores, tempore pariatur adipisci aperiam minus ipsa.'

  const wordResumeFormat =
    wordResume.length >= 300 ? wordResume.substring(0, 300) + '...' : wordResume

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

        <S.Body>
          <S.BookContainer></S.BookContainer>
          <S.CommentContainer>
            <S.CommentHeader>
              <p>O Hobbit</p>
              <span>J.R.R. Tolkien</span>
            </S.CommentHeader>

            <S.CommentBody>
              <p>{wordResumeFormat}</p>
            </S.CommentBody>
          </S.CommentContainer>
        </S.Body>
      </S.Content>
    </>
  )
}
