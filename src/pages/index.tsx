import * as S from '@/styles/pages/home'

import SidebarLogin from '@/components/sidebarLogin'

import { CaretRight, TrendUp } from '@phosphor-icons/react'
import CardBook from '@/components/cardBook'
import CardBookSimple from '@/components/cardBookSimple'

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
            <S.BodyLeft>
              <p>Avaliações mais recentes</p>

              <S.listBooks>
                {numbers.map((item) => (
                  <CardBook key={item} />
                ))}
              </S.listBooks>
            </S.BodyLeft>

            <S.BodyRight>
              <S.CallTitle>
                <p>Livros populares</p>

                <a href="">
                  <span>Ver todos</span>
                  <CaretRight size={16} />
                </a>
              </S.CallTitle>

              <S.listBooks>
                {numbers.map((item) => (
                  <CardBookSimple key={item} />
                ))}
              </S.listBooks>
            </S.BodyRight>
          </S.Body>
        </S.Content>
      </S.HomeContainer>
    </>
  )
}
