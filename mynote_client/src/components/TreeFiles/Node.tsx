import React, {FC} from 'react';
import {DATAType} from "../../types/types_data_from_server/dataType";
import {NodeItem, NodeRow, NodeTextWrap, NodeWrapper} from "./styles";
import {AiOutlineDown, AiOutlineFile, AiOutlineFolder, AiOutlineUp} from 'react-icons/ai';
import {useRouter} from 'next/router'
import {Tooltip} from "@mui/material";
import NodeMenu from "./NodeMenu";


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
      <NodeWrapper level={level}>
        <NodeItem>
          <NodeRow>
            <AiOutlineFolder/>
            <Tooltip title={item.title || ''} enterDelay={3000} arrow>
              <NodeTextWrap>
                {item.title}
              </NodeTextWrap>
            </Tooltip>
            {selected ? <AiOutlineDown onClick={onToggle}/> : <AiOutlineUp onClick={onToggle}/>}
          </NodeRow>
          <NodeMenu/>
        </NodeItem>
      </NodeWrapper>
      :
      <NodeWrapper level={level}>
        <NodeItem onClick={getDocument}>
          <NodeRow>
            {isFolder ? <AiOutlineFolder/> : <AiOutlineFile/>}
            <Tooltip title={item.title || ''} enterDelay={3000} arrow>
              <NodeTextWrap>
                {item.title}
              </NodeTextWrap>
            </Tooltip>
          </NodeRow>
          <NodeMenu/>
        </NodeItem>
      </NodeWrapper>
  );
};

export default Node;