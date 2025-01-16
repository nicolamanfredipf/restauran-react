import PageHeader from "../../components/page-header/PageHeader";
import Section from "../../components/section/Section";
import Card from "../../components/card/Card";

function OurTeam() {
  return (
    <>
      <PageHeader title={"Our Team"} />
      <Section sectionTitle="Team Members" sectionSubtitle="Our Master Chefs">
        <Card />
      </Section>
    </>
  );
}

export default OurTeam;
