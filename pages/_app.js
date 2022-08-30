import {useMemo} from 'react';
import {SpreadoSetupProvider} from 'spreado';
import {
  SpreadoSetupForReduxSwr,
} from 'spreado/for-redux-swr';
import { Provider } from 'react-redux'
import { useStore } from '../store'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  const spreadoSetup = useMemo(() => new SpreadoSetupForReduxSwr({store}), [store]);

  return (
    <Provider store={store}>
      <SpreadoSetupProvider setup={spreadoSetup}>
        <Component {...pageProps} />
      </SpreadoSetupProvider>
    </Provider>
  )
}
