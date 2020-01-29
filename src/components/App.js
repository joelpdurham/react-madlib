import React from 'react';
import Madlib from '../containers/Madlib';
import styles from './App.css';

const Header = () => (
  <header className={styles.header} >
    <section>
      <h1>MadLibs</h1>
      <h2>Subtitle</h2>
    </section>
  </header>
);

const Footer = () => (
  <footer className={styles.footer}>
    <section >
      <p>This is a footer</p>
    </section>
    <section>
      <p>by Joel Patrick Durham 2020</p>
    </section>
  </footer>
);

export default function App() {
  return (
    <>
      <Header />
      <Madlib />
      <Footer />
    </>
  );
}
