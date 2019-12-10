import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Register } from "./Register.jsx";
import { Redirect } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("<Register />", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Register />);
  });
  it("should have a redirect component if isRegistered is true", () => {
    component.setProps({ isRegistered: true });
    expect(
      component.contains(<Redirect from="/register" to="/dashboard" />)
    ).toBeTruthy();
  });

  it("should not have redirect component if isRegistered is false", () => {
    component.setProps({ isRegistered: false });
    expect(
      component.contains(<Redirect from="/register" to="/dashboard" />)
    ).toBeFalsy();
  });
});

// to be truthy is from jest
// expect from jest

// let component;
//   beforeEach(() => {
//     component = shallow(<Register />);
//   });
//from enzyme
// set props enzyme
// contains from enzyme
