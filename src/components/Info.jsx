import { infosFirst, infosSecond } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
      data-aos={"fade-up"}
      data-aos-delay="700"
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== infosFirst.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
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

const Info = () => (
  <section id="features">
    <div className="text-center text-3xl text-white font-poppins" data-aos={"fade-up"} >
      <span className="text-gradient font-semibold">Alo24</span> {" "}
      qanday yechim beradi
    </div>
    <div className={layout.section}>
      <div className={layout.sectionInfo}>
        {infosFirst.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}  />
        ))}
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {infosSecond.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Info;
