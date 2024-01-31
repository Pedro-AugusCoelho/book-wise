import { styled } from '../../../stitches.config'

export const Content = styled('div', {
  width: '100%',
  padding: '$6',
  background: '$gray-700',
  borderRadius: '$md',
})

export const Header = styled('header', {
  display: 'flex',
  gap: '$4',
})

export const ProfileImageBackground = styled('div', {
  width: '40px',
  height: '40px',
  background: '$gradient-vertical',

  borderRadius: '$full',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ProfileImageContainer = styled('div', {
  width: '35px',
  height: '35px',
  background: '$gray-300',

  borderRadius: '$full',
})

export const NameContainer = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: '$2',

  p: {
    color: '$gray-100',
  },

  span: {
    fontSize: '$sm',
    color: '$gray-400',
  },
})

export const RatingContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '$2',
})
