import * as S from '../../styles/components/sidebarLogin'
import Logo from '../../../images/LogoBookWise.svg'

import { useRouter } from 'next/router'
import Image from 'next/image'

import ButtonLink from './components/buttonLink'

export default function SidebarLogin() {
  const router = useRouter()
  return (
    <>
      <S.SidebarLoginContainer>
        <S.SidebarLoginHeader>
          <Image src={Logo} alt="book-wise-logo" />
        </S.SidebarLoginHeader>

        <S.SidebarLoginBody>
          <ButtonLink
            icon="trend-up"
            title="Início"
            route={router.route === '/'}
          />

          <ButtonLink
            icon="explore"
            title="Explorar"
            route={router.route === '/explore'}
          />

          <ButtonLink
            icon="profile"
            title="Perfil"
            route={router.route === '/profile'}
          />
        </S.SidebarLoginBody>
      </S.SidebarLoginContainer>
    </>
  )
}
