/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const env = import.meta.env;

function Pesan() {
  const [detailPesan, setDetailPesan] = useState(false);
  const [idPesan, setIdPesan] = useState(0);
  const [message, setMessage] = useState([]);
  const [komentar, setKomentar] = useState([]);

  const navigate = useNavigate();

  const username = localStorage.getItem("user");

  useEffect(() => {
    axios({
      method: "GET",
      url: `${env.VITE_API_URL}/pesan`,
      params: {
        username: username,
      },
    }).then((res) => {
      setMessage(res.data[0].pesan);
      console.log(res.data[0].pesan);
    });
  }, [username]);
  //
  useEffect(() => {
    const token = localStorage.getItem("user");
    if (!token) {
      navigate("/login");
    }
  });

  const pesan = message;

  const lihatPesan = (id) => {
    setDetailPesan(true);
    console.log(id.pesan);
    setIdPesan(id);
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      {!detailPesan ? (
        <div className="flex flex-wrap items-center justify-center">
          {pesan.map((pesan) => (
            <div className="bg-[#427D9D] p-3 m-3 rounded-lg text-center flex items-center flex-col">
              <p className="text-white">{pesan.pesan}</p>
              <button
                className="btn bg-[#427D9D] mx-5"
                onClick={() => lihatPesan(pesan)}
              >
                LIHAT
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center flex-col ">
          <div className="text-sm p-5 mx-2 text-white rounded-xl bg-[#427D9D] text-center w-screen ">
            <p>{idPesan.pesan}</p>
          </div>

          {/* Tampilan komentar */}

          <div className="flex flex-col w-screen p-5">
            <div className="bg-[#427d9d] text-white p-2 px-3 rounded-lg w-96">
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates, recusandae.
              </p>
            </div>
          </div>

          <form className="flex flex-col items-center">
            <textarea
              name=""
              id=""
              cols="50"
              rows="2"
              className="bg-slate-200 rounded-xl mt-5 p-5"
              onChange={(e) => {
                setKomentar(e.target.value);
                console.log(komentar);
              }}
            ></textarea>
            <br />
            <button className="btn bg-[#427d9d] m-auto">KIRIM</button>
          </form>

          {/* Tombol kembali */}
          <button
            className="btn bg-[#427D9D] m-auto mt-3"
            onClick={() => setDetailPesan(!detailPesan)}
          >
            KEMBALI
          </button>
        </div>
      )}
    </div>
  );
}

export default Pesan;
