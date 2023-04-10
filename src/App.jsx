import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import People from './components/People';

export default function App() {
  return (
    <div>
      <header>
        <h1>Giftr app</h1>
      </header>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </div>
  );
}
