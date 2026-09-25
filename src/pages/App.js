import React from "react";
import styles from "./App.module.scss";
import HomePage from "./HomePage/index";
import Header from "../components/Header";
import { Switch, Route } from "react-router-dom";


const App = () => {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <div className={styles.box}>
          <Header />
        </div>
      </header>
      <main className={styles.content}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Peggy Chen</p>
      </footer>
    </div>
  );
};

export default App;
