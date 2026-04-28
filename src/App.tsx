/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import './lib/i18n';
import Layout from './components/Layout';
import Home from './pages/Home';
import Faculty from './pages/Faculty';
import Login from './pages/Login';
import Portal from './pages/Portal';
import Research from './pages/Research';
import Courses from './pages/Courses';
import News from './pages/News';
import Notice from './pages/Notice';
import VirtualTour from './pages/VirtualTour';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/research" element={<Research />} />
            <Route path="/news" element={<News />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/login" element={<Login />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/tour" element={<VirtualTour />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}
