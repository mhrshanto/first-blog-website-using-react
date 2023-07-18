import React, {Component} from 'react';
import "../CSS/page.css"

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mainheader: "React Js Learning with Codes Planner",
            startTitle: {
                startTitle1: "Hello Programmers!",
                startTitle2: "Hello Programmers 2!",
                startTitle3: "Hello programmers 3!"
            },
            mainTitle: {
                mainTitle1: "Codes Planner Main Title 1",
                mainTitle2: "Codes planner Main Title 2",
                mainTitle3: "Codes Planner Main Title 3"
            },
            paragraph: {
                paragraph1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facilis est iste blanditiis consequatur rem exercitationem, nesciunt error animi obcaecati.",
                paragraph2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facilis est iste blanditiis consequatur rem exercitationem, nesciunt error animi obcaecati.",
                paragraph3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facilis est iste blanditiis consequatur rem exercitationem, nesciunt error animi obcaecati."
            },
            footerHeading: "Thank You Very Much"
        }
    }
    render() {
        return (
        <div className="container">
                <h1 className='heading'>{this.state.mainHeader}</h1>
            <div className="carouselSlider">
                <div className="slider1">
                    <div className="text-section">
                            <p className="start-title">{ this.state.startTitle.startTitle1 }</p>
                            <h3 className="main-title">{ this.state.mainTitle.mainTitle1 }</h3>
                            <p className="pagagraph">{ this.state.paragraph.paragraph1 }</p>
                    </div>
                </div>
                <div className="slider1"> 
                    <div className="text-section">
                            <p className="start-title">{ this.state.startTitle.startTitle2}</p>
                            <h3 className="main-title">{ this.state.mainTitle.mainTitle2 }</h3>
                            <p className="pagagraph">{ this.state.paragraph.paragraph3 }</p>
                    </div>
                </div>
                <div className="slider1">
                    <div className="text-section">
                            <p className="start-title">{ this.state.startTitle.startTitle3 }</p>
                            <h3 className="main-title">{ this.state.mainTitle.mainTitle3}</h3>
                            <p className="pagagraph">{ this.state.paragraph.paragraph3}</p>
                    </div>
                </div>
                </div>
                <h1 className="heading">{ this.state.footerHeading }</h1>
                </div>
    );
    }
}

export default Carousel;