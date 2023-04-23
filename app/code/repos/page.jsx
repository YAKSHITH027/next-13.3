import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'
import { resolve } from 'styled-jsx/css'
async function fetchRepos() {
  try {
    const res = await fetch('https://api.github.com/users/YAKSHITH027/repos')
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve()
      }, 1000)
    )
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}
const Repos = async () => {
  let repos = await fetchRepos()

  return (
    <div className='repos-container'>
      <h2>Repositories</h2>
      <ul className='repo-list'>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className='repo-details'>
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Repos
