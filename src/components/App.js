import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import ThanksPage from './ThanksPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/thanks" element={<ThanksPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;