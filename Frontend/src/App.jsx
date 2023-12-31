import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import CreateRecipe from './Pages/CreateRecipe';
import SavedRecipe from './Pages/SavedRecipe';
import Profile from './Pages/Profile';
import { UserProvider } from './Context/userLoginContext';

const App = () => {
  return (
    <div className="bg-slate-100">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-recipe" element={<CreateRecipe />} />
            <Route path="/saved-recipe" element={<SavedRecipe />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
};

export default App;
