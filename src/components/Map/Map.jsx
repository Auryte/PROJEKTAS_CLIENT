import React from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import LocationPin from './LocationPin';

const createMapOptions = function (maps) {
  return {
    panControl: true,
    mapTypeControl: true,
    scrollwheel: false,
    styles: [{ stylers: [{ saturation: -90 }, { gamma: 0.8 }, { lightness: 4 }, { visibility: 'on' }] }]
  };
};

const Map = ({ location, zoomLevel }) => {
  return (
    <div className={styles.Map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        options={createMapOptions}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;

Map.propTypes = {
  location: PropTypes.object.isRequired,
  zoomLevel: PropTypes.number.isRequired
};
