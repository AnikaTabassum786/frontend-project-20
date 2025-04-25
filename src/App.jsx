import { Map } from '@vis.gl/react-google-maps'
import './App.css'

function App() {
 
  return (
    <>
      <h1>Google Map</h1>
      <Map
      style={{width: '100vw', height: '100vh'}}
      defaultCenter={{lat: 23.6429, lng: 90.4883}}
      defaultZoom={3}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
    </>
  )
}

export default App
