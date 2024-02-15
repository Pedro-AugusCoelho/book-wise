import * as S from '../../styles/components/sidebarLogin'
import Logo from '../../../public/images/LogoBookWise.svg'

import { useRouter } from 'next/router'
import Image from 'next/image'

import ButtonLink from './components/buttonLink'
import { SignOut } from '@phosphor-icons/react'

export default function SidebarLogin() {
  const router = useRouter()
  const userLogged = false

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
            routeCurrent={router.route === '/'}
            route="/"
          />

          <ButtonLink
            icon="explore"
            title="Explorar"
            routeCurrent={router.route === '/explore'}
            route="/explore"
          />

          <ButtonLink
            icon="profile"
            title="Perfil"
            routeCurrent={router.route === '/profile'}
            route="/profile"
          />
        </S.SidebarLoginBody>

        <S.SidebarLoginFooter>
          <S.BtnConnect>
            {userLogged && (
              <>
                <S.BtnConnectImageContainer></S.BtnConnectImageContainer>
                <span>Pedro A. Coelho</span>
                <SignOut size={24} weight="fill" />
              </>
            )}

            {!userLogged && (
              <>
                <p>Fazer Login</p>
                <SignOut size={24} weight="fill" />
              </>
            )}
          </S.BtnConnect>
        </S.SidebarLoginFooter>
      </S.SidebarLoginContainer>
    </>
  )
}
