import React from "react";
import { shallow } from "enzyme";
import Counter2 from "./Counter2";

describe("Counter2", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Counter2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
