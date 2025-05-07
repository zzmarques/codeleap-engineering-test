import { useState } from 'react';
import Home from './pages/Home';
import SingUp from './pages/SingUp';
import './sass/main.scss';
import { PostProvider } from './contexts/PostsContext';


function App() {

  const [loading, setLoading] = useState(false);

  const getSuccess = (state) => {
    setLoading(state);
  }

  return (
    <PostProvider>
      {
        loading ? <Home/> : <SingUp success={getSuccess}/>
      }
    </PostProvider>
  )
}

export default App;
