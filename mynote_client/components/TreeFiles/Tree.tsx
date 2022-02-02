import React, {FC} from 'react';
import Branch from "./Branch";
import {DATAType} from "../../types/types_data_from_server/dataType";


interface TreeProps {
  data: DATAType[]
}

const Tree: FC<TreeProps> = ({data}) => {
  return (
    <div>
      {data.map((item: DATAType) => <Branch key={item.id} item={item} level={0}/>)}
    </div>
  );
};

export default Tree;