import React from 'react';
import User from '../User';
import withFilter from '../../HOC/withFilter';
import withView from '../../HOC/withView';


function List({ users }) {
  console.log('List render?')
  return users.map((user, index) => <User key={index} {...user}/>);
}

export default withView(withFilter(List, { key: 'users' }));