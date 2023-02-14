import styles from "./style";

import {Navbar, Hero, About, LatestFooter, SectionShow} from "./components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/*Header*/}
      <header className="App-header">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>
      </header>

      {/*Main*/}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      {/*Section*/}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About/>
        </div>
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <SectionShow/>
        </div>
      </div>

      {/*Footer*/}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <LatestFooter/>
        </div>
      </div>

    </div>
  );
}

export default App;
