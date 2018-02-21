import React, { Component } from 'react';

export default class DropDown extends React.Component{
  render(){
    const { list,defaultValue, ...props } = this.props;
    return(
      <div className='dropDownWrapper'>
        <select className='dropDown'{...props}>
          {list.map((item, index)=> <option key={index}> {item}</option>)}
        </select> 
      </div>
    );
  }
}