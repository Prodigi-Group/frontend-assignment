import React, { PureComponent } from "react";
import Option from "../Option";

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
      newData: this.deselectAll()
    });
  }
  deselectAll() {
    const { newData } = this.state;
    return newData.map(item => Object.assign({ active: false }, item));
  }

  render() {
    const selectItem = item => {
      const { newData } = this.state;
      const mappedData = newData.map(mappedItem =>
        mappedItem.key === item.key
          ? (mappedItem.active = true)
          : (mappedItem.active = false)
      );
      this.setState({
        newData: mappedData
      });
    };
    const { type } = this.props;
    const { newData } = this.state;
    return (
      <div className="checkbox-wrapper">
        {newData.length &&
          newData.map(item => <Option props={{ item, type, selectItem }} />)}
      </div>
    );
  }
}
