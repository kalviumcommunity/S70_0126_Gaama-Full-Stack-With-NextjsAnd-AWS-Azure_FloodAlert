import Redis from 'ioredis';

const getRedisUrl = () => {
  if (process.env.REDIS_URL) {
    return process.env.REDIS_URL;
  }
  if (process.env.NODE_ENV === 'production') {
    throw new Error('REDIS_URL environment variable is not set.');
  }
  return 'redis://localhost:6379';
};

export const redis = new Redis(getRedisUrl());
