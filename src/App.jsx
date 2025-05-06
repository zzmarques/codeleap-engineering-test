import { useEffect, useState } from 'react';
import Home from './pages/Home';
import SingUp from './pages/SingUp';
import './sass/main.scss';


function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {
        loading ? <Home/> : <SingUp/>
      }
    </>
  )
}

export default App;
