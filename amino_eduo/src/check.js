import React from "react";
import { Button } from "antd";

const name = "Alamin";
const spell = "check spell on";
// this is better committed/
//? this is nice committed/
// ! this need to be checked.
//* this another way for pretty commits.

const fucn = () => {
  if (name === "Alamin") {
    console.log(name);
  } else {
    if (name !== "Alamin") {
      console.log(name);
    }
  }
};
class AppTest extends React.Component {
  render() {
    return (
      <div>
        <Button type="primary" onClick={fucn}>
          Click Me
        </Button>
      </div>
    );
  }
}
