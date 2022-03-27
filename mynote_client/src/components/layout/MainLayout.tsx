import React, {FC, useContext, useEffect, useState} from 'react'
import Tree from "../TreeFiles/Tree"
import {
  MainLayoutHideLeftSideBtn,
  MainLayoutLeftSide,
  MainLayoutRightSide,
  MainLayoutRow,
  MainLayoutWrapper
} from "./styles"
import {useQuery} from "@apollo/client"
import arrayToTree from "array-to-tree"
import Header from "./Header/Header"
import Footer from "./Footer"
import {GET_TREE} from "./queries"
import Preloader from "./items/Preloader";
import {drawerWidth} from './items/LayoutContent'
import { Context } from '../../context'


const MainLayout: FC = ({children}) => {
  const {loading, error, data} = useQuery(GET_TREE)
  const [tree, setTree] = useState<any>([])
  const [open, setOpen] = useState(true)

  const handleDrawerSwitch = () => {
    setOpen(prevOpen => !prevOpen)
  }

  useEffect(() => {
    if (!!data) {
      const parseData = data.folders.map((folders: any) => ({
        ...folders,
        parentFolderId: folders.parentFolderId ? folders.parentFolderId._id : null,
        children: folders.children ? folders.children : []
      }))
      const parseResult = parseData.concat(data.documents)
      const result = arrayToTree(parseResult, {parentProperty: 'parentFolderId', customID: '_id'})
      setTree(result)
    }
  }, [data])


  return (
    <MainLayoutWrapper>
      <Header/>
      <MainLayoutRow>
        <MainLayoutLeftSide
          width={drawerWidth}
          variant="persistent"
          anchor="left"
          open={open}
        >
          {loading ? <Preloader/> : <Tree data={tree}/>}
        </MainLayoutLeftSide>
        <MainLayoutRightSide open={open}>
          <MainLayoutHideLeftSideBtn open={open} onClick={handleDrawerSwitch}/>
          {children}
        </MainLayoutRightSide>
      </MainLayoutRow>
      <Footer/>
    </MainLayoutWrapper>
  )
}

export default MainLayout