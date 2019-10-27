import{ useState } from 'react'

const useFormState = (initialValue = '') => {
  const [value, setState] = useState(initialValue)
  const handleInput = e => {
    setState(e.target.value)
  }
  const reset = () => {
    setState('')
  }

  return [value, handleInput, reset]
}

export default useFormState
