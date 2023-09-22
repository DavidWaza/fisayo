import Link from "next/link";
import Image from "next/image";

const Card = (props) => {
  return (
    <>
      <div class="card">
        <div class="card-image">
          <img src={props.img} alt="img" className="img" />
        </div>
        <div class="category"> {props.category} </div>
        <div class="heading">
          {" "}
          <div class="author">
            {" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
