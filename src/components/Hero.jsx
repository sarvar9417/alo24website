import styles from "../style";
import { discount } from "../assets";
import macbook from "../assets/macbook.webp";
import inMacbook from "../assets/inMacbook.png";

const Hero = () => {

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`} data-aos="fade-right" data-aos-duration="1000" data-aos-placement="center-bottom" >

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient">Alo24</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[55px] text-[42px] text-white ss:leading-[80px] leading-[60px] w-full">
          Biznesingizni <span className="text-gradient">ichkaridan</span> ko'rsatamiz
        </h1>

        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Sizning har bir tejalgan so'mingiz va vaqtingiz biz uchun qadrli</span>
          </p>
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} data-aos-delay={500} data-aos="fade-down-left" data-aos-duration="1000">
        <div className='relative'>
          <img src={macbook} alt="billing" className="w-[100%] h-[100%] z-[5]" />
          <img src={inMacbook} alt="billing" className="w-[70%] rounded-md absolute top-[10%] left-[16%] z-[5]" />
        </div>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

    </section>
  );
};

export default Hero;
