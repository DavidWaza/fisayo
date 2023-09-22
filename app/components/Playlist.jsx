const { default: Card } = require("./Card");

const playlists = [
  {
    img: "/assets/invest2.webp",
    category: "investments.",
    
  },
  {
    
    img: "/assets/adaora.webp",
    category: "technology.",
  },
  {
    img: "/assets/celebs.webp",
    category: "celebrity.",
  },
  {
    
    img: "/assets/charity.webp",
    category: "charity.",
  },
];
const Playlist = () => {
  return (
    <div className="bg-white h-full py-[12rem]">
      <p className="text-[#ff0000] text-[50px] md:text-[104px] text-center thiccboi-semi">
        playlist.
      </p>
      <div className="grid grid-cols-none md:grid-cols-none lg:grid-cols-4 gap-2 md:mt-7 px-4 md:px-[10rem]">
        {playlists.map((playlist, index) => {
          return (
            <div key={index} className="md:mt-7 lg:mt-0">
              <Card img={playlist.img} category={playlist.category} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Playlist;
