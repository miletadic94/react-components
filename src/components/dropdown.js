import React, { Component } from 'react';
import '../App.css';

class Dropdown extends Component {

  state = {
    open: false
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  componentDidMount = () => {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef) {
      this.toggleDropdown()  
    }
  }

  render() {
    const {open} = this.state
   return (
    <div className="dropdown">
    <button onClick={this.toggleDropdown} className="btn btn-secondary dropdown-toggle" >
      Dropdown button
    </button>
    {
      open ? 
    <div ref={this.setWrapperRef} className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
      <li className="dropdown-item" >Action</li>
      <li className="dropdown-item" > action</li>
      <li className="dropdown-item" > Something else here</li>
    </div> : null
    }
  </div>
    );
  }
}

export default Dropdown;
