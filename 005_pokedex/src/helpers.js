function formatNumber(num) {
  if (num < 10) {
    return `00${num}`
  } else if (num >= 10 && num < 100) {
    return `0${num}`
  } else {
    return `${num}`
  }
}

function buildImageArray(array) {
  let image_url_array = []

  for(let i = 1; i <= array.length * 2; i += 2) {
    const formattedNumber = formatNumber(i)
    image_url_array.push(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formattedNumber}.png`)
  }
  console.log('image_url_array', image_url_array)
  return image_url_array
}

function dealHands(array) {
  const copiedArray = [...array]
  // shuffle array
  const firstHand = copiedArray.sort(() => 0.5 - Math.random())
  // Get sub-array of first n elements after shuffle
  const secondHand = firstHand.splice(0, 4)

  return [firstHand, secondHand]
}

function showWinner(array) {
  const hand1ExpScores = array[0].map(exp => exp.base_experience)
  const hand2ExpScores = array[1].map(exp => exp.base_experience)
  const hand1Total = hand1ExpScores.reduce(
    ( accumulator, currentValue ) => accumulator + currentValue,
    0
  )
  const hand2Total = hand2ExpScores.reduce(
    ( accumulator, currentValue ) => accumulator + currentValue,
    0
  )

  return (hand1Total > hand2Total ? 'Hand 1' : 'Hand 2' )
}

export { buildImageArray, dealHands, showWinner }
