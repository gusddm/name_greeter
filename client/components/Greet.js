import React from 'react';

const Greet = React.createClass({   
    render() {
        const {i, greet} = this.props;
        return (  
            <figure className="figure" onClick={this.activateGreet.bind(this, i)}>
                <div className='comment-form'>                                        
                    {greet.name} - {greet.country} - {greet.birthdate}
                </div>
            </figure>    
        )
    },
    activateGreet(i) {        
        this.props.activateGreet(i);
    }
})

export default Greet;