import { RatingCompleted, RatingSimple } from '@/@types/rating'
import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const allRating: RatingSimple[] = await prisma.rating.findMany()

  const rating: RatingCompleted[] = []

  if (allRating.length > 0) {
    for (let i = 0; i < allRating.length; i++) {
      const user = await prisma.user.findUnique({
        where: {
          id: allRating[i].user_id,
        },
      })

      const book = await prisma.book.findUnique({
        where: {
          id: allRating[i].book_id,
        },
      })

      if (user && book) {
        rating.push({
          user,
          book,
          rating: allRating[i],
        })
      }
    }

    return res.status(200).json({ rating })
  } else {
    return res.status(401)
  }
}
