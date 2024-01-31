import { styled } from '../../../stitches.config'

export const SidebarLoginContainer = styled('div', {
  maxWidth: '230px',
  width: '100%',
  maxHeight: '100vh',
  height: '100%',
  borderRadius: '$md',

  background: '$gray-700',

  display: 'flex',
  flexDirection: 'column',
})

export const SidebarLoginHeader = styled('header', {
  padding: '$8',
  marginBottom: '$8',
  display: 'flex',
  justifyContent: 'center',

  flex: '10%',
})

export const SidebarLoginBody = styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  flex: '80%',
})

export const SidebarLoginFooter = styled('footer', {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  flexDirection: 'column',
  gap: '$4',

  flex: '10%',
})

export const BtnConnect = styled('button', {
  width: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',

  outline: 0,
  border: 0,
  background: 'transparent',

  cursor: 'pointer',
  color: '$gray-200',

  p: {
    fontWeight: '$bold',
  },

  '&:hover': {
    opacity: 0.7,
  },
})

export const BtnConnectImageContainer = styled('div', {
  width: '2rem',
  height: '2rem',
  borderRadius: '$full',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  background: '$gradient-vertical',
})
