import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'
import { Suspense } from 'react'

const RepoPage = ({ params: { name } }) => {
  return (
    <div className='card'>
      <Suspense fallback={<div>...loading repo</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>...loading dirs</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  )
}

export default RepoPage
