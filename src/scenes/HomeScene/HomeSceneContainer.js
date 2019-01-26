import React, { PureComponent } from "react";

import axios from "axios";

import HomeScene from "./HomeScene";

type State = {
  data: Array
};

export default class HomeSceneContainer extends PureComponent<{}, State> {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://5c3ef0e3c27832001404e2ac.mockapi.io/settings")
      .then(res => this.setState({ data: res }));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <HomeScene data={data ? data.data : []} />
      </div>
    );
  }
}
