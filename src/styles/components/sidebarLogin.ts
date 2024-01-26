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
})

export const SidebarLoginBody = styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})
