import { styled } from '../../../stitches.config'

export const HomeContainer = styled('div', {
  display: 'flex',
  width: '100%',
  maxWidth: '100vw',
  height: '100vh',
  margin: '0 auto',
})

export const Sidebar = styled('div', {
  flex: '30%',
  padding: '$4',
})

export const Content = styled('div', {
  flex: '70%',
  padding: '$4',
})
