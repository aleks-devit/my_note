import React, {FC, useState} from 'react';
import {DATAType} from "../../types/types_data_from_server/dataType";
import {NodeItem, NodeRow, NodeWrapper} from "./styles";
import {AiOutlineDown, AiOutlineFile, AiOutlineFolder, AiOutlineUp} from 'react-icons/ai';
import {useRouter} from 'next/router'
import NodeMenu from "./NodeMenu";
import NodeText from "./nodeText/NodeText";

interface NodeProps {
  item: DATAType
  level: number
  onToggle: false | (() => void)
  selected: boolean
  isFolder: boolean
}

const Node: FC<NodeProps> = ({item, level, onToggle, selected, isFolder}) => {
  const router = useRouter()
  const [rename, setRename] = useState(false)
  const getDocument = () => {
    router.push('/?docId=' + item._id)
  }

  return (
    onToggle ?
      <NodeWrapper level={level}>
        <NodeItem>
          <NodeRow>
            <AiOutlineFolder size={24}/>
              <NodeText
                isFolder={isFolder}
                id={item._id}
                onRename={setRename}
                rename={rename}
                title={item.title || ''}
              />
            {selected ? <AiOutlineDown onClick={onToggle}/> : <AiOutlineUp onClick={onToggle}/>}
          </NodeRow>
          <NodeMenu onRename={setRename}/>
        </NodeItem>
      </NodeWrapper>
      :
      <NodeWrapper level={level}>
        <NodeItem>
          <NodeRow onClick={getDocument}>
            {isFolder ? <AiOutlineFolder size={24}/> : <AiOutlineFile size={24}/>}
              <NodeText
                isFolder={isFolder}
                id={item._id}
                onRename={setRename}
                rename={rename}
                title={item.title || ''}
              />
          </NodeRow>
          <NodeMenu onRename={setRename}/>
        </NodeItem>
      </NodeWrapper>
  );
};

export default Node;