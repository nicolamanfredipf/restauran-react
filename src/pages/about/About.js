import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import PageHeader from "../../components/page-header/PageHeader";
import Section from "../../components/section/Section";
import styles from "./About.module.css";
import aboutImg from "../../about-1.jpg"; 

function About() {
  return (
    <>
      {/* <PageHeader title={"About Us"} /> */}
      <div className={styles["about-container"]}>
        <Section>
          <ul className={styles.gallery}>
            <li>
              <img src={aboutImg} alt="img1"/>
            </li>
            <li>
              <img src={aboutImg} alt="img1" />
            </li>
            <li>
              <img src={aboutImg} alt="img1" />
            </li>
            <li>
              <img src={aboutImg} alt="img1" />
            </li>
          </ul>
        </Section>
        <Section sectionTitle="About Us" sectionSubtitle="Welcome to Restoran">
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
            sit. Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
            Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet
            lorem sit.
          </p>

          <div className={styles["stats-container"]}>
            <div className={styles.stats}>
              <h2>15</h2>
              <p>
                Years of
                <br />
                EXPERIENCE
              </p>
            </div>
            <div className={styles.stats}>
              <h2>50</h2>
              <p>
                Popular
                <br />
                MASTER CHEFS
              </p>
            </div>
          </div>

          <Button label={"read more"} />
        </Section>
      </div>

      <Section sectionTitle="Team Members" sectionSubtitle="Our Master Chefs">
        <ul className={styles["card-list"]}>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
        </ul>
      </Section>
    </>
  );
}

export default About;
