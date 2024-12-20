import SectionBody from "../../components/sections/section-body/SectionBody";
import SectionHeader from "../../components/sections/section-header/SectionHeader";
import Section from "../../components/sections/section/Section";
import "./Home.module.css";

function Home(){
    return(
        <Section>
            <SectionHeader></SectionHeader>
            <SectionBody></SectionBody>
        </Section>
    );
}

export default Home;