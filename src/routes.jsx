import React from 'react';
import { useRoutes } from 'react-router-dom';
import Login from './pages/Login';
import New from './pages/New';
import Processos from './pages/Processos';
import View from './pages/View';

const Routing = () => {
  return useRoutes([
    { path: '/', element: <Login /> },
    { path: '/processos', element: <Processos /> },
    { path: '/processos/new', element: <New /> },
    { path: '/processos/:id', element: <View /> },
  ]);
};

export default Routing;
