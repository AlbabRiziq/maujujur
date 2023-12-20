/* eslint-disable react/jsx-key */
import { useEffect, useState, useContext } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import ContextData from "../../Context/Context";
import axios from "axios";

const env = import.meta.env;

function Pesan() {
  const [detailPesan, setDetailPesan] = useState(false);
  const [idPesan, setIdPesan] = useState(0);
  const context = useContext(ContextData);
  const navigate = useNavigate();

  const username = localStorage.getItem("user");

  const [message, setMessage] = useState([]);

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

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (!token) {
      navigate("/login");
    }
  });
  const pesan = message;

  const lihatPesan = (id) => {
    setDetailPesan(true);
    console.log(id);
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
              <p className="text-white">
                {pesan.pesan}
                {console.log(pesan.pesan)}
              </p>
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
          <div className="text-sm p-5 mx-2 text-white rounded-xl bg-[#427D9D] text-center">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta a
              vero consequuntur culpa in fugiat iusto beatae illum. Quaerat
              distinctio voluptas vitae perferendis doloribus autem impedit
              aliquam totam facilis? Officia!
            </p>
          </div>

          {/* Tampilan komentar */}

          <div className="flex w-screen p-5">
            <div className="bg-[#427d9d] text-white p-2 px-3 rounded-lg">
              <h1 className="text-sm mb-2 font-bold">ANONYMOUS</h1>
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
      <div className="flex items-center justify-center">
        <button className="btn bg-slate-800" onClick={() => navigate("/")}>
          HOME
        </button>
      </div>
    </div>
  );
}

export default Pesan;
