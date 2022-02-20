import styled from "styled-components"

interface NodeWrapperProps {
  level: number
}

export const NodeWrapper = styled.div<NodeWrapperProps>`
  padding-left: ${({level}) => level * 16 + 'px'};
  cursor: pointer;
`

export const NodeItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`