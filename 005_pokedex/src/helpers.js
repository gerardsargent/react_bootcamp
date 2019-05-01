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

  for(let i = 1; i < array.length; i ++) {
    const formattedNumber = formatNumber(i)
    image_url_array.push(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formattedNumber}.png`)
  }
  console.log('image_url_array', image_url_array)
  return image_url_array
}

export default buildImageArray
