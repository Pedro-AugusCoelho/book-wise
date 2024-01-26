import { Binoculars, TrendUp, User } from '@phosphor-icons/react'

import * as S from '@/styles/components/buttonLink'
import router from 'next/router'

interface ButtonLinkProps {
  title: string
  icon: 'trend-up' | 'explore' | 'profile'
  route: boolean
}

export default function ButtonLink({ title, icon, route }: ButtonLinkProps) {
  return (
    <S.ButtonLink>
      {route ? <S.Highlighter /> : <S.HighlighterTransparent />}
      {icon === 'trend-up' && <TrendUp size={24} weight="fill" />}
      {icon === 'explore' && <Binoculars size={24} weight="fill" />}
      {icon === 'profile' && <User size={24} weight="fill" />}
      <span>{title}</span>
    </S.ButtonLink>
  )
}
