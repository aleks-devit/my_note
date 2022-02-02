import styled from "styled-components"

export const MainLayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const MainLayoutHeader = styled.div`
  height: 50px;
  background-color: lightgray;
  `

export const MainLayoutRow = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
`

export const MainLayoutLeftSide = styled.div`
  width: 300px;
  border-right: 3px solid black;
`

export const MainLayoutRightSide = styled.div`
  flex: 1;
`

export const MainLayoutFooter = styled.div`
  height: 50px;
  background-color: lightgray;
  `