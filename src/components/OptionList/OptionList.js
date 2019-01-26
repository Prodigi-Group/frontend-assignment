import React, { PureComponent } from "react";
import Option from "../Option";
import './OptionList.scss';

type Props = {
  data: Array,
  type: String
};

export default class OptionList extends PureComponent<Props, State> {
  state = {
    newData: this.props.data
  };
  componentDidMount() {
    this.setState({
      newData: this.updateItem()
    });
  }
  updateItem() {
    const { newData } = this.state;
    return newData.map(item => Object.assign({ active: false }, item));
  }

  render() {
    const selectItem = item => {
      const { newData } = this.state;
      const mappedData = newData.map(mappedItem =>
        mappedItem.key === item.key
          ? {
              active: true,
              key: mappedItem.key,
              text: mappedItem.text
            }
          : {
              active: false,
              key: mappedItem.key,
              text: mappedItem.text
            }
      );
      this.setState({
        newData: mappedData
      });
    };
    const { type } = this.props;
    const { newData } = this.state;
    return (
      <div className="option-list">
        {newData.length &&
          newData.map(item => (
            <Option key={item.key} props={{ item, type }} selectItem={selectItem} />
          ))}
      </div>
    );
  }
}
