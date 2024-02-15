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
  gap: '$1',

  'span:first-child': {
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

export const Body = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',

  marginTop: '$8',
  gap: '$5',
})

export const BookContainer = styled('div', {
  width: '108px',
  height: '152px',
  borderRadius: '$sm',

  background: '$gradient-vertical',
})

export const CommentContainer = styled('div', {
  flex: 1,
})

export const CommentHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  'span:first-child': {
    fontWeight: '$bold',
    color: '$gray-100',
  },

  span: {
    fontSize: '$sm',
    color: '$gray-400',
  },
})

export const CommentBody = styled('div', {
  width: '100%',
  maxHeight: '88px',
  wordBreak: 'break-word',
  overflow: 'hidden',
  textAlign: 'justify',
  marginTop: '$4',
})
