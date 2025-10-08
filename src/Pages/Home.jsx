import About1 from "../Components/About/About1";
import Hero1 from "../Components/Banner/Hero1";
import Contact1 from "../Components/Contact/Contact1";
import Features from "../Components/Features/Features";

const Home = () => {
    return (
        <div className="home-page">
            <Hero1
                bgImg="/assets/images/hero-bg.png"
                SubTitle="SOLUTEK IT SERVICES"
                Title="The Beauty Behind<br>IT Services."
                Content="Where your interests international networks intersect provid custom software solutions for any value software."
                BtnText="EXPLORE MORE"
                BtnLink="/about"
                Image="/assets/images/hero-thumb.png"
                VideoText="WATCH VIDEO"
            ></Hero1>
            <Features></Features>
            <About1></About1>
            <Services1></Services1>
            <Contact1></Contact1>
        </div>
    );
};

export default Home;
