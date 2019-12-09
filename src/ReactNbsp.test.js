import React from "react";

import ReactNbsp from "./ReactNbsp";

import Enzyme, { render } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("ReactNbsp adds one space character by default", () => {
  const component = render(
    <div>
      Sp
      <ReactNbsp />
      ace
    </div>
  );

  expect(component.text()).toEqual("Sp\u00A0ace");
});

test("ReactNbsp should add two space characters if count prop is 2", () => {
  const component = render(
    <div>
      Sp
      <ReactNbsp count={2} />
      ace
    </div>
  );

  expect(component.text()).toEqual("Sp\u00A0\u00A0ace");
});

test("ReactNbsp should render null when count is less than 1", () => {
  const component = render(
    <div>
      Sp
      <ReactNbsp count={-2} />
      ace
    </div>
  );

  expect(component.text()).toEqual("Space");
});
