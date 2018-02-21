import React from 'react';

export const Slider =({label, max, min, value, ...props})=> {
    return(
      <div className='input__range__wrapper'>
        <h5 className='input__range__label'>{label}</h5>
        <input className='input__range'type='range' max={max} min={ min } style={{backgroundColor:`rgba(255, ${value}, 0,0.7 )`}}value ={ value } {...props}/>
      </div>
    )
}