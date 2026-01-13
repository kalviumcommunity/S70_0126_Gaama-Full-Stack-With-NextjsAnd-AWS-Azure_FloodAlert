import prisma from '@/lib/prisma';
import { WeatherData } from '@prisma/client';

export class WeatherService {
  /**
   * Save new weather data reading
   */
  async recordWeatherData(districtId: string, rainfall: number, riverLevel: number): Promise<WeatherData> {
    return prisma.weatherData.create({
      data: {
        districtId,
        rainfall,
        riverLevel,
      },
    });
  }

  /**
   * Get latest weather data for a district
   */
  async getLatestWeather(districtId: string): Promise<WeatherData | null> {
    return prisma.weatherData.findFirst({
      where: { districtId },
      orderBy: { recordedAt: 'desc' },
    });
  }

  // Placeholder for external API integration
  async fetchFromExternalApi(): Promise<void> {
    // TODO: Implement fetching from OpenWeatherMap or similar
    console.log('Fetching external weather data...');
  }
}

export const weatherService = new WeatherService();
