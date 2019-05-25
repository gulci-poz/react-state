import React, {Component} from 'react';

class Button extends Component {
    render() {
        return (
            <div>
                {/*<button onClick={() => alert('clicked')}>Click me</button>*/}
                <button onClick={function () {
                    alert('clicked');
                }}>Click me
                </button>
            </div>
        );
    }
}

export default Button;
