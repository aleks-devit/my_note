import styled from "styled-components"
import {CustomScroll} from "../../styles/styled-components/CustomScroll";

export const MainLayoutWrapper = styled.div`
  height: 100vh;
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
  height: calc(100% - 120px);
`

export const MainLayoutLeftSide = styled(CustomScroll)`
  width: 300px;
  border-right: 3px solid black;
  overflow-y: scroll;
  overflow-x: hidden;
`

export const MainLayoutRightSide = styled.div`
  flex: 1;
`

export const MainLayoutFooter = styled.div`
  flex: 0 0 50px;
  background-color: #556CD6;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: #fff;
  `