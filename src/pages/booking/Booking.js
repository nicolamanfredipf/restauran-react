import PageHeader from "../../components/page-header/PageHeader";
import Section from "../../components/section/Section";
import styles from "./Booking.module.css";

function Booking() {
  return (
    <>
      <PageHeader title={"Booking"} />
      <div className={styles["reservation-container"]}>
        <aside>
          <video></video>
        </aside>
        <Section
          sectionTitle="Reservation"
          sectionSubtitle="Book A Table Online"
        >
          <form className={styles["reservation-form"]}>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
            <input type="date" placeholder="Date & Time" />
            <select>
              <option>People 1</option>
              <option>People 2</option>
              <option>People 3</option>
            </select>
            <textarea placeholder="Special Request" />
            <input type="submit" value="BOOK NOW" />
          </form>
        </Section>
      </div>
    </>
  );
}

export default Booking;
