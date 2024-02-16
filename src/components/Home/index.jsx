import Layout from "../Partials/Layout";
import HersoSection from "./hersoSection";
import OurCausesSection from "./ourCausesSection";
import OurStorySection from "./ourStorySection";
import ThoughtBehindActionSection from "./thoughtBehindActionSection";
import WelcomeKalalaySection from "./welcomeKalalaySection";

const Home = () => {
  return (
    <Layout childrenClasses="pb-[60px]">
        <HersoSection/>
        <WelcomeKalalaySection/>
        <OurStorySection/>
        <OurCausesSection/>
        <ThoughtBehindActionSection/>
    </Layout>
  );
};

export default Home;
