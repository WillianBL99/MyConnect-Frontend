import '../../styled/css/reset.css';
import '../../styled/css/index.css';
import '../../styled/css/query.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from '../../hooks/UserContext';

import Login from '../Routes/Login';
import Register from '../Routes/Register';
import MainScreen from '../Routes/MainScreen';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/store" element={<MainScreen />} />
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
