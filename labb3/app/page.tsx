"use client";
import styles from "./page.module.css";
import SideMenu from "./components/SideMenu";
import Link from 'next/link'
import { Info, Training } from "./pages/index";

export default function Home() {

  return (
      <div className={styles.page}>
        <main className={styles.main}>
          <div className="App">
            <header className="App-header">
              <SideMenu />
              <div id="mid-col">
                <Link href={'./pages/Info'}/>
              </div>
            </header>
          </div>
        </main>
        <footer className={styles.footer}></footer>
      </div>
  );
}
