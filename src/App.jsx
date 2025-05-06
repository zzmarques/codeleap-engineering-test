import { useEffect, useState } from 'react';
import Home from './pages/Home';
import SingUp from './pages/SingUp';
import './sass/main.scss';


function App() {

  const [loading, setLoading] = useState(false);

  const getSuccess = (state) => {
    setLoading(state);
  }

  return (
    <>
      {
        loading ? <Home/> : <SingUp success={getSuccess}/>
      }
    </>
  )
}

export default App;
