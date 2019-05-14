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
  let imageUrlArray = []
  const imageIds = array.map(pokemon => pokemon.id)

  for(let i = 1; i <= imageIds.length; i ++) {
    imageUrlArray.push(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatNumber(imageIds[i])}.png`)
  }

  const newArray = array.map((pokemon, index) => {
    return { ...pokemon, imgUrl: imageUrlArray[index] }
  })

  console.log(newArray)

  return imageUrlArray
}

function dealHands(array) {
  const originalArray = [...array]
  // shuffle array
  const firstHand = originalArray.sort(() => 0.5 - Math.random())
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
