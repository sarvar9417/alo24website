import  {useEffect} from 'react'
import styles from "./style";
import {
  Business,
  // Billing,
  // CardDeal,
  CTA,
  Footer,
  Navbar,
  Stats,
  Clients,
  Hero,
    Info
} from "./components";
import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {
    useEffect(() => {
        AOS.init();
    }, [])

  return  <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar/>
            </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero/>
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Stats/>
                <Info/>
                <CTA/>
                <Business/>
                {/*<Billing />*/}
                {/*<CardDeal />*/}
                {/*<Testimonials />*/}
                <Clients/>
                <Footer/>
            </div>
        </div>
    </div>
};

export default App;
