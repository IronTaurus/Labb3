'use client'
import styles from "./page.module.css";
import SideMenu from './components/SideMenu';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import {Info, Training} from './pages/index'

export default function Home() {
  const routes = [
    {path: "info", element: <Info/>}, 
    {path: "training", element: <Training/>}, 
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="App">
          <header className="App-header">
            <SideMenu/>
            <div id="mid-col">
              <Routes>
                <Route path="/" element={<Outlet />}>
                  <Route index element={<Home />} />
                    {routes.map((route, i) => <Route key={i} path={route.path} element={route.element}/>)};
                </Route>
              </Routes>
            </div>
          </header>
      </div>
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
