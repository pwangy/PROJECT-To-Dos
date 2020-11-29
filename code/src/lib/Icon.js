/* eslint-disable no-unused-vars */
import styled from 'styled-components'
import Grid from 'lib/Text'

import remember from 'img/remember.png'

export const Icon = styled.img.attrs({
  src: `${remember}`,
  alt: 'icon'
})`
  height: 50px;
  width: 50px;
  margin: 10px 10px 0 0;
  grid-column-start: 2;
  grid-row-start: a;

  ${'' /* @media (min-width: 500) {
    height: 150px;
    width: 150px;
    margin: 15px 15px 0 0;
  } */}
`