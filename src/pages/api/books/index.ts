import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  // RECEBENDO A CATEGORIA SELECIONADA
  const categoryId = req.query.category as string
  const filter = req.query.filter as string

  const booksData = await prisma.book.findMany({
    where:
      categoryId !== 'all'
        ? {
            categories: {
              some: {
                categoryId,
              },
            },
          }
        : undefined,
    include: {
      ratings: {
        orderBy: {
          created_at: 'desc',
        },
        include: {
          user: true,
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
    },
  })

  if (booksData) {
    return res.status(200).json(booksData)
  } else {
    return res.status(401)
  }
}
