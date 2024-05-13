const fakeWeatherData = {
  location: {
    name: "Tokyo",
    region: "Tokyo",
    country: "Japan",
    lat: 35.69,
    lon: 139.69,
    tz_id: "Asia/Tokyo",
    localtime_epoch: 1715565156,
    localtime: "2024-05-13 10:52",
  },
  current: {
    last_updated_epoch: 1715564700,
    last_updated: "2024-05-13 10:45",
    temp_c: 21.0,
    temp_f: 69.8,
    is_day: 1,
    condition: {
      text: "Light rain shower",
      icon: "//cdn.weatherapi.com/weather/64x64/day/353.png",
      code: 1240,
    },
    wind_mph: 11.9,
    wind_kph: 19.1,
    wind_degree: 210,
    wind_dir: "SSW",
    pressure_mb: 1006.0,
    pressure_in: 29.71,
    precip_mm: 0.32,
    precip_in: 0.01,
    humidity: 94,
    cloud: 75,
    feelslike_c: 21.0,
    feelslike_f: 69.8,
    vis_km: 4.5,
    vis_miles: 2.0,
    uv: 5.0,
    gust_mph: 32.2,
    gust_kph: 51.9,
  },
  forecast: {
    forecastday: [
      {
        date: "2024-05-13",
        date_epoch: 1715558400,
        day: {
          maxtemp_c: 21.1,
          maxtemp_f: 69.9,
          mintemp_c: 15.5,
          mintemp_f: 59.9,
          avgtemp_c: 18.7,
          avgtemp_f: 65.7,
          maxwind_mph: 29.5,
          maxwind_kph: 47.5,
          totalprecip_mm: 51.05,
          totalprecip_in: 2.01,
          totalsnow_cm: 0.0,
          avgvis_km: 6.8,
          avgvis_miles: 4.0,
          avghumidity: 86,
          daily_will_it_rain: 1,
          daily_chance_of_rain: 98,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: "Heavy rain",
            icon: "//cdn.weatherapi.com/weather/64x64/day/308.png",
            code: 1195,
          },
          uv: 2.0,
        },
        astro: {
          sunrise: "04:38 AM",
          sunset: "06:38 PM",
          moonrise: "08:42 AM",
          moonset: "11:52 PM",
          moon_phase: "Waxing Crescent",
          moon_illumination: 26,
          is_moon_up: 1,
          is_sun_up: 1,
        },
        hour: [
          {
            time_epoch: 1715526000,
            time: "2024-05-13 00:00",
            temp_c: 20.2,
            temp_f: 68.4,
            is_day: 0,
            condition: {
              text: "Partly Cloudy ",
              icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
              code: 1003,
            },
            wind_mph: 17.0,
            wind_kph: 27.4,
            wind_degree: 193,
            wind_dir: "SSW",
            pressure_mb: 1012.0,
            pressure_in: 29.9,
            precip_mm: 0.0,
            precip_in: 0.0,
            snow_cm: 0.0,
            humidity: 70,
            cloud: 49,
            feelslike_c: 20.2,
            feelslike_f: 68.4,
            windchill_c: 20.2,
            windchill_f: 68.4,
            heatindex_c: 20.2,
            heatindex_f: 68.4,
            dewpoint_c: 14.6,
            dewpoint_f: 58.2,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 24.8,
            gust_kph: 39.9,
            uv: 1.0,
          },
          {
            time_epoch: 1715529600,
            time: "2024-05-13 01:00",
            temp_c: 20.1,
            temp_f: 68.3,
            is_day: 0,
            condition: {
              text: "Partly Cloudy ",
              icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
              code: 1003,
            },
            wind_mph: 16.1,
            wind_kph: 25.9,
            wind_degree: 193,
            wind_dir: "SSW",
            pressure_mb: 1012.0,
            pressure_in: 29.87,
            precip_mm: 0.0,
            precip_in: 0.0,
            snow_cm: 0.0,
            humidity: 70,
            cloud: 57,
            feelslike_c: 20.2,
            feelslike_f: 68.3,
            windchill_c: 20.2,
            windchill_f: 68.3,
            heatindex_c: 20.2,
            heatindex_f: 68.3,
            dewpoint_c: 14.5,
            dewpoint_f: 58.0,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 23.8,
            gust_kph: 38.4,
            uv: 1.0,
          },
          {
            time_epoch: 1715533200,
            time: "2024-05-13 02:00",
            temp_c: 19.9,
            temp_f: 67.8,
            is_day: 0,
            condition: {
              text: "Patchy rain nearby",
              icon: "//cdn.weatherapi.com/weather/64x64/night/176.png",
              code: 1063,
            },
            wind_mph: 14.5,
            wind_kph: 23.4,
            wind_degree: 187,
            wind_dir: "S",
            pressure_mb: 1011.0,
            pressure_in: 29.85,
            precip_mm: 0.02,
            precip_in: 0.0,
            snow_cm: 0.0,
            humidity: 73,
            cloud: 100,
            feelslike_c: 19.9,
            feelslike_f: 67.8,
            windchill_c: 19.9,
            windchill_f: 67.8,
            heatindex_c: 19.9,
            heatindex_f: 67.8,
            dewpoint_c: 14.9,
            dewpoint_f: 58.7,
            will_it_rain: 1,
            chance_of_rain: 88,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 21.5,
            gust_kph: 34.6,
            uv: 1.0,
          },
          {
            time_epoch: 1715536800,
            time: "2024-05-13 03:00",
            temp_c: 19.3,
            temp_f: 66.8,
            is_day: 0,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
              code: 1153,
            },
            wind_mph: 15.0,
            wind_kph: 24.1,
            wind_degree: 191,
            wind_dir: "SSW",
            pressure_mb: 1011.0,
            pressure_in: 29.84,
            precip_mm: 0.6,
            precip_in: 0.02,
            snow_cm: 0.0,
            humidity: 81,
            cloud: 100,
            feelslike_c: 19.4,
            feelslike_f: 66.8,
            windchill_c: 19.4,
            windchill_f: 66.8,
            heatindex_c: 19.4,
            heatindex_f: 66.8,
            dewpoint_c: 16.1,
            dewpoint_f: 60.9,
            will_it_rain: 1,
            chance_of_rain: 100,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 2.0,
            vis_miles: 1.0,
            gust_mph: 21.2,
            gust_kph: 34.1,
            uv: 1.0,
          },
          {
            time_epoch: 1715540400,
            time: "2024-05-13 04:00",
            temp_c: 19.2,
            temp_f: 66.6,
            is_day: 0,
            condition: {
              text: "Light rain",
              icon: "//cdn.weatherapi.com/weather/64x64/night/296.png",
              code: 1183,
            },
            wind_mph: 15.7,
            wind_kph: 25.2,
            wind_degree: 172,
            wind_dir: "S",
            pressure_mb: 1010.0,
            pressure_in: 29.81,
            precip_mm: 1.27,
            precip_in: 0.05,
            snow_cm: 0.0,
            humidity: 90,
            cloud: 100,
            feelslike_c: 19.2,
            feelslike_f: 66.6,
            windchill_c: 19.2,
            windchill_f: 66.6,
            heatindex_c: 19.2,
            heatindex_f: 66.6,
            dewpoint_c: 17.5,
            dewpoint_f: 63.4,
            will_it_rain: 1,
            chance_of_rain: 100,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 9.0,
            vis_miles: 5.0,
            gust_mph: 22.8,
            gust_kph: 36.8,
            uv: 1.0,
          },
          {
            time_epoch: 1715544000,
            time: "2024-05-13 05:00",
            temp_c: 19.8,
            temp_f: 67.6,
            is_day: 1,
            condition: {
              text: "Moderate rain",
              icon: "//cdn.weatherapi.com/weather/64x64/day/302.png",
              code: 1189,
            },
            wind_mph: 23.3,
            wind_kph: 37.4,
            wind_degree: 167,
            wind_dir: "SSE",
            pressure_mb: 1008.0,
            pressure_in: 29.76,
            precip_mm: 2.62,
            precip_in: 0.1,
            snow_cm: 0.0,
            humidity: 91,
            cloud: 100,
            feelslike_c: 19.8,
            feelslike_f: 67.6,
            windchill_c: 19.8,
            windchill_f: 67.6,
            heatindex_c: 19.8,
            heatindex_f: 67.6,
            dewpoint_c: 18.2,
            dewpoint_f: 64.8,
            will_it_rain: 1,
            chance_of_rain: 100,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 7.0,
            vis_miles: 4.0,
            gust_mph: 35.4,
            gust_kph: 57.0,
            uv: 4.0,
          },
          {
            time_epoch: 1715547600,
            time: "2024-05-13 06:00",
            temp_c: 20.0,
            temp_f: 68.0,
            is_day: 1,
            condition: {
              text: "Moderate rain",
              icon: "//cdn.weatherapi.com/weather/64x64/day/302.png",
              code: 1189,
            },
            wind_mph: 27.5,
            wind_kph: 44.3,
            wind_degree: 171,
            wind_dir: "S",
            pressure_mb: 1007.0,
            pressure_in: 29.74,
            precip_mm: 5.99,
            precip_in: 0.24,
            snow_cm: 0.0,
            humidity: 93,
            cloud: 100,
            feelslike_c: 20.0,
            feelslike_f: 68.0,
            windchill_c: 20.0,
            windchill_f: 68.0,
            heatindex_c: 20.0,
            heatindex_f: 68.0,
            dewpoint_c: 18.9,
            dewpoint_f: 66.0,
            will_it_rain: 1,
            chance_of_rain: 100,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 7.0,
            vis_miles: 4.0,
            gust_mph: 42.2,
            gust_kph: 67.9,
            uv: 4.0,
          },
          {
            time_epoch: 1715551200,
            time: "2024-05-13 07:00",
            temp_c: 20.0,
            temp_f: 68.1,
            is_day: 1,
            condition: {
              text: "Moderate rain",
              icon: "//cdn.weatherapi.com/weather/64x64/day/302.png",
              code: 1189,
            },
            wind_mph: 29.5,
            wind_kph: 47.5,
            wind_degree: 181,
            wind_dir: "S",
            pressure_mb: 1007.0,
            pressure_in: 29.73,
            precip_mm: 5.26,
            precip_in: 0.21,
            snow_cm: 0.0,
            humidity: 94,
            cloud: 100,
            feelslike_c: 20.0,
            feelslike_f: 68.1,
            windchill_c: 20.0,
            windchill_f: 68.1,
            heatindex_c: 20.0,
            heatindex_f: 68.1,
            dewpoint_c: 19.1,
            dewpoint_f: 66.3,
            will_it_rain: 1,
            chance_of_rain: 100,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 7.0,
            vis_miles: 4.0,
            gust_mph: 45.3,
            gust_kph: 72.9,
            uv: 5.0,
          },
          {
            time_epoch: 1715554800,
            time: "2024-05-13 08:00",
            temp_c: 19.9,
            temp_f: 67.8,
            is_day: 1,
            condition: {
              text: "Moderate rain",
              icon: "//cdn.weatherapi.com/weather/64x64/day/302.png",
              code: 1189,
            },
            wind_mph: 24.2,
            wind_kph: 38.9,
            wind_degree: 196,
            wind_dir: "SSW",
            pressure_mb: 1007.0,
            pressure_in: 29.73,
            precip_mm: 4.47,
            precip_in: 0.18,
            snow_cm: 0.0,
            humidity: 95,
            cloud: 100,
            feelslike_c: 19.9,
            feelslike_f: 67.8,
            windchill_c: 19.9,
            windchill_f: 67.8,
            heatindex_c: 19.9,
            heatindex_f: 67.8,
            dewpoint_c: 19.1,
            dewpoint_f: 66.3,
            will_it_rain: 1,
            chance_of_rain: 100,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 7.0,
            vis_miles: 4.0,
            gust_mph: 37.2,
            gust_kph: 59.9,
            uv: 4.0,
          },
          {
            time_epoch: 1715558400,
            time: "2024-05-13 09:00",
            temp_c: 20.4,
            temp_f: 68.8,
            is_day: 1,
            condition: {
              text: "Moderate rain",
              icon: "//cdn.weatherapi.com/weather/64x64/day/302.png",
              code: 1189,
            },
            wind_mph: 21.0,
            wind_kph: 33.8,
            wind_degree: 203,
            wind_dir: "SSW",
            pressure_mb: 1007.0,
            pressure_in: 29.73,
            precip_mm: 2.54,
            precip_in: 0.1,
            snow_cm: 0.0,
            humidity: 93,
            cloud: 100,
            feelslike_c: 20.4,
            feelslike_f: 68.8,
            windchill_c: 20.4,
            windchill_f: 68.8,
            heatindex_c: 20.4,
            heatindex_f: 68.8,
            dewpoint_c: 19.3,
            dewpoint_f: 66.7,
            will_it_rain: 1,
            chance_of_rain: 100,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 7.0,
            vis_miles: 4.0,
            gust_mph: 32.3,
            gust_kph: 51.9,
            uv: 5.0,
          },
          {
            time_epoch: 1715562000,
            time: "2024-05-13 10:00",
            temp_c: 21.0,
            temp_f: 69.8,
            is_day: 1,
            condition: {
              text: "Light rain shower",
              icon: "//cdn.weatherapi.com/weather/64x64/day/353.png",
              code: 1240,
            },
            wind_mph: 11.9,
            wind_kph: 19.1,
            wind_degree: 210,
            wind_dir: "SSW",
            pressure_mb: 1006.0,
            pressure_in: 29.71,
            precip_mm: 0.32,
            precip_in: 0.01,
            snow_cm: 0.0,
            humidity: 94,
            cloud: 75,
            feelslike_c: 20.6,
            feelslike_f: 69.0,
            windchill_c: 20.6,
            windchill_f: 69.0,
            heatindex_c: 20.6,
            heatindex_f: 69.0,
            dewpoint_c: 18.8,
            dewpoint_f: 65.8,
            will_it_rain: 1,
            chance_of_rain: 100,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 4.5,
            vis_miles: 2.0,
            gust_mph: 32.2,
            gust_kph: 51.9,
            uv: 5.0,
          },
          {
            time_epoch: 1715565600,
            time: "2024-05-13 11:00",
            temp_c: 21.1,
            temp_f: 69.9,
            is_day: 1,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/day/266.png",
              code: 1153,
            },
            wind_mph: 20.4,
            wind_kph: 32.8,
            wind_degree: 215,
            wind_dir: "SW",
            pressure_mb: 1006.0,
            pressure_in: 29.7,
            precip_mm: 0.33,
            precip_in: 0.01,
            snow_cm: 0.0,
            humidity: 80,
            cloud: 78,
            feelslike_c: 21.1,
            feelslike_f: 69.9,
            windchill_c: 21.1,
            windchill_f: 69.9,
            heatindex_c: 24.3,
            heatindex_f: 75.7,
            dewpoint_c: 17.5,
            dewpoint_f: 63.5,
            will_it_rain: 1,
            chance_of_rain: 100,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 2.0,
            vis_miles: 1.0,
            gust_mph: 29.3,
            gust_kph: 47.2,
            uv: 5.0,
          },
          {
            time_epoch: 1715569200,
            time: "2024-05-13 12:00",
            temp_c: 20.4,
            temp_f: 68.8,
            is_day: 1,
            condition: {
              text: "Patchy light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/day/263.png",
              code: 1150,
            },
            wind_mph: 13.4,
            wind_kph: 21.6,
            wind_degree: 219,
            wind_dir: "SW",
            pressure_mb: 1005.0,
            pressure_in: 29.69,
            precip_mm: 0.5,
            precip_in: 0.02,
            snow_cm: 0.0,
            humidity: 84,
            cloud: 52,
            feelslike_c: 20.4,
            feelslike_f: 68.8,
            windchill_c: 20.4,
            windchill_f: 68.8,
            heatindex_c: 20.4,
            heatindex_f: 68.8,
            dewpoint_c: 17.6,
            dewpoint_f: 63.7,
            will_it_rain: 1,
            chance_of_rain: 100,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 5.0,
            vis_miles: 3.0,
            gust_mph: 19.4,
            gust_kph: 31.3,
            uv: 5.0,
          },
          {
            time_epoch: 1715572800,
            time: "2024-05-13 13:00",
            temp_c: 20.5,
            temp_f: 69.0,
            is_day: 1,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/day/266.png",
              code: 1153,
            },
            wind_mph: 13.0,
            wind_kph: 20.9,
            wind_degree: 201,
            wind_dir: "SSW",
            pressure_mb: 1006.0,
            pressure_in: 29.7,
            precip_mm: 0.46,
            precip_in: 0.02,
            snow_cm: 0.0,
            humidity: 85,
            cloud: 97,
            feelslike_c: 20.5,
            feelslike_f: 69.0,
            windchill_c: 20.5,
            windchill_f: 69.0,
            heatindex_c: 20.5,
            heatindex_f: 69.0,
            dewpoint_c: 17.9,
            dewpoint_f: 64.3,
            will_it_rain: 1,
            chance_of_rain: 100,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 2.0,
            vis_miles: 1.0,
            gust_mph: 18.7,
            gust_kph: 30.1,
            uv: 5.0,
          },
          {
            time_epoch: 1715576400,
            time: "2024-05-13 14:00",
            temp_c: 20.4,
            temp_f: 68.8,
            is_day: 1,
            condition: {
              text: "Moderate rain",
              icon: "//cdn.weatherapi.com/weather/64x64/day/302.png",
              code: 1189,
            },
            wind_mph: 11.4,
            wind_kph: 18.4,
            wind_degree: 219,
            wind_dir: "SW",
            pressure_mb: 1005.0,
            pressure_in: 29.69,
            precip_mm: 2.85,
            precip_in: 0.11,
            snow_cm: 0.0,
            humidity: 85,
            cloud: 91,
            feelslike_c: 20.5,
            feelslike_f: 68.8,
            windchill_c: 20.5,
            windchill_f: 68.8,
            heatindex_c: 20.5,
            heatindex_f: 68.8,
            dewpoint_c: 17.9,
            dewpoint_f: 64.1,
            will_it_rain: 1,
            chance_of_rain: 100,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 7.0,
            vis_miles: 4.0,
            gust_mph: 16.2,
            gust_kph: 26.1,
            uv: 5.0,
          },
          {
            time_epoch: 1715580000,
            time: "2024-05-13 15:00",
            temp_c: 19.0,
            temp_f: 66.2,
            is_day: 1,
            condition: {
              text: "Moderate rain",
              icon: "//cdn.weatherapi.com/weather/64x64/day/302.png",
              code: 1189,
            },
            wind_mph: 8.3,
            wind_kph: 13.3,
            wind_degree: 315,
            wind_dir: "NW",
            pressure_mb: 1006.0,
            pressure_in: 29.72,
            precip_mm: 4.3,
            precip_in: 0.17,
            snow_cm: 0.0,
            humidity: 86,
            cloud: 100,
            feelslike_c: 19.0,
            feelslike_f: 66.2,
            windchill_c: 19.0,
            windchill_f: 66.2,
            heatindex_c: 19.0,
            heatindex_f: 66.2,
            dewpoint_c: 16.7,
            dewpoint_f: 62.1,
            will_it_rain: 1,
            chance_of_rain: 100,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 7.0,
            vis_miles: 4.0,
            gust_mph: 11.4,
            gust_kph: 18.3,
            uv: 4.0,
          },
          {
            time_epoch: 1715583600,
            time: "2024-05-13 16:00",
            temp_c: 17.6,
            temp_f: 63.6,
            is_day: 1,
            condition: {
              text: "Light rain",
              icon: "//cdn.weatherapi.com/weather/64x64/day/296.png",
              code: 1183,
            },
            wind_mph: 11.9,
            wind_kph: 19.1,
            wind_degree: 335,
            wind_dir: "NNW",
            pressure_mb: 1007.0,
            pressure_in: 29.75,
            precip_mm: 1.86,
            precip_in: 0.07,
            snow_cm: 0.0,
            humidity: 84,
            cloud: 100,
            feelslike_c: 17.6,
            feelslike_f: 63.6,
            windchill_c: 17.6,
            windchill_f: 63.6,
            heatindex_c: 17.6,
            heatindex_f: 63.6,
            dewpoint_c: 14.8,
            dewpoint_f: 58.7,
            will_it_rain: 1,
            chance_of_rain: 100,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 9.0,
            vis_miles: 5.0,
            gust_mph: 16.0,
            gust_kph: 25.8,
            uv: 4.0,
          },
          {
            time_epoch: 1715587200,
            time: "2024-05-13 17:00",
            temp_c: 16.7,
            temp_f: 62.0,
            is_day: 1,
            condition: {
              text: "Moderate rain",
              icon: "//cdn.weatherapi.com/weather/64x64/day/302.png",
              code: 1189,
            },
            wind_mph: 17.2,
            wind_kph: 27.7,
            wind_degree: 350,
            wind_dir: "N",
            pressure_mb: 1007.0,
            pressure_in: 29.73,
            precip_mm: 3.82,
            precip_in: 0.15,
            snow_cm: 0.0,
            humidity: 85,
            cloud: 93,
            feelslike_c: 16.7,
            feelslike_f: 62.0,
            windchill_c: 16.7,
            windchill_f: 62.0,
            heatindex_c: 16.7,
            heatindex_f: 62.0,
            dewpoint_c: 14.2,
            dewpoint_f: 57.5,
            will_it_rain: 1,
            chance_of_rain: 100,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 7.0,
            vis_miles: 4.0,
            gust_mph: 23.3,
            gust_kph: 37.5,
            uv: 4.0,
          },
          {
            time_epoch: 1715590800,
            time: "2024-05-13 18:00",
            temp_c: 16.0,
            temp_f: 60.9,
            is_day: 1,
            condition: {
              text: "Heavy rain",
              icon: "//cdn.weatherapi.com/weather/64x64/day/308.png",
              code: 1195,
            },
            wind_mph: 16.8,
            wind_kph: 27.0,
            wind_degree: 340,
            wind_dir: "NNW",
            pressure_mb: 1008.0,
            pressure_in: 29.76,
            precip_mm: 8.4,
            precip_in: 0.33,
            snow_cm: 0.0,
            humidity: 90,
            cloud: 100,
            feelslike_c: 16.0,
            feelslike_f: 60.9,
            windchill_c: 16.0,
            windchill_f: 60.9,
            heatindex_c: 16.0,
            heatindex_f: 60.9,
            dewpoint_c: 14.5,
            dewpoint_f: 58.0,
            will_it_rain: 1,
            chance_of_rain: 100,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 5.0,
            vis_miles: 3.0,
            gust_mph: 22.7,
            gust_kph: 36.5,
            uv: 4.0,
          },
          {
            time_epoch: 1715594400,
            time: "2024-05-13 19:00",
            temp_c: 16.0,
            temp_f: 60.8,
            is_day: 0,
            condition: {
              text: "Moderate rain",
              icon: "//cdn.weatherapi.com/weather/64x64/night/302.png",
              code: 1189,
            },
            wind_mph: 14.1,
            wind_kph: 22.7,
            wind_degree: 353,
            wind_dir: "N",
            pressure_mb: 1009.0,
            pressure_in: 29.79,
            precip_mm: 3.46,
            precip_in: 0.14,
            snow_cm: 0.0,
            humidity: 91,
            cloud: 100,
            feelslike_c: 16.0,
            feelslike_f: 60.8,
            windchill_c: 16.0,
            windchill_f: 60.8,
            heatindex_c: 16.0,
            heatindex_f: 60.8,
            dewpoint_c: 14.5,
            dewpoint_f: 58.2,
            will_it_rain: 1,
            chance_of_rain: 100,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 7.0,
            vis_miles: 4.0,
            gust_mph: 19.5,
            gust_kph: 31.4,
            uv: 1.0,
          },
          {
            time_epoch: 1715598000,
            time: "2024-05-13 20:00",
            temp_c: 15.9,
            temp_f: 60.6,
            is_day: 0,
            condition: {
              text: "Light drizzle",
              icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
              code: 1153,
            },
            wind_mph: 12.5,
            wind_kph: 20.2,
            wind_degree: 356,
            wind_dir: "N",
            pressure_mb: 1009.0,
            pressure_in: 29.8,
            precip_mm: 0.64,
            precip_in: 0.03,
            snow_cm: 0.0,
            humidity: 90,
            cloud: 85,
            feelslike_c: 15.9,
            feelslike_f: 60.6,
            windchill_c: 15.9,
            windchill_f: 60.6,
            heatindex_c: 15.9,
            heatindex_f: 60.6,
            dewpoint_c: 14.3,
            dewpoint_f: 57.7,
            will_it_rain: 1,
            chance_of_rain: 100,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 2.0,
            vis_miles: 1.0,
            gust_mph: 17.0,
            gust_kph: 27.4,
            uv: 1.0,
          },
          {
            time_epoch: 1715601600,
            time: "2024-05-13 21:00",
            temp_c: 15.5,
            temp_f: 59.9,
            is_day: 0,
            condition: {
              text: "Light rain",
              icon: "//cdn.weatherapi.com/weather/64x64/night/296.png",
              code: 1183,
            },
            wind_mph: 12.5,
            wind_kph: 20.2,
            wind_degree: 347,
            wind_dir: "NNW",
            pressure_mb: 1011.0,
            pressure_in: 29.85,
            precip_mm: 1.21,
            precip_in: 0.05,
            snow_cm: 0.0,
            humidity: 89,
            cloud: 100,
            feelslike_c: 15.5,
            feelslike_f: 59.9,
            windchill_c: 15.5,
            windchill_f: 59.9,
            heatindex_c: 15.5,
            heatindex_f: 59.9,
            dewpoint_c: 13.7,
            dewpoint_f: 56.6,
            will_it_rain: 1,
            chance_of_rain: 100,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 9.0,
            vis_miles: 5.0,
            gust_mph: 17.0,
            gust_kph: 27.3,
            uv: 1.0,
          },
          {
            time_epoch: 1715605200,
            time: "2024-05-13 22:00",
            temp_c: 15.6,
            temp_f: 60.0,
            is_day: 0,
            condition: {
              text: "Patchy rain nearby",
              icon: "//cdn.weatherapi.com/weather/64x64/night/176.png",
              code: 1063,
            },
            wind_mph: 11.4,
            wind_kph: 18.4,
            wind_degree: 2,
            wind_dir: "N",
            pressure_mb: 1012.0,
            pressure_in: 29.87,
            precip_mm: 0.11,
            precip_in: 0.0,
            snow_cm: 0.0,
            humidity: 87,
            cloud: 100,
            feelslike_c: 15.6,
            feelslike_f: 60.0,
            windchill_c: 15.6,
            windchill_f: 60.0,
            heatindex_c: 15.6,
            heatindex_f: 60.0,
            dewpoint_c: 13.4,
            dewpoint_f: 56.2,
            will_it_rain: 1,
            chance_of_rain: 100,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 15.6,
            gust_kph: 25.2,
            uv: 1.0,
          },
          {
            time_epoch: 1715608800,
            time: "2024-05-13 23:00",
            temp_c: 15.7,
            temp_f: 60.3,
            is_day: 0,
            condition: {
              text: "Patchy rain nearby",
              icon: "//cdn.weatherapi.com/weather/64x64/night/176.png",
              code: 1063,
            },
            wind_mph: 9.8,
            wind_kph: 15.8,
            wind_degree: 37,
            wind_dir: "NE",
            pressure_mb: 1012.0,
            pressure_in: 29.89,
            precip_mm: 0.01,
            precip_in: 0.0,
            snow_cm: 0.0,
            humidity: 86,
            cloud: 100,
            feelslike_c: 15.7,
            feelslike_f: 60.3,
            windchill_c: 15.7,
            windchill_f: 60.3,
            heatindex_c: 15.7,
            heatindex_f: 60.3,
            dewpoint_c: 13.4,
            dewpoint_f: 56.1,
            will_it_rain: 0,
            chance_of_rain: 69,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 13.3,
            gust_kph: 21.5,
            uv: 1.0,
          },
        ],
      },
    ],
  },
};

export default fakeWeatherData;
