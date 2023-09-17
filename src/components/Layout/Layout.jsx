import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from '../Navigation/Navigation';
import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <div>
      <header className={styles.header}>
        <Navigation />
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
