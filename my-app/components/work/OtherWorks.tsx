import { BsArrowUpRight } from "react-icons/bs";
import { AiFillCheckSquare } from "react-icons/ai";
import { OTHER__WORK__DATA } from "../../assets/workData";
import Link from "next/link";

type Props = {};

const OtherWorks = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row  items-center justify-center gap-2 mt-7">
      {OTHER__WORK__DATA.map((item, index) => (
        <div
          key={index}
          className={`${item.background}  p-[1px] text-white rounded-lg w-full lg:w-1/3 flex items-center justify-center flex-col opacity-70 hover:opacity-100 duration-200 hover:-translate-y-1`}
        >
          <div className="bg-darkGrey py-4 lg:py-5 px-10 lg:px-8 lg:pr-10 rounded-lg">
            <h2 className="text-xl font-bold border-b border-white py-4">
              {item.title}
            </h2>
            <p className="py-6 leading-6">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.stacks.map((stack, index) => (
                <div
                  key={index}
                  className="py-1 rounded-md text-sm flex items-center justify-center"
                >
                  <span>
                    <AiFillCheckSquare className="mx-1" />
                  </span>
                  {stack}
                </div>
              ))}
            </div>
            <div className="py-4 flex lg:py-6 gap-3">
              <button className="border border-white py-1 px-2 group lg:px-4 rounded-full text-sm flex items-center hover:bg-white hover:text-darkGrey duration-300 hover:-translate-y-1">
                <Link href={item.github} target="_blank">
                  {" "}
                  github
                </Link>
                <span className="inline-block ml-2">
                  <BsArrowUpRight className="group-hover:rotate-45 duration-200" />
                </span>
              </button>
              {item.launch ? (
                <button className="border border-white py-1 px-2 group lg:px-4 rounded-full text-sm flex items-center hover:bg-white hover:text-darkGrey duration-300 hover:-translate-y-1">
                  <Link href={item.github} target="_blank">
                    {" "}
                    launch
                  </Link>
                  <span className="inline-block ml-2">
                    <BsArrowUpRight className="group-hover:rotate-45 duration-200" />
                  </span>
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherWorks;
