import Link from "next/link";
import Image from "next/image";

const VideoBg = () => {
  return (
    <>
      <section className="showcase">
        <video
          autoPlay
          loop
          muted
          className="hero-video"
          poster="/assets/hero.jpg"
        >
          <source
            src="https://res.cloudinary.com/dgbl43ljm/video/upload/v1695304490/Someone_made_a_Fisayo_Fosudo_song_shorts_edqxxc.mp4"
            type="video/mp4"
          />
        </video>
        <div className="overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-full">
            <h1 className=" text-[1rem] md:text-2xl text-white uppercase dosis tracking-widest text-center mb-5 md:mb-0">
              Without #FODaADU, i&apos;m
            </h1>
            <p className="uppercase text-[2.3rem] md:text-[114px] w-full din font-bold text-[#B5AB99] leading-[40px] md:leading-[100px] lg:leading-[170px] mb-5 md:mb-0">
              Fisayo Fosudo
            </p>
            <p className="text-white uppercase text-[1rem] md:text-[2rem] w-full mb-5 din-light tracking-wider">
              Visual storyteller & tech video producer
            </p>
            <div className="flex justify-center mt-[3rem]">
              <button className="text-white p-4 px-10 rounded-none dosis bg-[#FF0000] flex items-center hover:rounded-full transform transition-transform duration-300 ease-in-out hover:opacity-80 hover:scale-110">
                <Link
                  href="https://www.youtube.com/results?search_query=fisayo+fosudo"
                  className="flex items-center"
                >
                  <Image
                    src="/assets/play-white.png"
                    width={20}
                    height={20}
                    alt="play"
                  />
                  <span className="ml-2 transition-opacity duration-300 ease-in-out">
                    Visit Channels
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default VideoBg;
