import { features } from "../constants";
import styles, { layout } from "../style";
import macbook from '../assets/ipad_pro.png'
import inMacbook from '../assets/cash.png'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`} data-aos={"fade-left"} data-aos-duration={index*500}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="products" className={layout.section}>
    <div className={layout.sectionInfo} data-aos={"fade-up"} data-aos-duration={"1000"}>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <div className='relative'>
                <img src={macbook} alt="billing" className="w-[100%] h-[70%] z-[5]" />
                <img src={inMacbook} alt="billing" className="w-[85%] rounded-md absolute h-[92%] top-[4%] left-[7.5%] z-[6]" />
            </div>
        </div>
    </div>

    <div className={`${layout.sectionImg} flex-col`} >
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div >
  </section>
);

export default Business;
