import React from "react";

type Props = {
  props: {
    item: Object,
    type: string,
    selectItem: () => void
  }
};

const Option = ({ props: { item, type, selectItem } }: Props) => {
  return (
    <div>
      {type === "select" ? (
        <button
          className={`${item.active ? "active select" : "select"}`}
          key={item.key}
          onClick={() => selectItem(item)}
        >
          {item.text}
        </button>
      ) : (
        <label>
          <input
            type={type}
            key={item.key}
            value={item.text}
            checked={item.active}
          />
          {item.text}
        </label>
      )}
    </div>
  );
};

export default Option;
