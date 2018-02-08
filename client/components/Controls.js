import React from 'react';

const Name = React.createClass({
    render() {
        return ( 
            <div>
                <input ref={name => this.name = name} type="text" name="name" placeholder="Ingrese su nombre" />
            </div>    
        );
    }
});

const Country = React.createClass({
    render() {
        return (
           <div className="photo-grid">
               <select ref={country => this.country = country}>
                   {this.props.countries.map((country, id) => <option key={id} i={id} country={country} {...this.props}>{country.name}</option>)}                         
               </select>        
           </div>
        )
    }
})

const BirthDate = React.createClass({
  render() {
      return (
          <div>
              <input ref={birthdate => this.birthdate = birthdate} type="text" name="birthdate" placeholder="dd/mm/yyyy" />
          </div>
      )
  }
})

export { Name, Country, BirthDate }