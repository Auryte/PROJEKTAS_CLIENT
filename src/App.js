import './App.css';
import Routes from './components/Routes';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';

function App () {
  return (
    <BrowserRouter>
      <UserProvider>
        <div className='App'>
          <Routes/>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
