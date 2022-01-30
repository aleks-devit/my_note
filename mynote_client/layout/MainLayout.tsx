import React, {FC} from 'react';
import {DATA} from "../moc_data/fileTree";
import Tree from "../components/TreeFiles/Tree";
import {
  MainLayoutRow,
  MainLayoutLeftSide,
  MainLayoutWrapper,
  MainLayoutHeader, MainLayoutFooter, MainLayoutRightSide
} from "./styles"

const MainLayout: FC = ({children}) => {
  return (
    <MainLayoutWrapper>
      <MainLayoutHeader/>
      <MainLayoutRow>
        <MainLayoutLeftSide>
          <Tree data={DATA}/>
        </MainLayoutLeftSide>
        <MainLayoutRightSide>
          {children}
        </MainLayoutRightSide>
      </MainLayoutRow>
      <MainLayoutFooter/>
    </MainLayoutWrapper>
  );
};

export default MainLayout;