import { styled } from '../../../stitches.config'

export const HomeContainer = styled('div', {
  display: 'grid',
  maxWidth: '100vw',
  gridTemplateColumns: '1fr 4fr 2fr',
  gap: '6rem',
})

export const SidebarLeft = styled('div', {
  flex: '20%',
  padding: '$4',
})

export const Content = styled('div', {
  flex: 1,
  padding: '$4',
})

export const SidebarRight = styled('div', {
  flex: '30%',
  padding: '$4',
})

export const HeaderContent = styled('div', {
  marginTop: '$10',
  marginBottom: '$10',

  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  color: '$green-100',

  span: {
    fontWeight: '$bold',
    color: '$gray-100',
    fontSize: '$2xl',
  },
})

export const Body = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  span: {
    color: '$gray-100',
    fontSize: '$sm',
    marginBottom: '$4',
  },
})

export const listBooks = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$3',
})
