import React from "react";
import { shallow } from "enzyme";
import Option from "./Option";

describe("Item tests", () => {
  it("renders an item", () => {
    shallow(
      <Option beer={{ active: "test", key: "test", text: "test" }} />
    );
  });
    //it("changes class", () => {});
});
