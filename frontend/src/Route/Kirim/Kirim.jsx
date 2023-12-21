import { Link, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const env = import.meta.env;

function Kirim() {
  const [pesan, setPesan] = useState();
  const [kirim, setKirim] = useState(false);

  const id = useParams().id;

  if (!localStorage.getItem(id)) {
    localStorage.setItem(id, JSON.stringify([]));
  }

  const totalPesan = JSON.parse(localStorage.getItem(id));

  // Random string

  console.log(totalPesan);

  const submit = () => {
    const idpesan = Math.random().toString(36).substring(9);

    console.log(idpesan);

    const berhasil = () => {
      totalPesan.push({
        pesan: pesan,
        idpesan: idpesan,
      });

      localStorage.setItem(id, JSON.stringify(totalPesan));
      toast("Pesan berhasil dikirim", {
        type: "success",
        position: "top-center",
      });
    };

    axios({
      method: "POST",
      url: `${env.VITE_API_URL}/pesan`,
      params: {
        username: id,
        pesan: pesan,
        idpesan: idpesan,
      },
    })
      .then(() => {
        berhasil();
      })
      .catch((err) => {
        console.log(err);
        toast("Pesan gagal dikirim", {
          type: "error",
          position: "top-center",
        });
      });
  };

  // console.log(id);
  return (
    <div className>
      <Navbar />
      <br />
      <br />
      <br />

      {!kirim ? (
        <div>
          {totalPesan.map((pesan, index) => (
            <div
              key={index}
              className="bg-[#427D9D] p-3 m-3 rounded-lg text-center flex items-center flex-col"
            >
              <p className="text-white">{pesan.pesan}</p>
              <Link to={`/pesan/${id}/${pesan.idpesan}`}>
                <div className="btn bg-[#427D9D] mx-5">LIHAT</div>
              </Link>
            </div>
          ))}
          <button className="btn bg-slate-600" onClick={() => setKirim(true)}>
            KIRIM PESAN BARU
          </button>
        </div>
      ) : (
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
            onClick={() => {
              submit();
            }}
            type="button"
          >
            KIRIM
          </button>
          <br />
          <button
            className="btn bg-[#427d9d] m-auto"
            onClick={() => setKirim(false)}
            type="button"
          >
            KEMBALI
          </button>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default Kirim;
