import React from 'react';

const monthObj = {1:'Enero', 2: 'Febrero', 3: 'Marzo', 4: 'Abril', 5: 'Mayo', 6: 'Junio', 7: 'Julio', 8: 'Agosto', 9: 'Septiembre', 10: 'Octubre', 11: 'Noviembre', 12: 'Diciembre'};

const ActiveGreet = React.createClass({
    
    getAge(birthdateArr) {
        const now = new Date();
        var yearDif = now.getUTCFullYear() - birthdateArr[2];
        if((birthdateArr[1] < now.getUTCMonth() + 1) || birthdateArr[0] < now.getUTCDay()) {
            yearDif--;
        }
        return yearDif;
    },
    getMonth(month) {
        let monthNum = parseInt(month);
        return monthObj[monthNum];
    },
    renderGreet(active) {        
        const birthdateArr = active.birthdate.split("/");
        return <h2>Hola {active.name} de {active.country}, el dia {birthdateArr[0]} del mes {this.getMonth(birthdateArr[1])} tendras {this.getAge(birthdateArr)} años</h2>
    },
    render() {                
        return (  
            <div>
                {this.props.greets.filter(greet => greet.active).map(active => this.renderGreet(active))}
            </div>
        )
    }
});

export default ActiveGreet;