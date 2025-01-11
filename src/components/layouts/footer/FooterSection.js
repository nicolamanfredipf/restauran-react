import Title from "../commons/title/Title";

function FooterSection({ children, name }) {
    return (
        <section>
            <Title name={name}></Title>
            <ul>
                {children}
            </ul>
        </section>
    );
}

export default FooterSection;