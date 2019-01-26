import React from "react";

import OptionList from "../../components/OptionList";
import './HomeScene.scss';

type Props = {
  data: Array
};
const HomeScene = ({ data }: Props) => {
  return (
    <div>
      {data &&
        data.length &&
        data.map(list => (
          <div className="option-container" key={list.key}>
            <label className="option-container--label">{list.text}</label>
            <OptionList data={list.values} type={list.type} />
          </div>
        ))}
    </div>
  );
};

export default HomeScene;
