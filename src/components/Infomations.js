import React, { Component } from "react";

class Infomations extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Student code</th>
            <th>Name</th>
            <th>Age</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>{this.props.children}</tbody>
      </table>
    );
  }
}

export default Infomations;
