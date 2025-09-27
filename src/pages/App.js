import React from "react";
import styles from "./App.module.scss";
import HomePage from "./HomePage/index";
import WorkPage from "./WorkPage/index";
import AboutPage from "./AboutPage";
import Header from "../components/Header";
import { Switch, Route, Redirect } from "react-router-dom";


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
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/about" component={AboutPage} />
          <Redirect to="/" />
        </Switch>
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Peggy Chen</p>
      </footer>
    </div>
  );
};

export default App;
