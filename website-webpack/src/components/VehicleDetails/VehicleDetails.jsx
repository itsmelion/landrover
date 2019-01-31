import React, { PureComponent } from 'react';
import { keyBy } from 'lodash';
import { getData, getDetails } from 'api';
import Loading from 'components/Loading/Loading';
import './VehicleDetails.scss';

class VehicleDetails extends PureComponent {
  state = { vehicle: null };

  componentDidMount() {
    this.fetchCarData();
  }

  fetchCarData() {
    const { match } = this.props;

    return getDetails(match.params.id)
      .then(async (response) => {
        let cars = await getData();
        cars = keyBy(cars, 'id');

        response = Object.assign(response, {
          media: cars[response.id].media[0],
          year: cars[response.id].modelYear,
        });

        return response;
      })
      .then(vehicle => this.setState({ vehicle }))
      .catch(e => new Error(e));
  }

  render() {
    const { vehicle } = this.state;
    console.log(vehicle);
    if (!vehicle) return Loading;

    return (
      <main id="VehicleDetails" className="contain">
        <div className="row nowrap mobile-column">
          <header>
            <img
              fill=""
              className="thumbnail cover-fit"
              src={vehicle.media.url}
              alt={vehicle.media.name}
            />
          </header>

          <section className="p2">
            <h1>{vehicle.media.name} {vehicle.year}</h1>

            <legend>{vehicle.description}</legend>

            <h2>{vehicle.price}</h2>

            <table className="mv1">
              <tbody>
                <tr>
                  <td>
                    Passengers:
                  </td>
                  <td>
                    <b>{vehicle.meta.passengers}</b>
                  </td>
                </tr>

                <tr>
                  <td>
                    Body styles:
                  </td>
                  <td>
                    {vehicle.meta.bodystyles.map(i => <li key={i}>{i}</li>)}
                  </td>
                </tr>

                <tr>
                  <td>
                  Drive train:
                  </td>
                  <td>
                    {vehicle.meta.drivetrain.map(i => <li key={i}>{i}</li>)}
                  </td>
                </tr>

                <tr>
                  <td>
                    Emissions:
                  </td>
                  <td>
                    {vehicle.meta.emissions.template.replace(
                      '$value',
                      vehicle.meta.emissions.value
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </main>
    );
  }
}

export default VehicleDetails;
