import Link from 'next/link'

async function fetchRepoContents(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const response = await fetch(
    `https://api.github.com/repos/yakshith027/${name}/contents`,
    {
      next: {
        revalidate: 60, // upto you whther you want to make static or not
      },
    }
  )
  const contents = await response.json()
  return contents
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name)
  console.log(contents[0])
  const dirs = contents.filter((content) => content.type === 'dir')

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
export default RepoDirs
