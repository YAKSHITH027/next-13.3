import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1>welcome to my github</h1>
      <ul>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/about/teams'}>team</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
