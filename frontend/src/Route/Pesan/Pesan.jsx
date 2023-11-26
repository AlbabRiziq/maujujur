/* eslint-disable react/jsx-key */
import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";

function Pesan() {
  const [detailPesan, setDetailPesan] = useState(false);
  const [idPesan, setIdPesan] = useState(0);

  const pesan = [
    {
      id: 0,
      pesan:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit nisl metus, cursus per imperdiet vestibulum fusce et porttitor neque. Ridiculus facilisi nulla ullamcorper eu mi maecenas erat eleifend ante eros aptent mattis augue tellus, blandit quis volutpat ornare nunc fames aenean massa dui nec fringilla class. Taciti habitasse tellus posuere class ac urna nam sollicitudin, odio dis penatibus tristique facilisi feugiat netus nisl, vulputate bibendum dictumst malesuada purus phasellus fusce. Nascetur rutrum dictum condimentum habitasse mi porttitor montes tortor, sollicitudin fermentum neque eget scelerisque imperdiet. Odio erat tempor sociis maecenas eu venenatis, id sociosqu turpis fusce at aenean, varius bibendum mus purus morbi. Cursus tempor quisque himenaeos interdum viverra morbi quis platea, nulla iaculis velit fusce vitae egestas at venenatis nibh, dignissim nisi ligula lacinia neque imperdiet feugiat.",
    },
    {
      id: 1,
      pesan: "hai",
    },
  ];

  const lihatPesan = (id) => {
    setDetailPesan(true);
    console.log(detailPesan);
    setIdPesan(id);
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      {!detailPesan ? (
        <div className="flex flex-col items-center justify-center">
          {pesan.map((pesan) => (
            <div className="bg-[#427D9D] p-3 m-3 rounded-lg text-center flex items-center">
              <p className="text-white">{pesan.pesan.slice(0, 5)}....</p>
              <button
                className="btn bg-[#427D9D] mx-5"
                onClick={() => lihatPesan(pesan.id)}
              >
                LIHAT
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="text-sm p-5 mx-2 text-white rounded-xl bg-[#427D9D] text-center">
            <p>{pesan[idPesan].pesan}</p>
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
    </div>
  );
}

export default Pesan;
