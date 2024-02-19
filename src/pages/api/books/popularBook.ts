import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const popularBook = await prisma.book.findMany({
    select: {
      id: true,
      name: true,
      author: true,
      cover_url: true,
      ratings: {
        select: {
          rate: true,
        },
      },
      _count: {
        select: {
          ratings: true,
        },
      },
    },
    orderBy: {
      ratings: {
        _count: 'desc',
      },
    },
    take: 3,
  })

  if (popularBook) {
    return res.status(200).json(popularBook)
  } else {
    return res.status(401)
  }
}
