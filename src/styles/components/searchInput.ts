import { styled } from '../../../stitches.config'

export const InputContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  border: '2px solid $gray-500',
  borderRadius: '$sm',

  padding: '$2 $4',

  '&.focused': {
    borderColor: '$green-200',
  },
})

export const Input = styled('input', {
  flex: 1,
  outline: 0,
  border: 0,
  background: 'transparent',
  color: '$gray-400',

  '&:focus': {
    color: '$gray-100',
  },
})

export const InputIcon = styled('div', {
  color: '$gray-500',

  '&.focused': {
    color: '$green-200',
  },
})
