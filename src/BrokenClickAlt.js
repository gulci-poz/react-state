import React, {Component} from 'react';

class BrokenClickAlt extends Component {
    state = {clicked: false};
    handleClick = e => this.setState({clicked: !this.state.clicked});

    render() {
        return (
            <div>
                <h1>{this.state.clicked ? 'clicked' : 'not clicked'}</h1>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

export default BrokenClickAlt;
