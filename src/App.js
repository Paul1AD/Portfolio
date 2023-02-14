import styles from "./style";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/*Header*/}
      <header className="App-header">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            Navbar
          </div>
        </div>
      </header>

      {/*Main*/}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Main
        </div>
      </div>

      {/*Section*/}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Setup
        </div>
      </div>


      {/*Footer*/}
    </div>
  );
}

export default App;
