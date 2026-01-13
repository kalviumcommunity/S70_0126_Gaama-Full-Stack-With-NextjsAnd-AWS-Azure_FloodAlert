import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';

/**
 * Prisma-inferred types (BEST PRACTICE)
 * These automatically stay in sync with schema.prisma
 */
export type DistrictWithThresholds =
  Prisma.DistrictGetPayload<{
    include: {
      alertThresholds: true;
    };
  }>;

export type DistrictWithDetails =
  Prisma.DistrictGetPayload<{
    include: {
      alertThresholds: true;
      weatherData: true;
    };
  }>;

/**
 * District Service
 * Handles all district-related database operations
 */
export class DistrictService {
  /**
   * Fetch all districts with their alert thresholds
   */
  async getAllDistricts(): Promise<DistrictWithThresholds[]> {
    return prisma.district.findMany({
      include: {
        alertThresholds: true,
      },
      orderBy: {
        name: 'asc',
      },
    });
  }

  /**
   * Fetch a single district with thresholds and latest weather data
   */
  async getDistrictById(id: string): Promise<DistrictWithDetails | null> {
    return prisma.district.findUnique({
      where: { id },
      include: {
        alertThresholds: true,
        weatherData: {
          orderBy: {
            recordedAt: 'desc',
          },
          take: 1, // Fetch latest weather record
        },
      },
    });
  }
}

/**
 * Singleton export
 */
export const districtService = new DistrictService();
