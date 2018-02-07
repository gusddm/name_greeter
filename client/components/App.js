import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import { countriesFetchData } from '../actions/actionCreators';
import { Link } from 'react-router';

import Form from './Form';

class App extends Component {
    componentDidMount() {
        this.props.fetchData('https://restcountries.eu/rest/v2/all');
    }

    render() {
        return (
            <div>
                <Link to="/">Name Greeter</Link>
                { React.cloneElement(this.props.children, this.props) }
            </div>    
        );
    }
};

const mapStateToProps = (state) => {
    return {
        countries : state.countries,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(countriesFetchData(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
  