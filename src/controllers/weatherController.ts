import { Request, Response } from 'express';
import { getWeatherData } from '../services/weatherService';

export const getWeather = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    res.status(400).json({ error: 'Latitude and Longitude are required' });
    return;
  }

  try {
    const weatherData = await getWeatherData(Number(lat), Number(lon));
    res.status(200).json(weatherData);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
