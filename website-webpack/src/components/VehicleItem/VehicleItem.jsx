import React from 'react';
import PropTypes from 'prop-types';
import './VehicleItem.scss';

const VehicleItem = React.memo(({ vehicle }) => (
  <li className="VehicleItem">
    {vehicle.modelYear}
  </li>
));

VehicleItem.propTypes = {
  vehicle: PropTypes.objectOf(propTypes.any).isRequired
};

// VehicleItem.defaultProps = {
//   vehicle: 'Default',
// };

export default VehicleItem;
