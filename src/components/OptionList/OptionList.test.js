import React from "react";
import { shallow } from "enzyme";
import OptionList from "./OptionList";

describe("Wrapper tests", () => {
  it("renders a list", () => {
    shallow(<OptionList data={[]} type='select'/>);
  })

});