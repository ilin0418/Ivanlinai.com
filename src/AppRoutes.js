import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Background from './components/Background';

export default function AppRoutes() {
  return (
    <>
      <Background />
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout />}
          >
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} /> {/* Moved Education above Projects */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}
