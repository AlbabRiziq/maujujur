import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { useEffect, useState } from "react";

function Kirim() {
  const [pesan, setPesan] = useState();

  const id = useParams().id;

  useEffect(() => {
    console.log(pesan);
  }, [pesan]);

  // console.log(id);
  return (
    <div className>
      <Navbar />
      <br />
      <br />

      <br />
      <div className="flex flex-col items-center">
        <div className="text-sm p-5 mx-2 text-white rounded-xl bg-[#427D9D] text-center">
          <h1>Kirim pesan ke {id}</h1>
        </div>
        <form>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="bg-slate-200 rounded-xl mt-5 p-5"
            onChange={(e) => setPesan(e.target.value)}
          ></textarea>
          <br />
          <button className="btn bg-[#427d9d]">KIRIM</button>
        </form>
      </div>
    </div>
  );
}

export default Kirim;
