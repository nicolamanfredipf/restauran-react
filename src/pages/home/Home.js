import About from "../about/About";
import Booking from "../booking/Booking";
import Menu from "../menu/Menu";
import OurTeam from "../our-team/OurTeam";
import Service from "../service/Service";
import Testimonial from "../testimonial/Testimonial";


function Home() {
    return (
        <>
            <Service />
            <About />
            <Menu/>
            <Booking/>
            <OurTeam/>
            <Testimonial/>
        </>
    )
}

export default Home;