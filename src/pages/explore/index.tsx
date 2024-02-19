import SearchInput from '@/components/InputSearch'
import CardBook from '@/components/cardBook'
import SidebarLogin from '@/components/sidebarLogin'
import { BookWiseContext } from '@/context/bookWiseContext'
import * as S from '@/styles/pages/explore'
import { Binoculars } from '@phosphor-icons/react'
import { ChangeEvent, useContext, useEffect, useState } from 'react'

export default function Explore() {
  const { searchAllCategories, searchAllBooksByCategory, categories } =
    useContext(BookWiseContext)

  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    searchAllCategories()
  }, [])

  function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  function handleSearchBook() {
    //
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
                >
                  {item.name}
                </S.ItemCarrousel>
              ))}
          </S.CarrouselContainer>
        </S.Content>
      </S.ExploreContainer>
    </>
  )
}
