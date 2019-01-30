import React, { Component } from 'react';
import { getData } from '../../api';

export default class VehicleList extends Component {

	state = { data: null };

	componentDidMount() {
		getData(data => this.setState({ data }));
	}

	render() {
    const { data } = this.state;
    console.log(data);

    if(!data) return (<h1>Loading...</h1>);

    return (
      <h1>Hello Moto</h1>
    );
	}
}
