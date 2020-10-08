import React, { Component } from 'react';
import { connect } from 'react-redux';
import Infomation from '../components/Infomation';
import Infomations from '../components/Infomations';
import * as actions from '../actions/index';

class InfoContainer extends Component {

  componentDidMount(){
    this.props.students();
  }

  render() {
    return (
      <Infomations>
        {this.showStudents(this.props.infoStudents)}
      </Infomations>
    );
  }

  showStudents(infoStudents){
    return infoStudents.map((student,index) =>
          <Infomation
            key={index}
            numericalOrder = {index}
            student={student}
          />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    infoStudents : state.infoStudents
  }
}

const mapDispatchToProps = (dispatch,props) => {
  return {
    students : () => {
      dispatch(actions.students());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (InfoContainer);