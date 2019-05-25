import React, {Component} from 'react';

class Game extends Component {
    // constructor(props) {
    //     // super();
    //     super(props);
    //     this.state = {
    //         score: 0,
    //         gameOver: false
    //     };
    // }

    state = {
        score: 0,
        gameOver: false
    };

    render() {
        return (
            <div>
                <p>Your score is: {this.state.score}</p>
            </div>
        );
    }
}

export default Game;
