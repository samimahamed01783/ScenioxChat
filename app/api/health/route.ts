import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    name: 'ScenioxChat API',
    version: '1.0.0',
    status: 'active',
    analytics: 'enabled'
  })
}
