export default function countRateStart(rateNumber: number) {
  const rate: string[] = []

  if (rateNumber > 0) {
    for (let i = 0; i < rateNumber; i++) {
      rate.push('fill')
    }
  }

  while (rate.length < 5) {
    rate.push('thin')
  }

  return rate
}
