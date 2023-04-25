import Link from 'next/link'
async function fetchCourses() {
  const res = await fetch('http://localhost:3000/api/courses')
  const courses = await res.json()
  return courses
}
const Courses = async () => {
  let courses = await fetchCourses()
  return (
    <div className='courses'>
      {courses.map((course) => (
        <div key={course.id} className='card'>
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link
            href={'https://github.com/YAKSHITH027'}
            target='_blank'
            className='btn'
          >
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  )
}
export default Courses
