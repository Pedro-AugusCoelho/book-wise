import SidebarLogin from '@/components/sidebarLogin'
import * as S from '@/styles/pages/explore'
import { Binoculars } from '@phosphor-icons/react'

export default function Explore() {
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
          </S.Header>
        </S.Content>
      </S.ExploreContainer>
    </>
  )
}
