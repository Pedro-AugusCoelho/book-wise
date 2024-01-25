import * as S from '@/styles/pages/login'
import ButtonAuth from '@/components/buttonAuth'
import { GoogleLogo, GithubLogo, User } from '@phosphor-icons/react'

export default function Login() {
  return (
    <>
      <S.LoginContainer>
        <S.ImageAside>
          <S.ImageContainer></S.ImageContainer>
        </S.ImageAside>

        <S.AccessAside>
          <S.AccessContainer>
            <S.AuthContainer>
              <S.AuthHeader>
                <h1>Boas vindas!</h1>
                <span>Faça seu login ou acesse como visitante.</span>
              </S.AuthHeader>

              <S.AuthBody>
                <ButtonAuth>
                  <GoogleLogo size={32} color="white" weight="fill" />
                  <span>Entrar com Google</span>
                </ButtonAuth>

                <ButtonAuth>
                  <GithubLogo size={32} color="white" weight="fill" />
                  <span>Entrar com Github</span>
                </ButtonAuth>

                <ButtonAuth>
                  <User size={32} color="white" weight="fill" />
                  <span>Acessar como visitante</span>
                </ButtonAuth>
              </S.AuthBody>
            </S.AuthContainer>
          </S.AccessContainer>
        </S.AccessAside>
      </S.LoginContainer>
    </>
  )
}
