import React from 'react'
import { useSelector } from 'react-redux'

import { SummarySectionContainer, Container, RoundedBottomContainer } from 'lib/Container'
import { Icon } from 'lib/Icon'
import { Title, Subtitle, H3 } from 'lib/Text'

export const Summary = () => {
  const items = useSelector((state) => state.remember.items)
  const toDo = items.filter((item) => item.done !== true)

  return (
    <SummarySectionContainer>
      <Container background="papayawhip">
        <Title><Icon />Remember</Title>
      </Container>
      <RoundedBottomContainer background="#5692ff">
        <Subtitle>{items.length} Total</Subtitle>
        <H3>{toDo.length} more to go</H3>
      </RoundedBottomContainer>
    </SummarySectionContainer>
  )
}