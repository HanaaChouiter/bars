
import { MapContextProvider } from './contexts/Map'
import Map from './composants/Map'


const App = () => {
  
  return (
    <MapContextProvider> 
   
     <h1>hey</h1>
      <Map />
    
    </MapContextProvider> 
    )
  }


export default App;
