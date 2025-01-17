import PageHeader from "../../components/page-header/PageHeader";
import Section from "../../components/section/Section";
import ServiceCard from "../../components/service-card/ServiceCard";


function Service() {


    return (
        <>
            <PageHeader title={'Services'} />
            <Section sectionTitle="Our Services" sectionSubtitle="Explore Our Services">
                <ServiceCard
                    title={"Master Chefs"}
                    description={"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg>
                </ServiceCard>

            </Section>
        </>
    );
}

export default Service;