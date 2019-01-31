import React from 'react';
import { Link } from "react-router-dom";
import './VehicleItem.scss';

const VehicleItem = React.memo(({ vehicle }) => (
  <li className="mb05 column VehicleItem">
    <Link to={vehicle.id} className="flex column mobile-row mobile-nowrap">
      <div mobile-flex="33">
        <img
          className="thumbnail cover-fit"
          src={vehicle.media[0].url}
          alt={vehicle.media[0].name}
        />
      </div>

      <legend
        flex=""
        mobile-flex="66"
        className="p1 column"
        align="start center"
        mobile-align="start start"
      >
        <h4 className="mb1 name">{vehicle.media[0].name} {vehicle.modelYear}</h4>
        <p className="mb05">From {vehicle.price}</p>
        <span className="flex hide-mobile" />
        <p>{vehicle.description}</p>
      </legend>
    </Link>
  </li>
));

export default VehicleItem;
