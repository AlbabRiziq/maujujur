import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

function Kirim() {
  const id = useParams().id;

  // console.log(id);
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <div>
        <div className="text-sm p-5 mx-2 text-white rounded-xl bg-[#427D9D] text-center">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quos
            accusantium unde, ut inventore maxime, natus et vero illum quod
            provident. Dicta tempore quidem sed? Deserunt temporibus saepe eius
            quam!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Kirim;
