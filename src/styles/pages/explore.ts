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
  marginTop: '$8',
})

export const HeaderTitle = styled('div', {
  display: 'flex',
  flex: 1,
  gap: '$3',
  alignItems: 'center',

  color: '$green-100',

  span: {
    fontWeight: '$bold',
    fontSize: '$2xl',
    color: '$gray-100',
  },
})

export const HeaderSearch = styled('div', {
  width: '100%',
  maxWidth: '30vw',
})

export const CarrouselContainer = styled('div', {
  width: '100%',

  display: 'flex',
  gap: '$4',
  marginTop: '$8',
})

export const ItemCarrousel = styled('div', {
  cursor: 'pointer',
  padding: '$2 $3',
  border: '2px solid $purple-100',
  borderRadius: '$lg',
  color: '$purple-100',

  '&.activated': {
    background: '$purple-200',
    borderColor: '$purple-200',
    color: '$gray-100',
  },
})
