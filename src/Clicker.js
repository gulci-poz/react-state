import React, {Component} from 'react';

class Clicker extends Component {
    state = {
        num: 1,
        isWinner: false
    };

    handleClick = () => {
        const randNum = Math.floor(Math.random() * 10) + 1;
        this.setState({
            num: randNum,
            isWinner: randNum === 7
        })
    };

    render() {
        return (
            <div>
                <h1>Number is {this.state.num}</h1>
                {
                    this.state.isWinner
                        ? <h2>YOU WIN!</h2>
                        : <button onClick={this.handleClick}>Random number</button>
                }
            </div>
        );
    }
}

export default Clicker;
