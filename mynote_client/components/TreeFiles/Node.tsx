import React, {FC, useContext} from 'react';
import {DATAType} from "../../types/types_data_from_server/dataType";
import {NodeItem, NodeWrapper} from "./styles";
import {AiOutlineDown, AiOutlineFile, AiOutlineFolder, AiOutlineUp} from 'react-icons/ai';
import { gql, useLazyQuery} from "@apollo/client";
import { Context } from '../../context'
import { useRouter } from 'next/router'


interface NodeProps {
  item: DATAType
  level: number
  onToggle: false | (() => void)
  selected: boolean
  isFolder: boolean
}

const Node: FC<NodeProps> = ({item, level, onToggle, selected, isFolder}) => {
  const router = useRouter()

  const getDocument = () => {
    router.push('/?docId=' + item._id)
  }

  return (
    onToggle ?
      <NodeWrapper level={level} onClick={onToggle}>
        <NodeItem>
          <AiOutlineFolder/>
          {item.title}
          {selected ? <AiOutlineDown/> : <AiOutlineUp/>}
        </NodeItem>
      </NodeWrapper>
      :
      <NodeWrapper level={level}>
        <NodeItem  onClick={getDocument}>
          {isFolder ? <AiOutlineFolder/> : <AiOutlineFile/>}
          {item.title}
        </NodeItem>
      </NodeWrapper>
  );
};

export default Node;