import { useEffect, useState } from "react";


export const useWeatherForecast =() => {
    const [currentLocation, setCurrentLocation] = useState<Position>();
    const [weatherForecastData,setWeatherForecastData] = useState<WeatherForecastData>()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => setCurrentLocation(position),
      () => console.log("error")
    );
  }, []);

  useEffect(() => {
    if (currentLocation) {
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=6a02bba4e751482fa4b211802241301&q=${currentLocation.coords.latitude},${currentLocation.coords.longitude}&days=7`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setWeatherForecastData(data)
        }
        );
    }
  }, [currentLocation]);

  return {weatherForecastData}
}

interface Position {
    coords: Coordinates;
    timestamp: number;
  }
  
  interface Coordinates {
    latitude: number;
    longitude: number;
    altitude: number | null;
    accuracy: number;
    altitudeAccuracy: number | null;
    heading: number | null;
    speed: number | null;
  }
  
  
  type Current = {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: 0 | 1; 
    condition: {
        text: string;
        icon: string;
        code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
};

type Location = {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
};

type WeatherData = {
    time_epoch: number;
    time: string;
    temp_c: number;
    temp_f: number;
    is_day: 0 | 1; // Assuming is_day can only be 0 or 1
    condition: {
        text: string;
        icon: string;
        code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    snow_cm: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    windchill_c: number;
    windchill_f: number;
    heatindex_c: number;
    heatindex_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    will_it_rain: 0 | 1; 
    chance_of_rain: number;
    will_it_snow: 0 | 1; 
    chance_of_snow: number;
    vis_km: number;
    vis_miles: number;
    gust_mph: number;
    gust_kph: number;
    uv: number;
};

type Astro = {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: number;
    is_moon_up: 0 | 1; // Assuming is_moon_up can only be 0 or 1
    is_sun_up: 0 | 1;  // Assuming is_sun_up can only be 0 or 1
};

type Day = {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_mph: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalprecip_in: number;
    totalsnow_cm: number;
    avgvis_km: number;
    avgvis_miles: number;
    avghumidity: number;
    daily_will_it_rain: 0 | 1; 
    daily_chance_of_rain: number;
    daily_will_it_snow: 0 | 1;
    daily_chance_of_snow: number;
    condition: {
        text: string;
        icon: string;
        code: number;
    };
    uv: number;
};

type DateForecast = {
    astro:Astro,
    date:string,
    date_epoch:number,
    day:Day,
    hour:WeatherData[]
}

type WeatherForecastData = {
    current:Current,
    forecast:{forecastday:DateForecast[]},
    location:Location
}

