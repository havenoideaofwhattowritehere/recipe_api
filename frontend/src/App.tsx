import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import RecipeListPage from './pages/RecipeListPage';
import RecipeInfoPage from './pages/RecipeInfoPage';

function App() {
  return (
    <Routes>
      <Route path="/recipes" element={<RecipeListPage />} />
      <Route path="/recipe/:id" element={<RecipeInfoPage />} />
    </Routes>
  );
}

export default App;
