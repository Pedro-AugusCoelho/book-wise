import { styled } from '../../../stitches.config'

export const ExploreContainer = styled('div', {
  display: 'grid',
  maxWidth: '100vw',
  gridTemplateColumns: '1fr 4fr',
  minHeight: '100vh',
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

export const Header = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const HeaderTitle = styled('div', {
  display: 'flex',
  gap: '$3',
  alignItems: 'center',
  marginTop: '$8',

  color: '$green-100',

  span: {
    fontWeight: '$bold',
    fontSize: '$2xl',
    color: '$gray-100',
  },
})
