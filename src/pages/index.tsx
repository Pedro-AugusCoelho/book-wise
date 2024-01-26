import * as S from '@/styles/pages/home'

import SidebarLogin from '@/components/sidebarLogin'

export default function Home() {
  return (
    <>
      <S.HomeContainer>
        <S.Sidebar>
          <SidebarLogin />
        </S.Sidebar>

        <S.Content></S.Content>
      </S.HomeContainer>
    </>
  )
}
