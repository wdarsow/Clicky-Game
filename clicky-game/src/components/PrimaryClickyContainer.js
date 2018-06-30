import React, { Component } from "react";
// import ReactDOM from 'react-dom';
// import NavBar from "./NavBar";
// import Jumbo from "./Jumbo";
// import images from '../images/Bear'
import '../PrimaryClickyContainer.css';

function ImgSquare(props) {
    return (
        <button className="imgsquare" onClick={props.onClick}>
            onClick={() => this.handleClick()} 
            <img src={require('../images/Bear.png')} alt="bear"/>
        </button>
    )
}

class PrimaryClickyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicky: 0,
            show: true
        };
    }

    Increment = () => {
        this.setState({ clicky: this.state.clicky + 1 })
    }

    renderImgSquare(i) {
        return (
            <ImgSquare
                value={this.state.imgsquares[i]}
            />
        )
    }

handleClick() {
    let currentScore = 0;
    currentScore +=1;
    console.log(currentScore);
}
    
    render() {
        
        return (
                <div className="row1">
                
                <h3>{ this.state.clicky }</h3>

                    <button className="imgsquare" onClick={this.Increment}>
                        <img src={require('../images/Bear.png')} alt="bear"/>                    
                    </button>
    
                    <button className="imgsquare" onClick={this.Increment}>
                        <img src={require('../images/Beaver.png')} alt="beaver"/>
                    </button>

                    <button className="imgsquare" onClick={this.Increment}>
                        <img src={require('../images/Bird.png')} alt="bird"/>
                    </button>

                    <button className="imgsquare" onClick={this.Increment}>
                        <img src={require('../images/Cat.png')} alt="cat"/>
                    </button>

                    <button className="imgsquare" onClick={this.Increment}>
                        <img src={require('../images/Cow.png')} alt="cow"/>                    
                    </button>

                    <button className="imgsquare" onClick={this.Increment}>
                        <img src={require('../images/Crocodile.png')} alt="crocodile"/>
                    </button>

                    <button className="imgsquare" onClick={this.Increment}>
                        <img src={require('../images/Dog.png')} alt="dog"/>
                    </button>

                    <button className="imgsquare" onClick={this.Increment}>
                        <img src={require('../images/Dolphin.png')} alt="Dolphin"/>
                    </button>
                </div>
        );
    }
};

export default PrimaryClickyContainer;
