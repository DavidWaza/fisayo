import Link from "next/link";
import Image from "next/image";

const Card = (props) => {
  return (
    <>
      <div class="card">
        <div class="card-image">
          <img src={props.img} alt="img" className="img" />
        </div>
        <div className="md:flex md:justify-between mt-1 block">
          <div class="category"> {props.category} </div>
          <div className="flex justify-center mt-6">
              <button className="text-[#ff0000] uppercase px-10 rounded-none proxima font-semibold bg-[#FFF] flex items-center btn-playlist">
                <Link
                  href="https://www.youtube.com/results?search_query=fisayo+fosudo"
                  className="flex items-center"
                >
                  <Image
                    src="/assets/play.png"
                    width={20}
                    height={20}
                    alt="play"
                  />
                  <span className="text-[13px] md:text-[20px] ml-2 transition-opacity duration-300 ease-in-out">
                    Visit playlist
                  </span>
                </Link>
              </button>
            </div>
        </div>
      </div>
    </>
  );
};
export default Card;
