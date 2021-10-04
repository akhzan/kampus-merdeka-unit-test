import { useState } from 'react'
import './App.css'

function App({ submit }) {
  const [values, setValues] = useState({ name: '', type: '' })
  const handleSubmit = (e) => {
    e.preventDefault()
    submit(values)
  }
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input name='name' id='name' placeholder="Input pokemon's name" onChange={handleChange} value={values.name} />
        <label htmlFor='type'>Type</label>
        <input name='type' id='type' placeholder="Input pokemon's type" onChange={handleChange} value={values.type} />
        <button type='submit' name='submit'>
          Submit
        </button>
        <button type='button' name='cancel' disabled={!!values.name}>
          Cancel
        </button>
      </form>
    </div>
  )
}

export default App
