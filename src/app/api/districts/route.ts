import { NextResponse } from 'next/server';
import { districtService } from '@/services/district.service';

export async function GET() {
  try {
    const districts = await districtService.getAllDistricts();
    return NextResponse.json(districts);
  } catch (error) {
    console.error('Failed to fetch districts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch districts' },
      { status: 500 }
    );
  }
}
