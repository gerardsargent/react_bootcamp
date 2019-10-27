import React from 'react'
import useFormState from './hooks/useFormState'

const SimpleFormHooks = () => {
  const [email, setEmail, resetEmail] = useFormState('');
  const [text, setText, resetText] = useFormState('');

  return (
    <div>
      <h1>The email value is...{email}</h1>
      <input type="email" value={email} onChange={setEmail} />
      <p><button onClick={resetEmail}>Submit Email</button></p>
      <h1>The text value is...{text}</h1>
      <input type="text" value={text} onChange={setText} />
      <p><button onClick={resetText}>Submit Text</button></p>
    </div>
  )
}

export default SimpleFormHooks
