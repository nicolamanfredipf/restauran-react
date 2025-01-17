import PageHeader from "../../components/page-header/PageHeader";
import Section from "../../components/section/Section";
import styles from "./Contact.module.css";
function Contact() {
  return (
    <>
      {/* <PageHeader title={"Contact Us"} /> */}
      <Section
        sectionTitle="Contact Us"
        sectionSubtitle="Contact For Any Query"
      >
        <div className={styles.elements}>
          <Section
            sectionTitle="Booking"
            sectionSubtitle="book@example.com"
          ></Section>
          <Section
            sectionTitle="General"
            sectionSubtitle="info@example.com"
          ></Section>
          <Section
            sectionTitle="Technical"
            sectionSubtitle="tech@example.com"
          ></Section>
        </div>
      </Section>
      <div className={styles.info}>
        <aside className={styles.maps}></aside>
        <Section>
          <form className={styles["reservation-form"]}>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" />
            <input type="submit" value="SEND MESSAGE" />
          </form>
        </Section>
      </div>
    </>
  );
}

export default Contact;
