import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const env = import.meta.env;

function Kirim() {
  const [pesan, setPesan] = useState();

  const id = useParams().id;
  // Random string

  const submit = () => {
    const idpesan = Math.random().toString(36).substring(9);

    console.log(idpesan);

    axios({
      method: "POST",
      url: `${env.VITE_API_URL}/pesan`,
      data: {
        username: id,
        pesan: pesan,
        idpesan: idpesan,
      },
    }).then((res) => {
      console.log(res);
    });
  };

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
        </form>
        <button
          className="btn bg-[#427d9d] m-auto"
          onClick={submit}
          type="button"
        >
          KIRIM
        </button>
      </div>
    </div>
  );
}

export default Kirim;
