import React from "react";
import './Option.scss';

type Props = {
  props: {
    item: Object,
    type: string
  },
  selectItem: () => void
};

const Option = ({ props: { item, type }, selectItem }: Props) => {
  return (
      type === "select" && (
        <button
          className={`${item.active ? "option-list--item active select" : "option-list--item select"}`}
          key={item.key}
          onClick={() => selectItem(item)}
        >
          {item.text}
        </button>
      ) 
  );
};

export default Option;
