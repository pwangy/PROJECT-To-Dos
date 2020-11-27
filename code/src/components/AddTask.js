/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { remember } from 'reducers/remember'
import { FormContainer } from 'lib/Container'
import { Button } from 'lib/Button'
import { Select } from 'lib/Select'
import { Label } from 'lib/Text'

export const AddTask = () => {
  const [text, setText] = useState('')
  const [priority, setPriority] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(remember.actions.addTask({ text, priority }))
    setText('') // clearing input
    setPriority('') // clearing input
  }

  return (
    <FormContainer background="#cce5ff">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="add an item"
          required />

        <Label>
          Set Priority:
          <Select
            value={priority}
            onChange={(event) => setPriority(event.target.value)}>
            <option value="">Select...</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Select>
        </Label>
        <Button type="submit">Add Item</Button>
      </form>
    </FormContainer>
  )
}