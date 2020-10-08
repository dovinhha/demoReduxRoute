import React, { Component } from 'react';

class Infomation extends Component {
  render() {
    const { student,numericalOrder } = this.props;
    return (
        <tr>
          <td>
            {numericalOrder+1}
          </td>
          <td>
            {student.studentCode}
          </td>
          <td>
            {student.name}
          </td>
          <td>
            {student.age}
          </td>
          <td>
            {student.classroom}
          </td>
        </tr>
    );
  }
}

export default Infomation;