import * as S from '../../styles/components/sidebarLogin'
import Logo from '../../../public/images/LogoBookWise.svg'

import { useRouter } from 'next/router'
import Image from 'next/image'

import ButtonLink from './components/buttonLink'
import { SignOut as SignOutIcon } from '@phosphor-icons/react'
import { useSession } from 'next-auth/react'
import { BookWiseContext } from '@/context/bookWiseContext'
import { useContext } from 'react'

export default function SidebarLogin() {
  const { SignOut } = useContext(BookWiseContext)

  const router = useRouter()
  const session = useSession()

  async function handleSignOut() {
    await SignOut()
  }

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

          {session && session.status && (
            <ButtonLink
              icon="profile"
              title="Perfil"
              routeCurrent={router.route === '/profile'}
              route="/profile"
            />
          )}
        </S.SidebarLoginBody>

        <S.SidebarLoginFooter>
          <S.BtnConnect onClick={handleSignOut}>
            {session.status === 'authenticated' && (
              <>
                <S.BtnConnectImageContainer>
                  {session.data.user.avatar_url && (
                    <S.UserImage
                      src={session.data.user.avatar_url}
                      alt="ImageUser"
                      width={32}
                      height={32}
                    />
                  )}
                </S.BtnConnectImageContainer>
                <span>{session.data.user.name}</span>
                <SignOutIcon size={24} weight="fill" />
              </>
            )}

            {session.status !== 'authenticated' && (
              <>
                <p>Fazer Login</p>
                <SignOutIcon size={24} weight="fill" />
              </>
            )}
          </S.BtnConnect>
        </S.SidebarLoginFooter>
      </S.SidebarLoginContainer>
    </>
  )
}
