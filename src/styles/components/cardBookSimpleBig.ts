import { styled } from '../../../stitches.config'

export const CardBook = styled('div', {
  background: '$gray-700',
  borderRadius: '$md',
  padding: '$5',
  display: 'flex',
  gap: '$3',
})

export const CoverBook = styled('div', {
  width: '108px',
  height: '152px',
  borderRadius: '$md',
  background: '$gradient-vertical',
})

export const DescriptionBook = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'space-between',
})

export const HeaderBook = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: '$1',

  'span:first-child': {
    color: '$gray-100',
    fontWeight: '$bold',
  },

  span: {
    fontSize: '$sm',
    color: '$gray-400',
  },
})

export const Footer = styled('div', {
  //
})

export const RatingContainer = styled('div', {
  display: 'flex',
  gap: '$2',

  color: '$purple-100',
})
