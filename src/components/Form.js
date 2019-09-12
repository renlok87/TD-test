import React, {useState, useContext} from 'react'
import {AlertContext} from '../context/alert/alertContext'
import {FirebaseContext} from '../context/firebase/firebaseContext'

export const Form = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const firebase = useContext(FirebaseContext)

  const submitHandler = event => {
    event.preventDefault()

    if (value.trim()) {
      firebase.addNote(value.trim()).then(() => {
        alert.show('Tip', 'success')
      }).catch(() => {
        alert.show('Some wrong', 'danger')
      })
      setValue('')
    } else {
      alert.show('Enter your tip')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter tip`s name"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  )
}
