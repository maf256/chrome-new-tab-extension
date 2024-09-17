import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi';
import Clock from 'react-live-clock';

const API_KEY = '9830bc28459aa989ea5df437723bfb81';

const Weather = ({ city = "Oslo" }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      setLoading(false);
    } catch (error) {
      setError("Could not fetch weather data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  const renderWeatherIcon = (main) => {
    const iconStyle = { color: '#f9d71c', fontSize: '64px' };  // Default color for sunny weather
    switch (main) {
      case 'Clear':
        return <WiDaySunny style={{ ...iconStyle, color: '#f9d71c' }} />;
      case 'Clouds':
        return <WiCloudy style={{ ...iconStyle, color: '#808080' }} />;
      case 'Rain':
        return <WiRain style={{ ...iconStyle, color: '#00aaff' }} />;
      case 'Snow':
        return <WiSnow style={{ ...iconStyle, color: '#a0e6ff' }} />;
      case 'Thunderstorm':
        return <WiThunderstorm style={{ ...iconStyle, color: '#ffcc00' }} />;
      default:
        return <WiCloudy style={{ ...iconStyle, color: '#808080' }} />;
    }
  };

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = new Date().getDay();
    return days[currentDay];
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  const { main, weather, name } = weatherData;

  return (
    <Card sx={{ maxWidth: 300, margin: '20px auto', textAlign: 'center' }}>
      <CardContent>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h6">{weather[0].description}</Typography>
        {renderWeatherIcon(weather[0].main)}
        <Typography variant="h5">{Math.round(main.temp)}°C</Typography>
        <Typography variant="body2">Feels like: {Math.round(main.feels_like)}°C</Typography>
        <Typography variant="body2">Humidity: {main.humidity}%</Typography>
      </CardContent>
      <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Oslo'} />
      <Typography variant="h6">{getCurrentDay()}</Typography>
    </Card>
  );
};

export default Weather;
