import React from "react";
import { shallow } from "enzyme";
import Regsiter from "./Regsiter";

describe("Regsiter", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Regsiter />);
    expect(wrapper).toMatchSnapshot();
  });
});
