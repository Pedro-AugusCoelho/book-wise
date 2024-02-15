import { Binoculars, TrendUp, User } from '@phosphor-icons/react'
import Link from 'next/link'

import * as S from '@/styles/components/buttonLink'
import router from 'next/router'

interface ButtonLinkProps {
  title: string
  icon: 'trend-up' | 'explore' | 'profile'
  route: string
  routeCurrent: boolean
}

export default function ButtonLink({
  title,
  icon,
  route,
  routeCurrent,
}: ButtonLinkProps) {
  return (
    <S.ButtonLink>
      <Link href={route} prefetch={false}>
        {routeCurrent ? <S.Highlighter /> : <S.HighlighterTransparent />}
        {icon === 'trend-up' && <TrendUp size={24} weight="fill" />}
        {icon === 'explore' && <Binoculars size={24} weight="fill" />}
        {icon === 'profile' && <User size={24} weight="fill" />}
        <span>{title}</span>
      </Link>
    </S.ButtonLink>
  )
}
