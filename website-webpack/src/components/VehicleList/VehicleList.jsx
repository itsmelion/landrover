import React, { Component } from 'react';
import { keyBy } from 'lodash';
import { getData, getDetails } from 'api';
import VehicleItem from 'components/VehicleItem/VehicleItem';

export default class VehicleList extends Component {
	state = { data: null };

	componentDidMount() {
    this.fetchCarData();
  }

  fetchCarData() {
    getData()
      .then(async (response) => {
        let cars = await Promise.all(response.map(item => getDetails(item.id)));
        cars = keyBy(cars, 'id');

        response.forEach((item, index) => {
          response[index] = Object.assign(item, {
            price: cars[item.id].price,
            description: cars[item.id].description,
          });
        });

        return response;
      })
      .then(data => this.setState({ data }));

  }

	render() {
    const { data } = this.state;
    if(!data) return (<h1>Loading...</h1>);

    return (
      <main>
        <ul className="contain row VehicleList" align="center" mobile-align="start start">
          {data.map(vehicle => <VehicleItem key={vehicle.id} vehicle={vehicle} />)}
        </ul>
      </main>
    );
	}
}
