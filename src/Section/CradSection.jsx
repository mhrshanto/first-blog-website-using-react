import React from 'react';
import Card from './SubJSX/Card';


function CardSection(props) {
    return (
        <div className="main-container">
            <div className="conatiner">
                <h1 className="section-title">{ props.sectionTitle }</h1>
                <div className="row-1">
                    <div className="card-item">
                        <Card imgsrc={ props.img1 } title="Beautiful Road" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi illum deserunt tempore! Doloremque repellat obcaecati voluptas delectus magnam et ipsa?"></Card>
                    </div>
                    <div className="card-item">
                        <Card imgsrc={ props.img2 } title="Beautiful Umbrella" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi illum deserunt tempore! Doloremque repellat obcaecati voluptas delectus magnam et ipsa?"></Card>
                    </div>
                    <div className="card-item">
                        <Card imgsrc={ props.img3 } title="Beautiful Umbrella" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi illum deserunt tempore! Doloremque repellat obcaecati voluptas delectus magnam et ipsa?"></Card>
                    </div>
                    <div className="card-item">
                        <Card imgsrc={ props.img4 } title="Beautiful Umbrella" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi illum deserunt tempore! Doloremque repellat obcaecati voluptas delectus magnam et ipsa?"></Card>
                    </div>
                </div>
             </div>
            </div>
    )
}


export default CardSection;
