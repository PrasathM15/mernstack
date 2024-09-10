import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList';
import ShowUserList from './components/ShowUserList';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user-list" element={<UserList />} />
                <Route path="/show-user-list" element={<ShowUserList />} />
            </Routes>
        </Router>
    );
};

export default App;
