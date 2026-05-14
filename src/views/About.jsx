import AboutSection from '../components/AboutSection';
import StatsCounter from '../components/StatsCounter';
import ContactForm from '../components/ContactForm';

const About = () => {
    return (
        <div className="pt-12 md:pt-16">
            <AboutSection isMainHeading={true} />
            <StatsCounter />
            <ContactForm />
        </div>
    );
};

export default About;
