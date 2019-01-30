import React, { Component } from 'react';
import { getData } from 'api';
import VehicleItem from 'components/VehicleItem/VehicleItem';

export default class VehicleList extends Component {
	state = { data: null };

	componentDidMount() {
		getData(data => this.setState({ data }));
	}

	render() {
    const { data } = this.state;
    if(!data) return (<h1>Loading...</h1>);

    return (
      <main>
        <ul contain="">
          {data.map(vehicle => <VehicleItem vehicle={vehicle} />)}
        </ul>
      </main>
    );
	}
}
