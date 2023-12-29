import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const env = import.meta.env;

function View() {
  const navigate = useNavigate();

  const idpesan = useParams().idpesan;
  const user = useParams().id;
  const [pesan, setPesan] = useState();
  const [balasan, setBalasan] = useState([]);
  const [komen, setKomen] = useState();

  useEffect(() => {
    if (!localStorage.getItem(user)) {
      navigate("/login");
    }
  });

  useEffect(() => {
    axios({
      method: "GET",
      url: `${env.VITE_API_URL}/viewpesan`,
      params: {
        idpesan: idpesan,
        username: user,
      },
    }).then((res) => {
      setPesan(res.data.pesan);
      setBalasan(res.data.komentar);
    });
  }, [idpesan, user]);

  const commentHandle = () => {
    if (komen == undefined || komen == null || komen == "") {
      alert("Komentar tidak boleh kosong");
    } else {
      axios({
        method: "POST",
        url: `${env.VITE_API_URL}/komen`,
        params: {
          idpesan: idpesan,
          username: user,
          komen: komen,
        },
      }).then((res) => {
        console.log(res.data);
      });

      console.log(komen);
    }
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="flex items-center flex-col ">
        <div className="text-sm p-5 mx-2 text-white rounded-xl bg-[#427D9D] text-center">
          <p>{pesan}</p>
        </div>{" "}
        {/* Tampilan komentar */}
        <div className="flex w-screen p-5 flex-col">
          <div className="">
            <p className="">BALASAN</p>
          </div>
          {balasan.map((balasan, index) => (
            <div
              key={index}
              className="bg-[#427D9D] p-3 m-3 rounded-lg text-center flex items-center flex-col"
            >
              <p className="text-white">{balasan.komen}</p>
            </div>
          ))}
        </div>
        <form className="flex flex-col items-center">
          <textarea
            name=""
            id=""
            cols="50"
            rows="2"
            className="bg-slate-200 rounded-xl mt-5 p-5"
            onChange={(e) => setKomen(e.target.value)}
          ></textarea>
          <br />
          <button
            className="btn bg-[#427d9d] m-auto"
            type="button"
            onClick={commentHandle}
          >
            KIRIM
          </button>
        </form>
        <button
          className="btn bg-slate-700 mt-3 m-auto"
          onClick={() => history.back()}
        >
          KEMBALI
        </button>
        {/* Tombol kembali */}
      </div>
    </div>
  );
}

export default View;
