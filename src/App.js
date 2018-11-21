import React, { Component } from 'react';
import './App.css';
import Dropdown from './components/dropdown';


class App extends Component {

  state = {
    open: false,
  }

  toggleModal = () => {
    this.setState(prevState => ({
      open: !prevState.open,
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
      this.toggleModal()  
    }
  }

  render() {
    const {open} = this.state
    return (
      <Dropdown />
      // <div>
      //   <button onClick={this.toggleModal} type="button" className="btn btn-primary">
      //     Launch demo modal
      //   </button>
      //   {
      //     open ?
      //       <div  ref={this.setWrapperRef} className="modal fade" style={{display: open ? 'block' : 'none'}}>
      //         <div className="modal-dialog">
      //           <div className="modal-content">
      //             <div className="modal-header">
      //               <h5 className="modal-title">Modal title</h5>
      //               <button onClick={this.toggleModal} type="button" className="close" aria-label="Close">
      //                 <span>&times;</span>
      //               </button>
      //             </div>
      //             <div className="modal-body">
      //               ...
      //           </div>
      //             <div className="modal-footer">
      //               <button onClick={this.toggleModal} type="button" className="btn btn-secondary" >Close</button>
      //               <button onClick={this.toggleModal} type="button" className="btn btn-primary">Save changes</button>
      //             </div>
      //           </div>
      //         </div>
      //       </div> : null
      //   }
      // </div>

    );
  }
}

export default App;
