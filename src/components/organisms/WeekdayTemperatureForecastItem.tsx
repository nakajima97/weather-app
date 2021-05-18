import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Typography from '../atoms/Typography';

import TemperatureDisplay from '../molecules/TemperatureDisplay';
import TemperatureImage from '../molecules/TemperatureImage';

export type WeekdayTemperatureForecastItemProps = {
  date: string;
  highestTemperature: number;
  lowestTemperature: number;
  weather: 'sunny' | 'rain' | 'cloudy';
};

const container = css({
  display: 'flex',
});

const item = css({
  flexGrow: 1,
});

const WeekdayTemperatureForecastItem: FC<WeekdayTemperatureForecastItemProps> =
  ({ date, highestTemperature, lowestTemperature, weather }) => (
    <div>
      <div>
        <Typography>{date}</Typography>
      </div>
      <div>
        <TemperatureImage weather={weather} />
      </div>
      <div css={container}>
        <div css={item}>
          <TemperatureDisplay
            highestOrLowest="HIGHEST"
            temperature={highestTemperature}
          />
        </div>
        <div css={item}>
          <TemperatureDisplay
            highestOrLowest="LOWEST"
            temperature={lowestTemperature}
          />
        </div>
      </div>
    </div>
  );

export default WeekdayTemperatureForecastItem;
