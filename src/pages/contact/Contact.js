import PageHeader from "../../components/page-header/PageHeader";
import Section from "../../components/section/Section";
import styles from "./Contact.module.css";
function Contact() {
  return (
    <>
      <PageHeader title={"Contact Us"} />
      <Section
        sectionTitle="Contact Us"
        sectionSubtitle="Contact For Any Query"
      >
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
      </Section>
      <Section>
      <form className={styles["reservation-form"]}>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" />
            <input type="submit" value="SEND MESSAGE" />
        </form>
      </Section>
    </>
  );
}

export default Contact;
