import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Counter from './components/Counter/Counter';
import UserForm from './components/UserForm/UserForm';
import TextEditor from './components/RichTextEditor/TextEditor';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/form" element={<UserForm />} />
            <Route path="/editor" element={<TextEditor />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
