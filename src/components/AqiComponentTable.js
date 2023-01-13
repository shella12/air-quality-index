import { PropTypes } from 'prop-types';

const AqiComponentTable = (props) => {
  const { components } = props;
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>Pollutant concentration in μg/m3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Carbon monoxide (CO)</td>
          <td>
            {components.co}
          </td>
        </tr>
        <tr>
          <td>Nitrogen monoxide (NO)</td>
          <td>

            {components.no}
          </td>
        </tr>
        <tr>
          <td>Nitrogen dioxide (NO2)</td>
          <td>

            {components.no2}
          </td>
        </tr>
        <tr>
          <td>Ozone (O3)</td>
          <td>
            {components.o3}
          </td>
        </tr>
        <tr>
          <td>Sulphur dioxide (SO2)</td>
          <td>
            {components.so2}
          </td>
        </tr>
        <tr>
          <td>Ammonia (NH3)</td>
          <td>
            {components.co}
          </td>
        </tr>
        <tr>
          <td>particulates (PM2.5 and PM10)</td>
          <td>

            {components.pm2_5}
            {' '}
            and
            {components.pm10}
          </td>
        </tr>
      </tbody>
    </table>

  );
};

AqiComponentTable.propTypes = {
  components: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
};
export default AqiComponentTable;
