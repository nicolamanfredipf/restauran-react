import PageHeader from "../../components/page-header/PageHeader";
import Section from "../../components/section/Section";
import TestimonialCard from "../../components/testimonail-card/TestimonialCard";
import styles from "./Testimonial.module.css";
import testimonialImg from "../../testimonial-1.jpg"; 

function Testimonial() {
  return (
    <>
      {/* <PageHeader title={"Testimonial"} /> */}
      <Section sectionTitle="Testimonail" sectionSubtitle="Our Clients Say!!!">
        <div className={styles.carousel}>
          <TestimonialCard clientImgSrc={testimonialImg} />
        </div>
      </Section>
    </>
  );
}

export default Testimonial;
