import { useState } from "react";

function InputQuiz() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");

  return (
    <div style={{ fontFamily: "serif", padding: "0 40px", marginTop: "40px" }}>
      <h2>Input Data</h2>

      <p>
        Nama:{" "}
        <input
          type="text"
          placeholder="Masukkan Nama ..."
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </p>
      <p>
        Email:{" "}
        <input
          type="text"
          placeholder="Masukkan Email ..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p>
        Alamat:{" "}
        <input
          type="text"
          placeholder="Masukkan Alamat ..."
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
        />
      </p>

      <h3>Hasil Inputan:</h3>
      <p><b>Nama:</b> {nama}</p>
      <p><b>Email:</b> {email}</p>
      <p><b>Alamat:</b> {alamat}</p>
    </div>
  );
}

export default InputQuiz;