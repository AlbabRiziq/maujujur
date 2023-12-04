import { useEffect, useState, useContext } from "react";
import JumlahPesan from "../../Components/JumlahPesan/JumlahPesan";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import ContextData from "../../Context/Context";

const env = import.meta.env;

function Dashboard() {
  const navigate = useNavigate();
  const username = localStorage.getItem("user");

  const [message, setMessage] = useState([]);

  const [url] = useState(
    `${location.protocol}://${location.host}/pesan/${username}`
  );

  useEffect(() => {
    axios({
      method: "GET",
      url: `${env.VITE_API_URL}/pesan`,
      params: {
        username: username,
      },
    }).then((res) => {
      setMessage(res.data[0].pesan);
    });
  }, [username]);

  const copyClipboard = (e) => {
    navigator.clipboard.writeText(e);
    // console.log(e);
  };

  return (
    <div className="text-center">
      <Navbar />
      <br />

      <br />

      <br />
      <div className="text-center">
        <div className="bg-[#427D9D] p-3 m-3 rounded-lg text-center">
          <p className="text-white">{url}</p>
        </div>
        <button className="btn bg-[#427D9D]" onClick={copyClipboard(url)}>
          SALIN
        </button>
      </div>
      <div className="w-screen flex items-center justify-evenly flex-col ">
        <ContextData.Provider value={{ message: message }}>
          <JumlahPesan />
        </ContextData.Provider>
      </div>
      <button
        className="btn bg-[#427D9D] m-auto mt-3"
        onClick={() => navigate("/pesan")}
      >
        LIHAT PESAN
      </button>
    </div>
  );
}

export default Dashboard;
