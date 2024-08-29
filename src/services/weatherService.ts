import httpClient from '../utils/httpClient';

interface WeatherData {
  condition: string;
  temperature: string;
  alerts: string[];
}

export const getWeatherData = async (
  lat: number,
  lon: number
): Promise<WeatherData> => {
  try {
    const response = await httpClient.get('/weather', {
      params: {
        lat,
        lon,
        appid: '6bca085397579d04c456f3e72c03d19a',
      },
    });

    const { weather, main } = response.data;

    const temperature = main.temp;
    const weatherCondition = weather[0].main; // e.g., "Clear", "Rain", "Snow", etc.

    // Determine temperature description
    let tempDescription: string;
    if (temperature < 278.15) {
      tempDescription = 'cold';
    } else if (temperature < 298.15) {
      tempDescription = 'moderate';
    } else {
      tempDescription = 'hot';
    }

    // The `/weather` endpoint does not provide alerts. Set to empty array.
    const alertMessages: string[] = [];

    return {
      condition: weatherCondition,
      temperature: tempDescription,
      alerts: alertMessages,
    };
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};
