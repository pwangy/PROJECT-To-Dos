import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background: ${(props) => props.background || '#f8f8ff'};
  margin: 0;
  ${'' /* padding: 0 16px; */}
  border-radius: 0 0 4px 4px;
`

export const RoundedContainer = styled.div`
  background: ${(props) => props.background || '#f8f8ff'};
  margin-bottom: 3px;
  ${'' /* padding: 0 16px; */}
  border-radius: 4px;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: flex-end;

  ${'' /* @media (min-width: 500px) {
    ${'' /* padding: 0 45px; */}
  } */}
`

export const TaskContainer = styled.div`
  margin-bottom: 3px;
  background: #f8f8ff;
  border-radius: 4px;
  border: 1px solid #5692ff;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

export const AppShell = styled.div`
  ${'' /* width: 95%; */}
  ${'' /* backgrsound: ${(props) => props.background || 'lavender'}; */}
  ${'' /* margin-bottom: 3px;
  padding: 0 16px; */}
  ${'' /* border-radius: 4px; */}
  ${'' /* flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: flex-end; */}
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  ${'' /* @media (min-width: 500px) {
    ${'' /* padding: 0 45px; */}
  } */}
`

// check breakpoints
// also found in: text, icon