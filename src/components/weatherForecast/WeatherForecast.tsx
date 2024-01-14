import { useMemo } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { useWeatherForecast } from "../../../hooks/useWeatherForecast";

export const WeatherForecast = () => {
  const { weatherForecastData } = useWeatherForecast();

  const avgValues = useMemo(() => {
    let arr = weatherForecastData?.forecast.forecastday.map(
      (day) => day.day.avgtemp_c
    );

    return arr;
  }, [weatherForecastData]);

  const maxValues = useMemo(() => {
    let arr = weatherForecastData?.forecast.forecastday.map(
      (day) => day.day.maxtemp_c
    );

    return arr;
  }, [weatherForecastData]);

  const minValues = useMemo(() => {
    let arr = weatherForecastData?.forecast.forecastday.map(
      (day) => day.day.mintemp_c
    );

    return arr;
  }, [weatherForecastData]);

  const dateRange = useMemo(() => {
    let arr = weatherForecastData?.forecast.forecastday.map((day) => {
      let newDate = new Date(day.date_epoch * 1000);
      return newDate.getDate();
    });

    return arr;
  }, [weatherForecastData]);

  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Weather Forecast",
      align: "left",
    },
    yAxis: {
      title: {
        text: "Temperature",
      },
    },
    xAxis: {
      categories: dateRange,
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    series: [
      {
        name: "maximum temperature",
        data: maxValues,
      },
      { name: "average temperature", data: avgValues },
      {
        name: "minimum temperature",
        data: minValues,
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
