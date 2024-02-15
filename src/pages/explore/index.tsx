import SidebarLogin from '@/components/sidebarLogin'
import * as S from '@/styles/pages/explore'

export default function Explore() {
  return (
    <>
      <S.ExploreContainer>
        <S.SidebarLeft>
          <SidebarLogin />
        </S.SidebarLeft>

        <S.Content></S.Content>
      </S.ExploreContainer>
    </>
  )
}
