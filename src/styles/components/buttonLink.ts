import { styled } from '../../../stitches.config'

export const ButtonLink = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '$4',

  cursor: 'pointer',
  paddingLeft: '$8',
  alignItems: 'center',

  span: {
    fontWeight: '$bold',
    fontSize: '$md',
  },

  '&:hover': {
    opacity: '0.5',
    transition: 'opacity .2s',
  },
})

export const Highlighter = styled('div', {
  width: '0.25rem',
  height: '100%',
  borderRadius: '$full',
  background: '$gradient-vertical',
})

export const HighlighterTransparent = styled('div', {
  width: '0.25rem',
  height: '100%',
  borderRadius: '$full',
  background: 'transparent',
})
