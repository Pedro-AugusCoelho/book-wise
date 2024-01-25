import { styled } from '../../../stitches.config'

export const ButtonAuth = styled('button', {
  width: '100%',
  padding: '$6',
  borderRadius: '$sm',
  backgroundColor: '$gray-600',
  outline: 0,
  border: 0,

  display: 'flex',
  gap: '$5',
  alignItems: 'center',

  color: '$gray-100',
  fontSize: '$lg',
  fontWeight: '$bold',

  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$gray-500',
    transition: 'background 0.2s',
  },
})
