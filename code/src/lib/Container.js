import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-rows: [a] 20% [b] 10% [c] 10%px [d] 52% [e] 8% [f];
  grid-template-columns: [1] 8px [2] 30px [3] 40px [4] auto [5] 40px [6] 30px [7] 8px [8];
  grid-template-areas: 
    "header header header header header header header"
    "form form form form form form form"
    "view view view view view view view"
    "list list list list list list list";
  gap: 3px;
  align-items: center;
  background: ${(props) => props.background || 'lavender'};
`
// App

export const Container = styled.div`
  background: ${(props) => props.background || '#f8f8ff'};
  border-radius: 4px;
`
// this is a generic style
// summary

export const RoundedBottomContainer = styled(Container)`
  border-radius: 0 0 4px 4px;
  margin: 0;
`
// Summary

export const TaskContainer = styled(Container)`
  margin-bottom: 3px;
  border: 1px solid #5692ff;
`
// Task - specific
// convert this to an extended style of header

export const SummarySectionContainer = styled(Container)`
  grid-area: header;
  margin: 3px 0;
`
// Summary specific

export const FormContainer = styled(Container)`
  grid-area: form;
`
// AddTask - specific

export const ViewOptionsContainer = styled(Container)`
  grid-area: view;
`
// List - specific

export const ListContainer = styled.div`
  grid-area: list;
`
// list - specific