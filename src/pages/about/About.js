import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import PageHeader from "../../components/page-header/PageHeader";
import Section from "../../components/section/Section";
import styles from "./About.module.css";

function About() {
    return (
        <>
            <PageHeader title={'About Us'} />
            <Section>
                <ul className={styles.gallery}>
                    <li>
                        <img src="" alt="img1" />
                    </li>
                    <li>
                        <img src="" alt="img1" />
                    </li>
                    <li>
                        <img src="" alt="img1" />
                    </li>
                    <li>
                        <img src="" alt="img1" />
                    </li>
                </ul>
            </Section>
            <Section sectionTitle="About Us" sectionSubtitle="Welcome to Restoran">
                <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
                </p>

                <div className={styles.stats}>
                    <h2>15</h2>
                    <p>Years of<br />EXPERIENCE</p>
                </div>
                <div className={styles.stats}>
                    <h2>50</h2>
                    <p>Popular<br />MASTER CHEFS</p>
                </div>

                <Button lable={"read more"}/>
            </Section>

            <Section sectionTitle="Team Members" sectionSubtitle="Our Master Chefs">
                <Card />
            </Section>
        </>
    )
}

export default About;