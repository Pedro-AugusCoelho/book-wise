import { styled } from '../../../stitches.config'

export const LoginContainer = styled('div', {
  display: 'flex',
  width: '100%',
  maxWidth: '100vw',
  height: '100vh',
  margin: '0 auto',
})

export const ImageAside = styled('div', {
  display: 'flex',
  flex: '40%',
  padding: '$5',
})

export const ImageContainer = styled('div', {
  width: '100%',
  height: '100%',
  borderRadius: '$md',
  background: '$gray-500',
})

export const AccessAside = styled('div', {
  display: 'flex',
  flex: '60%',
  padding: '$5',
})

export const AccessContainer = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const AuthContainer = styled('div', {
  width: '100%',
  maxWidth: '25vw',
})

export const AuthHeader = styled('header', {
  width: '100%',

  span: {
    color: '$gray-200',
  },
})

export const AuthBody = styled('header', {
  width: '100%',
  marginTop: '$10',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$4',
})
