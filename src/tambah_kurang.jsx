import { useState } from "react";

function TambahKurang() {
  const [hitung, setHitung] = useState(0);

  return (
    <div style={{ fontFamily: "serif", padding: "0 20px" }}>
      <h2>Penambahan dan Pengurangan</h2>
      <h3>Hasil Hitungan: {hitung}</h3>

      <button onClick={() => setHitung(hitung + 1)}>Tambah</button>
      <button onClick={() => setHitung(hitung - 1)}>Kurang</button>

      <hr style={{ width: "400px", marginLeft: 0 }} />
      <hr style={{ width: "400px", marginLeft: 0 }} />
    </div>
  );
}

export default TambahKurang;