import React from "react";
import { shallow } from "enzyme";
import Login2 from "./Login2";

describe("Login2", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Login2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
