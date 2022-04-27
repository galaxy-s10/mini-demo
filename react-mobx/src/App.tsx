import { observer } from 'mobx-react';
import React, { memo, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import { outputStaticUrl } from '../config/utils/outputStaticUrl';

import Loading from '@/components/Loading';
import Home from '@/pages/home';
import NotFound from '@/pages/notFound';
import '@/assets/css/index.scss';

const Login = React.lazy(() => import('@/pages/login'));
const About = React.lazy(() => import('@/pages/about'));
const TestPage = React.lazy(() => import('@/pages/test'));

const App = () => {
  useEffect(() => {
    console.log('App生命周期');
  }, []);

  return (
    <BrowserRouter basename={outputStaticUrl()}>
      <div>
        <Link to="/">点击跳转首页</Link>
      </div>
      <div>
        <Link to="/login">点击跳转login</Link>
      </div>
      <div>
        <Link to="/about">点击跳转about</Link>
      </div>
      <div>
        <Link to="/test">context和全局变量区别</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <React.Suspense fallback={<Loading />}>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="/home"
          element={
            <React.Suspense fallback={<Loading />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <React.Suspense fallback={<Loading />}>
              <About />
            </React.Suspense>
          }
        />
        <Route
          path="/test"
          element={
            <React.Suspense fallback={<Loading />}>
              <TestPage />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default memo(observer(App));
