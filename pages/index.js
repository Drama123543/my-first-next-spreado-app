import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { startClock } from '../actions'
import Examples from '../components/examples'
import Repo from '../components/repo';
import RepoShare from '../components/repo-share';

const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startClock())
  }, [dispatch])

  return (
    <>
      <Examples />
      <Link href="/show-redux-state">
        <a>Click to see current Redux State</a>
      </Link>
      <section>
        <h2>repo info</h2>
        <Repo />
        <RepoShare />
      </section>
    </>
  )
}

export default Index
