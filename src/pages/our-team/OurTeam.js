import PageHeader from "../../components/page-header/PageHeader";
import Section from "../../components/section/Section";
import Card from "../../components/card/Card";
import styles from "./OurTeam.module.css";

function OurTeam() {
  return (
    <>
      {/* <PageHeader title={"Our Team"} /> */}
      <Section sectionTitle="Team Members" sectionSubtitle="Our Master Chefs">
        <div className={styles["card-container"]}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Section>
    </>
  );
}

export default OurTeam;
