import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const TheTeamCard = ({ team }) => {
  const { name } = team;
  return (
    <>
      <Card className="max-w-[340px] m-5 border border-transparent hover:border-white transition-all duration-10000 ease-in-out ">
        <CardBody>
          <div className="text-center ">
            <div className="text-center flex justify-center">
              <div className="relative w-32 h-32 overflow-hidden rounded-full">
                <Image
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                  src="https://loremflickr.com/320/320/boy"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>

            <div className="text-sm mt-5">
              <a href="#" className="font-medium leading-none ">
                {name}
              </a>
              <p> Founder and Full Stack Engineer</p>
            </div>

            <p className="mt-2 text-s text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              expedita
            </p>
            <div className="flex mt-4 gap-3 justify-center ">
              <a href="">
                <FaFacebookSquare
                  className="text-blue-600 hover:text-blue-800"
                  size={25}
                />
              </a>
              <a href="">
                <FaSquareGithub
                  className="text-blue-600 hover:text-blue-800"
                  size={25}
                />
              </a>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default TheTeamCard;
