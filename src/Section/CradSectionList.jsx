import React, { Component } from 'react';
import CardSection from './CradSection';

class CardSectionList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            SectionTitle: {
                SectionTitle1: "First Card Image Section",
                SectionTitle2: "Second Card Image Section"
            }
        }
    }
    render() {
        return <div className="base-component">
            <div className="card-section">
                <CardSection sectionTitle= {this.state.SectionTitle.SectionTitle1} img1="img/Card Background (1).jpg" img2="img/Card Background (2).jpg" img3="img/Card Background (3).jpg" img4="img/Card Background (4).jpg"></CardSection>
            </div>
            <div className="card-section">
                <CardSection sectionTitle= {this.state.SectionTitle.SectionTitle2} img1="img/Card Background (5).jpg" img2="img/Card Background (6).jpg" img3="img/Card Background (7).jpg" img4="img/Card Background (8).jpg"></CardSection>
            </div>
        </div>
    }
}



export default CardSectionList;