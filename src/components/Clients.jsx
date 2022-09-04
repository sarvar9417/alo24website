import { clients, images } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`} id="clients">
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client, index) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[170px] min-w-[100px] m-5`}
          data-aos={"fade-left"}
          data-aos-delay={200*index}
        >
          <img
            src={images[client.logo]}
            alt="client_logo"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
