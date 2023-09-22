const { default: Card } = require("./Card");

const Playlist = () => {
  return (
    <div className="bg-white h-full py-11">
      <p className="text-[#ff0000] text-[104px] text-center din uppercase">
        playlist
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4  gap-4 mt-7 px-[3rem]">
        <Card img="/assets/invest2.webp" category="invest" />
        <Card img="/assets/charity.webp" category="Charity" />
        <Card img="/assets/celebs.webp" category="Celebrity" />
        <Card img="/assets/adaora.webp" category="Top Notch" />
      </div>
    </div>
  );
};
export default Playlist;
