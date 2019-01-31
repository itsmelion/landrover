import React from 'react';
import './VehicleItem.scss';

const VehicleItem = React.memo(({ vehicle }) => (
  <li className="mb05 column mobile-row mobile-nowrap VehicleItem">
    <div mobile-flex="30">
      <img
        className="thumbnail cover-fit"
        src={vehicle.media[0].url}
        alt={vehicle.media[0].name}
      />
    </div>

    <legend
      flex=""
      mobile-flex="70"
      className="p1 column"
      align="start center"
      mobile-align="start start"
    >
      <h4 className="mb1 name">{vehicle.modelYear}</h4>
      <p className="mb05">From {vehicle.price}</p>
      <span className="flex hide-mobile" />
      <p>{vehicle.description}</p>
    </legend>
  </li>
));

export default VehicleItem;
