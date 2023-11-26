import { useState } from "react";
import JumlahPesan from "../../Components/JumlahPesan/JumlahPesan";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

function Dashboard() {
  const navigate = useNavigate();
  const [url] = useState("www.exaple.com/albrzq");

  const copyClipboard = (e) => {
    navigator.clipboard.writeText(e);
    console.log(e);
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
        <JumlahPesan />
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
