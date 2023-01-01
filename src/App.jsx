import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Login from './views/login/Login';
import File from './views/file/File';
import NotFound404 from './views/notFound404/NotFound404';
import RouteGuard from 'src/components/RouteGuard';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/file"
        element={
          <RouteGuard>
            <File />
          </RouteGuard>
        }
      />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
}
