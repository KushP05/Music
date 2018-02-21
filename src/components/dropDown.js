import React, { Component } from 'react';

export const DropDown=({list, ...props})=>{
    return(
      <div className='dropDownWrapper'>
        <select className='dropDown'{...props}>
          {list.map((item, index)=> <option key={index}> {item}</option>)}
        </select> 
      </div>
    );
}