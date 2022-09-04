import styles from "../style";
import Button from "./Button";
import {AiFillInstagram,  FaTelegramPlane, IoCall} from 'react-icons/all'
const text = "To'liq nazoratga ega bo'lish uchun biz bilan bog'laning!"

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>{text.split("").map((letter, index)=>(<span key={index+letter} data-aos-delay={index*50} data-aos={"fade-left"}>{letter}</span>))}</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 `}>
        <Button title={<IoCall/>} link={"tel:+998992234244"} />
        <Button title={<FaTelegramPlane />} link={"http://t.me/alo24"} />
        <Button title={<AiFillInstagram/>} link={""} />
    </div>
  </section>
);

export default CTA;
