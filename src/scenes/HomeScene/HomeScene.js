import React from "react";

import OptionList from "../../components/OptionList";

type Props = {
  data: Array
};
const HomeScene = ({ data }: Props) => {
  return (
    <div>
      {data &&
        data.length &&
        data.map(list => (
          <div key={list.key}>
            <label>{list.text}</label>
            <OptionList data={list.values} type={list.type} />
          </div>
        ))}
    </div>
  );
};

export default HomeScene;
