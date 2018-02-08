import React, { Component } from 'react';

import { Name, Country, BirthDate } from './Controls';

class Form extends Component {

  render() {
      return (
        <div>        
            <form ref="greetForm">    
                <label>Name: <Name ref={name => this.nameComp = name } /></label>
                <label>Country: <Country ref={country => this.countryComp = country } {...this.props} /></label>
                <label>Birthday: <BirthDate ref={birthdate => this.birthDateComp = birthdate } /></label>
                <p>
                    <button className="button" onClick={this.handleSubmit.bind(this)}>Saludar</button>
                </p>
            </form>
        </div>    
      )
  }
  handleSubmit(e) {
     e.preventDefault();   

     if(this.nameComp.name.value.trim() === '') {
         alert('Ingrese un nombre valido');
         return false;
     }
     
     if(this.countryComp.country.value.trim() === '') {
        alert('Ingrese un pais valido');
        return false;
     }

     if(this.birthDateComp.birthdate.value.trim() === '') {
        alert('Ingrese una fecha valida');
        return false;
     }

     const birthDateArr = this.birthDateComp.birthdate.value.split("/");

     if(birthDateArr[0] < 1 || birthDateArr[0] > 31 || birthDateArr[1] > 12 || birthDateArr[1] < 1 || birthDateArr[2] > new Date().getUTCFullYear()) {
        alert('Ingrese una fecha valida');
        return false;
     }

     this.props.addGreet(this.nameComp.name.value, this.countryComp.country.value, this.birthDateComp.birthdate.value);   
     this.refs.greetForm.reset();
  }
}

export default Form;