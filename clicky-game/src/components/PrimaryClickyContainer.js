import React, { Component } from "react";
// import ReactDOM from 'react-dom';
// import NavBar from "./NavBar";
// import Jumbo from "./Jumbo";
// import images from '../images/Bear'
import '../PrimaryClickyContainer.css';

function ImgSquare(props) {
    return (
        <button className="imgsquare" onClick={props.onClick}>
            <img src={require('../images/Bear.png')} alt="bear"/>
        </button>
    )
}

class PrimaryClickyContainer extends Component {
    renderImgSquare(i) {
        return (
            <ImgSquare
                value={this.state.imgsquares[i]}
            />
        )
    }
    
    render() {
        return (
                <div className="row1">
                    <button className="imgsquare">
                        <img src={require('../images/Bear.png')} alt="bear"/>
                    </button>

                    <button className="imgsquare">
                        <img src={require('../images/Beaver.png')} alt="beaver"/>
                    </button>

                    <button className="imgsquare">
                        <img src={require('../images/Bird.png')} alt="bird"/>
                    </button>

                    <button className="imgsquare">
                        <img src={require('../images/Cat.png')} alt="cat"/>
                    </button>
                </div>
        );
    }
};

export default PrimaryClickyContainer;
