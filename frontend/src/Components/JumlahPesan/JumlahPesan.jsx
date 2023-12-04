import { useContext } from "react";
import ContextData from "../../Context/Context";

function JumlahPesan() {
  const context = useContext(ContextData);
  const pesan = context.message;

  return (
    <div className="w-64 py-5 bg-[#427D9D] text-center rounded-lg">
      <h1 className="text-2xl text-white">{pesan.length}</h1>

      <h1 className="text-xs text-white">PESAN BELUM TERBACA</h1>
    </div>
  );
}

export default JumlahPesan;
