import { useLoaderData } from "react-router";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import BuildSkills from "../BuildSkills/BuildSkills";
import RecentCourse from "../RecentCourse/RecentCourse";
import ExploreDiverse from "../ExploreDiverse/ExploreDiverse";
import GrowthAndCourse from "../GrowthAndCourse/GrowthAndCourse";
import CreatorBanner from "../CreatorBanner/CreatorBanner";
import OurCommunity from "../OurCommunity/OurCommunity";

const Home = () => {

    const courses = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Brand></Brand>
            <BuildSkills></BuildSkills>
            <RecentCourse courses={courses}></RecentCourse>
            <ExploreDiverse></ExploreDiverse>
            <GrowthAndCourse></GrowthAndCourse>
            <CreatorBanner></CreatorBanner>
            <OurCommunity></OurCommunity>
        </div>
    );
};

export default Home;