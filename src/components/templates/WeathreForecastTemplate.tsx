import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import PlaceNameInputForm from '../organisms/PlaceNameInputForm';
import CurrentLocation from '../organisms/CurrentLocation';
import TemperatureLineChart from '../organisms/TemperatureLineChart';
import TodaysWeatherDisplay from '../organisms/TodaysWeatherDisplay';
import WeekdayWeatherForecast from '../organisms/WeekdayWeatherForecast';
import LinkLicenseInformation from '../organisms/LinkLicenseInformation';
import ErrorMessage from '../organisms/ErrorMessage';

import { Location } from '../../types/location';

type Props = {
  location: Location;
  setLocation: (location: Location) => void;
  errorMessage: string;
};

const container = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  width: 100%;
  max-width: 1000px;
  margin: 10px auto;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const fullWidth = css`
  grid-column: 1 / 3;
  @media (max-width: 480px) {
    grid-column: 1;
  }
`;

const weekdayWeatherForecastContainer = css`
  overflow-x: hidden;
`;

const footer = css`
  border-top: 1px solid #000;
  text-align: center;
  padding: 10px 0;
`;

const WeathreForecastTemplate: FC<Props> = ({
  setLocation,
  location,
  errorMessage,
}) => (
  <div css={container}>
    {errorMessage && (
      <div css={fullWidth}>
        <ErrorMessage />
      </div>
    )}
    <div css={fullWidth}>
      <PlaceNameInputForm setLocation={setLocation} />
    </div>
    <div css={fullWidth}>
      <CurrentLocation location={location} />
    </div>
    <div>
      <TodaysWeatherDisplay location={location} />
    </div>
    <div>
      <TemperatureLineChart location={location} />
    </div>
    <div css={[fullWidth, weekdayWeatherForecastContainer]}>
      <WeekdayWeatherForecast location={location} />
    </div>
    <footer css={[fullWidth, footer]}>
      <LinkLicenseInformation />
    </footer>
  </div>
);

export default WeathreForecastTemplate;
