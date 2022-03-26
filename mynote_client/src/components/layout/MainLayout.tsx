import React, {FC, useEffect, useState} from 'react';
import Tree from "../TreeFiles/Tree";
import {
  MainLayoutRow,
  MainLayoutLeftSide,
  MainLayoutWrapper,
  MainLayoutHeader, MainLayoutFooter, MainLayoutRightSide
} from "./styles"
import {gql, useQuery} from "@apollo/client";
import arrayToTree from "array-to-tree"
import Header from "./Header/Header";
import Footer from "./Footer";
import { BallTriangle } from 'react-loader-spinner';


const GET_TREE = gql`
    query FoldersDocuments{
        folders{
            _id
            title
            parentFolderId {
                _id
            }
            childFoldersIds{
                _id
            }
            childDocsIds{
                _id
            }
        }

        documents {
            _id
            title
            parentFolderId
        }
    }
`

const MainLayout: FC = ({children}) => {
  const {loading, error, data} = useQuery(GET_TREE);
  // Тут будет useLazyQuery на запрос за конкретной заметкой
  const [tree, setTree] = useState<any>([])

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
        <MainLayoutLeftSide>
          {loading ? <BallTriangle
            wrapperStyle={{
              display: 'flex',
              justifyContent: 'center',
              height: '100%',
              alignItems: 'center'
          }}
            color="#556CD6"
            height={100}
            width={100}/>
            :
            <Tree data={tree}/>}
        </MainLayoutLeftSide>
        <MainLayoutRightSide>
          {children}
        </MainLayoutRightSide>
      </MainLayoutRow>
      <Footer/>
    </MainLayoutWrapper>
  );
};

export default MainLayout;