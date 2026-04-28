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
import Departments from './pages/Departments';
import News from './pages/News';
import Journal from './pages/Journal';
import Library from './pages/Library';
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
            <Route path="/departments" element={<Departments />} />
            <Route path="/research" element={<Research />} />
            <Route path="/news" element={<News />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/library" element={<Library />} />
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
