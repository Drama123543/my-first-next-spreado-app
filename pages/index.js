import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import {
  createSpreadoReduxPreloadedState,
  renderSwrResponse,
} from 'spreado/for-redux-swr'
import { startClock } from '../actions'
import Examples from '../components/examples'
import Repo, {
  DEFAULT_REPO_NAME,
  fetchRepoInfo,
  INDEX_OF_REPO_SWR
} from '../components/repo';
import RepoShare from '../components/repo-share';

export async function getServerSideProps() {
  const repoInfo = await fetchRepoInfo(DEFAULT_REPO_NAME)

  return {
    props: {
      initialReduxState: createSpreadoReduxPreloadedState({
        [INDEX_OF_REPO_SWR]: renderSwrResponse(repoInfo)
      }),
    }
  }
}

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
