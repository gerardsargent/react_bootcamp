function choice (items) {
  const myChoice = items[Math.floor(Math.random() * items.length)]
  return myChoice
}

function remove (items, item) {
  // foundItem = items.find(i => i === item)
  const foundItemIndex = items.findIndex(i => i === item)
  const splicedArray = items.splice(foundItemIndex)
  return splicedArray
}

export { choice, remove }
