import React from 'react';

const Name = React.createClass({
    render() {
        return (
        <input type="text" name="name" placeholder="Ingrese su nombre" />
        );
    }
});

const Form = React.createClass({
  render() {
      return (
        <Name />
      );  
  }
});

export default Form;