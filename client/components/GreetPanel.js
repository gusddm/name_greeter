import React from 'react';

import Greet from './Greet';

const GreetPanel = React.createClass({
    render() {
        return ( 
            <div className="grid-figure">
                 {this.props.greets.map((greet, id) => <Greet key={id} i={id} greet={greet} {...this.props} />)} 
            </div>
        )
    }
});

export default GreetPanel;                