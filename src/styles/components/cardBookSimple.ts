import { styled } from '../../../stitches.config'

export const Content = styled('div', {
  width: '100%',
  padding: '$5',
  background: '$gray-700',
  borderRadius: '$md',

  display: 'flex',
  gap: '$5',
})

export const BookContainer = styled('div', {
  width: '64px',
  height: '94px',
  borderRadius: '$sm',
  background: '$gradient-vertical',
})

export const InfoContainer = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'space-between',
})

export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  span: {
    fontWeight: '$bold',
  },

  'span:last-child': {
    fontSize: '$sm',
    color: '$gray-400',
  },
})

export const Footer = styled('div', {
  //
})

export const RatingContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '$2',
})
