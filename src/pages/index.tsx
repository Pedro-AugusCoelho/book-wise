import * as S from '@/styles/pages/home'

import SidebarLogin from '@/components/sidebarLogin'

import { CaretRight, TrendUp } from '@phosphor-icons/react'
import CardBook from '@/components/cardBook'
import CardBookSimple from '@/components/cardBookSimple'
import { useContext } from 'react'
import { BookWiseContext } from '@/context/bookWiseContext'

export default function Home() {
  const { ratings } = useContext(BookWiseContext)

  const itemsWithRatingFive = ratings.filter((item) => item.rating.rate === 5)
  const selectedItems = []

  // SELECIONAR ALEATORIAMENTE 3 ITENS DO ARRAY DE ITENS COM AVALIAÇÃO 5
  while (selectedItems.length < 3 && itemsWithRatingFive.length > 0) {
    const randomIndex = Math.floor(Math.random() * itemsWithRatingFive.length)
    selectedItems.push(itemsWithRatingFive[randomIndex])
    // REMOVA O ITEM SELECIONADO PARA NÃO SER SELECIONADO NOVAMENTE
    itemsWithRatingFive.splice(randomIndex, 1)
  }

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
                {ratings.map((item) => (
                  <CardBook key={item.rating.id} ratings={item} />
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
                {selectedItems.map((item) => (
                  <CardBookSimple
                    key={item.rating.id}
                    author={item.book.author}
                    rateNumber={item.rating.rate}
                    title={item.book.name}
                  />
                ))}
              </S.listBooks>
            </S.BodyRight>
          </S.Body>
        </S.Content>
      </S.HomeContainer>
    </>
  )
}
