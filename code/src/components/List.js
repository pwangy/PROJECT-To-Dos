/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Task } from 'components/Task'
import { ClearDone } from 'components/ClearDoneButton'
import { ClearButton } from 'components/ClearButton'
import { Select } from 'lib/Select'
import { ViewOptionsContainer, ListContainer } from 'lib/Container'
import { Label } from 'lib/Text'

export const List = () => {
  const [priority, setPriority] = useState('')
  const items = useSelector((state) => {
    if (!priority) return state.remember.items
    else return state.remember.items.filter((item) => item.priority === priority)
  })

  return (
    <>
      <ViewOptionsContainer background="#cce5ff">
        <Label>
          Filter by:
          <Select
            value={priority}
            onChange={(event) => setPriority(event.target.value)}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
            <option value="">Show All</option>
          </Select>
        </Label>
        <ClearDone />
        <ClearButton />
      </ViewOptionsContainer>
      <ListContainer background="pink">
        {items.map((item) => (
          <Task key={item.id} item={item} />
        ))}
      </ListContainer>
    </>
  )
}