import React, { Component } from 'react'

export class SimpleComponent extends Component {
    constructor() {
      super()
    
      this.state = {
         count:0,
         toggle:false
      }
    }

     increment=()=>{
        this.setState({count: this.state.toggle?this.state.count : this.state.count+1})

    }

    handleToggle=()=>{
        this.setState({toggle: !this.state.toggle})
    }
    
    
    
    render() {
    return (
        <>
      <div>Simple Component</div>
      {this.state.count}
      <br/>
      <button onClick={this.handleToggle}>Set Toggle</button>
      <button  onClick={this.increment}>counter</button>
      </>

    )
  }
}

export default SimpleComponent