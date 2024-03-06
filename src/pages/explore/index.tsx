import { Category } from '@/@types/category'
import SearchInput from '@/components/InputSearch'
import CardBookSimpleBig from '@/components/cardBookSimpleBig'
import SidebarLogin from '@/components/sidebarLogin'
import { BookWiseContext } from '@/context/bookWiseContext'
import * as S from '@/styles/pages/explore'
import { Binoculars } from '@phosphor-icons/react'
import { ChangeEvent, useContext, useEffect } from 'react'

export default function Explore() {
  const {
    searchAllCategories,
    categories,
    fillSearchFilter,
    search,
    selectActiveCategory,
    books,
  } = useContext(BookWiseContext)

  useEffect(() => {
    searchAllCategories()
  }, [])

  function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
    fillSearchFilter(e.target.value)
  }

  function handleSelectActiveCategory(category: Category) {
    selectActiveCategory(category)
  }

  return (
    <>
      <S.ExploreContainer>
        <S.SidebarLeft>
          <SidebarLogin />
        </S.SidebarLeft>

        <S.Content>
          <S.Header>
            <S.HeaderTitle>
              <Binoculars size={32} weight="fill" />
              <span>Explorar</span>
            </S.HeaderTitle>

            <S.HeaderSearch>
              <SearchInput
                value={search}
                placeholder="Buscar livro ou autor"
                inputChange={handleChangeInput}
              />
            </S.HeaderSearch>
          </S.Header>

          <S.CarrouselContainer>
            {categories.length > 0 &&
              categories.map((item) => (
                <S.ItemCarrousel
                  key={item.id}
                  className={item.active ? 'activated' : ''}
                  onClick={() => handleSelectActiveCategory(item)}
                >
                  {item.name}
                </S.ItemCarrousel>
              ))}
          </S.CarrouselContainer>

          <S.BookContainer>
            {books.length > 0 &&
              books.map((item) => (
                <CardBookSimpleBig
                  author={item.author}
                  rateNumber={item.ratings}
                  coverUrl={item.cover_url}
                  title={item.name}
                  key={item.id}
                />
              ))}
          </S.BookContainer>
        </S.Content>
      </S.ExploreContainer>
    </>
  )
}
