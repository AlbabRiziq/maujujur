import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../Components/Navbar/Navbar";

function Daftar() {
  const [username, setUsername] = useState();
  // Buat array variabel dummy user yang 50 nama orang random
  const dummyUser = [
    "Adi",
    "Adit",
    "Aditya",
    "Aji",
    "Akbar",
    "Aldi",
    "Aldo",
    "Aldy",
    "Alex",
    "Alfian",
    "Alif",
    "Alvin",
    "Ardi",
    "Ardian",
    "Ardiyan",
    "Arief",
    "Arif",
    "Arifin",
    "Aris",
    "Arjun",
    "Ari",
    "Aris",
    "Ariyanto",
  ];

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      window.location.href = "/";
    }
  });

  const handleSubmit = () => {
    if (username.length <= 0) {
      toast("Username tidak boleh kosong", {
        type: "error",
        position: "top-center",
      });
    } else if (dummyUser.includes(username)) {
      toast("Username sudah ada", {
        type: "error",
        position: "top-center",
      });
    } else {
      localStorage.setItem("user", username);

      window.location.href = "/";

      toast("Username berhasil ditambahkan", {
        type: "success",
        position: "top-center",
      });
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container w-screen h-screen flex items-center flex-col justify-center">
        <h1 className="font-bold text text-[#164863]"> MASUKAN USERNAME</h1>
        <form className="text-center">
          <input
            type="text"
            className="bg-[#9BBEC8] py-2 px-3"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <button
            type="button"
            className="bg-[#427D9D] text-white px-5 py-2 rounded-lg mt-5 m-auto"
            onClick={handleSubmit}
          >
            KIRIM
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Daftar;
