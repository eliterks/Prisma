import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// GET /api/cars - Get all cars
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const brand = searchParams.get('brand')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    const fuelType = searchParams.get('fuelType')

    const cars = await prisma.car.findMany({
      where: {
        isActive: true,
        ...(brand && { brand: { contains: brand, mode: 'insensitive' } }),
        ...(minPrice && { price: { gte: Number(minPrice) } }),
        ...(maxPrice && { price: { lte: Number(maxPrice) } }),
        ...(fuelType && { fuelType }),
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        _count: {
          select: {
            favorites: true,
            reviews: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(cars)
  } catch (error) {
    console.error('Error fetching cars:', error)
    return NextResponse.json(
      { error: 'Failed to fetch cars' },
      { status: 500 }
    )
  }
}

// POST /api/cars - Create a new car listing
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      title,
      description,
      brand,
      model,
      year,
      price,
      mileage,
      fuelType,
      transmission,
      condition,
      location,
      images,
      features,
      userId,
    } = body

    const car = await prisma.car.create({
      data: {
        title,
        description,
        brand,
        model,
        year: Number(year),
        price: Number(price),
        mileage: Number(mileage),
        fuelType,
        transmission,
        condition,
        location,
        images: images || [],
        features: features || [],
        userId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    })

    return NextResponse.json(car, { status: 201 })
  } catch (error) {
    console.error('Error creating car:', error)
    return NextResponse.json(
      { error: 'Failed to create car listing' },
      { status: 500 }
    )
  }
}