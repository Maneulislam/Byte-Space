import { useLoaderData } from "react-router";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import BuildSkills from "../BuildSkills/BuildSkills";
import RecentCourse from "../RecentCourse/RecentCourse";

const Home = () => {

    const courses = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Brand></Brand>
            <BuildSkills></BuildSkills>
            <RecentCourse courses={courses}></RecentCourse>
        </div>
    );
};

export default Home;