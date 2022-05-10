import '../../styled/css/reset.css';
import '../../styled/css/index.css'

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import persistUser from '../../utils/persistUser';
import UserContext from '../../hooks/UserContext';

import Login from '../Routes/Login';
import Register from '../Routes/Register';

function App() {
	const [user, setUser] = useState(persistUser);
	const url = 'http://localhost:5000';

	return (
		<UserContext.Provider value={{context: {user, setUser, url}}}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='register' element={<Register />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}

export default App