/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import ContextData from "../../Context/Context";

function Daftar() {
  const [username, setUsername] = useState();
  const navigate = useNavigate();
  const dummyUser = ["Adi", "Ariyanto"];

  const env = import.meta.env;

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      navigate("/");
    }
  });

  const handleSubmit = () => {
    if (username.length <= 0) {
      toast("Username tidak boleh kosong", {
        type: "error",
        position: "top-center",
      });
    } else if (username == "user") {
      toast("Username gagal ditambahkan", {
        type: "error",
        position: "top-center",
      });
    } else {
      axios({
        method: "POST",
        url: `${env.VITE_API_URL}/daftar`,
        params: {
          username: username,
        },
      })
        .then((res) => {
          console.log(res);
          localStorage.setItem("user", username);

          window.location.href = "/";

          toast("Username berhasil ditambahkan", {
            type: "success",
            position: "top-center",
          });
        })
        .catch((err) => {
          console.log(err);
          toast("Username gagal ditambahkan", {
            type: "error",
            position: "top-center",
          });
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
            className="bg-[#9BBEC8] py-3 px-9 rounded-xl"
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
