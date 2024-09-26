import { Button } from "@nextui-org/button";
import { Image, Link } from "@nextui-org/react";
import codeImg from "../../assets/img/image.png";
import TeamPage from "../team/team";

const HomePage = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-kanit text-2xl lg:text-6xl lg:mx-10 font-bold">
          Elevate Your Competitive Programming Journey
        </h1>
        <p className="lg:text-2xl my-5 mx-10">
          By Competitive Programmers, For Competitive Programmers
        </p>
        <Button size="lg" href="#" as={Link} color="primary">
          Joint Discord
        </Button>
        <p className="text-sm">11000+ Members</p>
        <div className="flex justify-center mt-5">
          <Image
            src={codeImg}
            alt="Contest Image"
            loading="lazy"
            shadow="lg"
            width={300}
            className="hover:scale-110 transition duration-300 ease-in-out"
          />
        </div>

        <h1 className="my-6 font-bold text-3xl">What is BCS?</h1>
        <div className="mx-10 lg:mx-36 text-start">
          <p>
            BCS - Bangladesh Competitive Programming Society is the largest
            Competitive Programming Discord Community Server in Bangladesh with
            more than 11000 Discord members and most of the members are actively
            involved in Competitive Programming.
          </p>
          <p className="my-4">
            BCS is a totally non-profit organization. The community is the heart
            of BCS. We are here to help each other grow and learn together.
          </p>
          <p className="my-4">
            We are backed by a team of volunteers who are passionate about
            Competitive Programming and want to help the community grow. Also,
            Orbitax Bangladesh, one of the leading companies in Bangladesh, has
            sponsored us for more than a year.
          </p>
        </div>
        <h1 className="my-6 font-bold text-3xl">BCS Features</h1>
        {/* TODO:Features is loading */}
        <h1 className="text-5xl text-violet-500 ">Todo:Features is COming..</h1>

        <TeamPage />
      </div>
    </div>
  );
};

export default HomePage;
