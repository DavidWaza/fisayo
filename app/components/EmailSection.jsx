import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <>
      <div className="bg">
        <div className="flex flex-col justify-center items-center py-[40%] lg:py-[15%] md:py-[35%]">
          <div className="mb-7">
            <p className="din text-[#000] leading-10 font-bold md:text-[2rem] text-[1.2rem] leading-6">
              Want to reach out?
            </p>
          </div>
          <button className="text-[#fff] uppercase px-10 p-4 md:px-20 md:p-6 rounded-none proxima font-semibold bg-[#0d0d0d] flex items-center">
            <Link
              href="https://www.youtube.com/results?search_query=fisayo+fosudo"
              className="flex items-center"
            >
              <Image src="/assets/mail.png" width={20} height={20} alt="play" />
              <span className="ml-4 transition-opacity duration-300 ease-in-out tracking-widest dosis text-xl">
                send an email
              </span>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default EmailSection;
