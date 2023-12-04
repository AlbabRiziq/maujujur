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
            <div className="bg-[#427D9D] p-3 m-3 rounded-lg text-center flex items-center">
              <p className="text-white">{pesan.pesan.slice(0, 5)}....</p>
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
        <div>
          <div className="text-sm p-5 mx-2 text-white rounded-xl bg-[#427D9D] text-center">
            <p>{idPesan.pesan}</p>
          </div>

          {/* Tombol kembali */}
          <button
            className="btn bg-[#427D9D] m-auto mt-3"
            onClick={() => setDetailPesan(!detailPesan)}
          >
            KEMBALI
          </button>
        </div>
      )}
      <button className="btn bg-slate-800" onClick={() => navigate("/")}>
        KEMBALI
      </button>
    </div>
  );
}

export default Pesan;
