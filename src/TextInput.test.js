import React from "react";
import TextInput from "./TextInput";
import renderer from "react-test-renderer";

it("renders label by default", () => {
  const tree = renderer
    .create(
      <TextInput
        id="firstName"
        label="First Name"
        name="firstName"
        value="example"
        onChange={jest.fn()}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("hides label when showLabel is false", () => {
  const tree = renderer
    .create(
      <TextInput
        showLabel={false}
        id="firstName"
        label="First Name"
        name="firstName"
        value="example"
        onChange={jest.fn()}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
