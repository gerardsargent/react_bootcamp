function choice (items) {
  const myChoice = items[Math.floor(Math.random() * items.length)]
  return myChoice
}

function remove (items, item) {
  const foundItemIndex = items.findIndex(i => i === item)
  items.splice(foundItemIndex, 1)
  const newArray = items
  return newArray.length
}

export { choice, remove }
