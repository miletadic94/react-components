import React, { Component } from 'react';
import '../App.css';

const slides = ['Jedan', 'Dva', 'Tri']

class Slider extends Component {

  state = {
    currentSlide: 0,
  }

  slide = (index) => {
    const {currentSlide} = this.state
    this.showSlide(currentSlide + index)
  }

  showSlide = (value) => {
    const {currentSlide} = this.state
    this.setState({currentSlide: value})
    if(value > slides.length-1) this.setState( {currentSlide: 0})
    if(value < 0) this.setState({currentSlide: slides.length-1})
    return currentSlide 
  }

  render() {
    const {currentSlide} = this.state
    return (
      <div>
        <div className="slideshow-container">
        {
          slides.map((item, index) => {
            return (
              <div key={index} className={currentSlide === index ? "fade" : "mySlides fade"}>
          <div className="numbertext">{index} / {item.length}</div>
            <label>{item}</label>
          <div className="text">Caption Text</div>
        </div>

            )
          })
        }

        <a className="prev" onClick={() => this.slide(-1)}>&#10094;</a>
        <a className="next" onClick={() => this.slide(1)}>&#10095;</a>
      </div>

      <div style={{textAlign:"center"}}>
        <span className="dot" onClick={() => this.showSlide(0)}></span> 
        <span className="dot" onClick={() => this.showSlide(1)}></span> 
        <span className="dot" onClick={() => this.showSlide(2)}></span> 
      </div>
    </div>
    );
  }
}

export default Slider;
