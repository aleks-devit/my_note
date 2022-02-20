import styled from "styled-components"

export const MainLayoutWrapper = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
`

export const MainLayoutHeader = styled.div`
  flex: 0 0 50px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  padding: 0 10px;
  `

export const MainLayoutRow = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
`

export const MainLayoutLeftSide = styled.div`
  width: 300px;
  border-right: 3px solid black;
  overflow-y: scroll;
`

export const MainLayoutRightSide = styled.div`
  flex: 1;
`

export const MainLayoutFooter = styled.div`
  flex: 0 0 50px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  padding: 0 10px;
  `