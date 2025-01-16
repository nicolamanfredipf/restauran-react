import PageHeader from "../../components/page-header/PageHeader";
import Section from "../../components/section/Section";
import TestimonialCard from "../../components/testimonail-card/TestimonialCard";


function Testimonial() {
  return (
    <>
      <PageHeader title={"Testimonial"} />
      <Section sectionTitle="Testimonail" sectionSubtitle="Our Clients Say!!!">
        <TestimonialCard />
      </Section>
    </>
  );
}

export default Testimonial;
