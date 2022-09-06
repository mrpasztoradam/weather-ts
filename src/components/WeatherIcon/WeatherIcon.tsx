import React from 'react';
import thunderIcon from '../../img/wsymbol_0016_thundery_showers.svg';
import lightRainIcon from '../../img/wsymbol_0009_light_rain_showers.svg';
import heavyRainIcon from '../../img/wsymbol_0010_heavy_rain_showers.svg';
import lightSnowIcon from '../../img/wsymbol_0011_light_snow_showers.svg';
import heavySnowIcon from '../../img/wsymbol_0012_heavy_snow_showers.svg';
import mistIcon from '../../img/wsymbol_0006_mist.svg';
import fogIcon from '../../img/wsymbol_0007_fog.svg';
import sunnyIcon from '../../img/wsymbol_0001_sunny.svg';
import { inherits } from 'util';

interface IIcon {
  id?: number;
  icon?: string;
}
const WeatherIcon = ({ id, icon }: IIcon) => {
  const icons = [
    { id: 200, icon: thunderIcon },
    { id: 201, icon: thunderIcon },
    { id: 202, icon: thunderIcon },
    { id: 210, icon: thunderIcon },
    { id: 211, icon: thunderIcon },
    { id: 212, icon: thunderIcon },
    { id: 221, icon: thunderIcon },
    { id: 230, icon: thunderIcon },
    { id: 231, icon: thunderIcon },
    { id: 232, icon: thunderIcon },
    { id: 300, icon: lightRainIcon },
    { id: 301, icon: lightRainIcon },
    { id: 302, icon: lightRainIcon },
    { id: 310, icon: lightRainIcon },
    { id: 311, icon: lightRainIcon },
    { id: 312, icon: lightRainIcon },
    { id: 313, icon: lightRainIcon },
    { id: 314, icon: lightRainIcon },
    { id: 321, icon: lightRainIcon },
    { id: 500, icon: lightRainIcon },
    { id: 501, icon: heavyRainIcon },
    { id: 502, icon: heavyRainIcon },
    { id: 503, icon: heavyRainIcon },
    { id: 504, icon: heavyRainIcon },
    { id: 511, icon: heavyRainIcon },
    { id: 520, icon: heavyRainIcon },
    { id: 521, icon: heavyRainIcon },
    { id: 522, icon: heavyRainIcon },
    { id: 531, icon: heavyRainIcon },
    { id: 600, icon: lightSnowIcon },
    { id: 601, icon: lightSnowIcon },
    { id: 602, icon: heavySnowIcon },
    { id: 611, icon: heavySnowIcon },
    { id: 612, icon: heavySnowIcon },
    { id: 613, icon: heavySnowIcon },
    { id: 615, icon: heavySnowIcon },
    { id: 616, icon: heavySnowIcon },
    { id: 620, icon: heavySnowIcon },
    { id: 621, icon: heavySnowIcon },
    { id: 622, icon: heavySnowIcon },
    { id: 701, icon: mistIcon },
    { id: 711, icon: mistIcon },
    { id: 721, icon: mistIcon },
    { id: 731, icon: mistIcon },
    { id: 741, icon: fogIcon },
    { id: 751, icon: fogIcon },
    { id: 761, icon: fogIcon },
    { id: 762, icon: fogIcon },
    { id: 771, icon: fogIcon },
    { id: 781, icon: fogIcon },
    { id: 800, icon: sunnyIcon },
    { id: 801, icon: sunnyIcon },
    { id: 802, icon: sunnyIcon },
    { id: 803, icon: sunnyIcon },
    { id: 804, icon: sunnyIcon },
  ];

  return (
    <img
      style={{ maxHeight: 'inherit', maxWidth: 'inherit' }}
      src={icons.find((m) => m.id === id)?.icon}
      alt="Weather icon"
    />
  );
};

export default WeatherIcon;
