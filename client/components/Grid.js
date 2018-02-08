import React from 'react';

import Form from './Form';
import GreetPanel from './GreetPanel';
import ActiveGreet from './ActiveGreet';

const Grid = React.createClass({
    render() {
        return (
            <div className="grid">
                <Form {...this.props} />
                <GreetPanel {...this.props} />
                <ActiveGreet {...this.props} />
            </div>
        )
    }
});

export default Grid;