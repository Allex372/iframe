import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { IframeParent } from './components/IframeParent';
import { IframeChild } from './components/IframeChild';

export const App = () => {
  return (
    <div style={{ margin: '0px 20px' }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/iframe' replace />} />
          <Route index path='/iframe/' element={<IframeParent />} />
          <Route path='/iframe-child/' element={<IframeChild />} />
          {/* <Route exact path='/window/' component={WindowParent} /> */}
          {/* <Route exact path='/window-child/' component={WindowChild} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
