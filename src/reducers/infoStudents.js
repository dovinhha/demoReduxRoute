import * as types from '../constants/actionTypes';

const initialState = [
  {
    studentCode  : '2018123456',
    name : 'Nguyen Van X',
    age : 20,
    classroom : 'CNTT3'
  },
  {
    studentCode  : '2018123457',
    name : 'Tran Van Y',
    age : 20,
    classroom : 'CNTT2'
  },
  {
    studentCode  : '2018123458',
    name : 'Nguyen Thi Z',
    age : 20,
    classroom : 'CNTT4'
  }
]

const infoStudents = (state = initialState , action) => {
  switch(action.type){
    case types.INFO_STUDENT : 
      // alert('Hi');
      return [...state];
    default : 
      return [...state];
  }
}

export default infoStudents;