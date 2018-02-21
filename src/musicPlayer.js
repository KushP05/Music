import React, {Component} from 'react';
import { DropDown } from './components/dropDown';
import { Slider }from './components/slider';

export default class Home extends React.Component{
  constructor(){
    super();
    this.state={
      musicName:{ value: 'preset'},
      musicList: ['preset','pop', 'bass'],
      sliderData: [{label: '60', max: 255, min:0 }, {label: '310', max: 255, min:0 }, {label: '1k', max: 255, min:0 }, {label: '6k', max: 255, min:0 }, {label: '16k', max: 255, min:0 }],
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.setDefaultMusic = this.setDefaultMusic.bind(this);
    this.defaultMusicValue = this.defaultMusicValue.bind(this);
  }
  componentDidMount(){
    this.setDefaultMusic();
  }
  
  setDefaultMusic(){
    let defaultState= this.state.sliderData;
    this.state.musicList.map(data=>
      this.defaultMusicValue(data))
  }
  defaultMusicValue(music){
    let defaultValue;
    switch(music){
      case 'preset': defaultValue=[0,0,0,0,0]
      break;
      case 'pop': defaultValue=[60,120,180,30,240]
        break;
      case 'bass' : defaultValue=[128,150,40,100,220]
        break;
    }
    if(music){
      this.setState({ [music] : defaultValue}, this.setSliderColor)
    }
  }
  
  handleSelect(event){
    if(event.target.value==='preset'){
      this.setDefaultMusic();
    }
    const changeMusic = Object.assign({}, {value: event.target.value});
    this.setState({musicName:changeMusic});
    event.target.blur();
  }
  handleRangeChange(event){
    let data = this.state[this.state.musicName.value];
    let g = this.state.musicName.value;
    data[event.target.id] = Number(event.target.value);
    this.setState({[this.state.musicName.value]: data})
  }
  render(){
    return(
      <div>
        <div className='equalizer'>
          <div className='eqalizer-value'>
            <h5> -12 db </h5>
            <h5> 0 db </h5>
            <h5> 12 db </h5>
          </div> 
          <div className='equalizer__range'>
          {this.state.sliderData.map((slider,index) => (<Slider max={slider.max} label ={slider.label}key={index} id={index} min={slider.min} value={this.state[this.state.musicName.value] && this.state[this.state.musicName.value][index] || 0} onChange={this.handleRangeChange}/>))}
          </div>
          <DropDown list={this.state.musicList} value={this.state.musicName.value} onChange={this.handleSelect}/>
        </div>
      </div>
        
    )
  } 
}