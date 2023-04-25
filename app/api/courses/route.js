import { NextResponse } from 'next/server'
import courses from './data.json'
import { v4 as uuidv4 } from 'uuid'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  console.log(searchParams.get('name'))
  return NextResponse.json(courses)
}
export async function POST(request) {
  const data = await request.json()
  let course = { ...data, id: uuidv4() }
  courses.push(course)
  return NextResponse.json(courses)
}
