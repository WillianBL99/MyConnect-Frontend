import '../../styled/css/reset.css';
import '../../styled/css/index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from '../../hooks/UserContext';

import Login from '../Routes/Login';
import Register from '../Routes/Register';

function App() {
	return (
		<Provider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='register' element={<Register />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App