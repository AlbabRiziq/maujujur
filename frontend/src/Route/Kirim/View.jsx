import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

function View() {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
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
