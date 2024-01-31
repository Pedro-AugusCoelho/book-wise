import * as S from '@/styles/pages/home'

import SidebarLogin from '@/components/sidebarLogin'

import { TrendUp } from '@phosphor-icons/react'
import BookContent from '@/components/bookContent'

export default function Home() {
  const numbers = [1, 2, 3]

  return (
    <>
      <S.HomeContainer>
        <S.SidebarLeft>
          <SidebarLogin />
        </S.SidebarLeft>

        <S.Content>
          <S.HeaderContent>
            <TrendUp size={32} weight="fill" />
            <span>Início</span>
          </S.HeaderContent>

          <S.Body>
            <span>Avaliações mais recentes</span>

            <S.listBooks>
              {numbers.map((item) => (
                <BookContent key={item} />
              ))}
            </S.listBooks>
          </S.Body>
        </S.Content>

        <S.SidebarRight>AAA</S.SidebarRight>
      </S.HomeContainer>
    </>
  )
}
