import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/react";

const IcpcCard = ({ groupPerson }) => {
  console.log(groupPerson.members);
  return (
    <div className="grid grid-flow-row lg:grid-cols-3">
      {groupPerson.members.map((member, index) => (
        <Card
          key={index}
          className="max-w-[340px] m-5 border border-transparent hover:border-white transition-all duration-10000 ease-in-out "
        >
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

              <div className=" mt-5">
                <h1 className="font-medium text-xl  leading-none ">
                  {member.name}
                </h1>
                <p> {member.designation}</p>
              </div>

              <p className="mt-2 text-s text-start">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                expedita quibusdam sint, similique porro est minima cum
                consequatur optio numquam?
              </p>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default IcpcCard;
