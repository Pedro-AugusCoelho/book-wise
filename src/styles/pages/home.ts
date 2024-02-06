import { styled } from '../../../stitches.config'

export const HomeContainer = styled('div', {
  display: 'grid',
  maxWidth: '100vw',
  gridTemplateColumns: '1fr 4fr',
})

export const SidebarLeft = styled('div', {
  flex: '20%',
  padding: '$4',
})

export const Content = styled('div', {
  flex: 1,
  padding: '$4',

  display: 'flex',
  flexDirection: 'column',
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
  display: 'flex',
  flexDirection: 'row',
  gap: '6rem',
})

export const BodyLeft = styled('div', {
  flex: 3,

  p: {
    color: '$gray-100',
    fontSize: '$sm',
    marginBottom: '$4',
  },
})

export const BodyRight = styled('div', {
  flex: 1,
})

export const CallTitle = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '$4',

  p: {
    color: '$gray-100',
    fontSize: '$sm',
  },

  a: {
    fontWeight: '$bold',
    fontSize: '$sm',
    color: '$purple-100',
    textDecoration: 'none',

    display: 'flex',
    alignItems: 'center',
    gap: '$1',
  },
})

export const listBooks = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$3',
})
