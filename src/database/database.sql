-- Tabel Mahasiswa
CREATE TABLE mahasiswa (
  npm VARCHAR(10) PRIMARY KEY,
  nama VARCHAR(50) NOT NULL,
  jurusan VARCHAR(30) NOT NULL,
  tanggal_lahir DATE NOT NULL,
  alamat TEXT
);

-- Tabel Matakuliah
CREATE TABLE matakuliah (
  kode_matakuliah VARCHAR(6) PRIMARY KEY,
  nama_matakuliah VARCHAR(50) NOT NULL,
  sks SMALLINT NOT NULL
);

-- Tabel Nilai
CREATE TABLE nilai (
  id_nilai SERIAL PRIMARY KEY, 
  npm VARCHAR(10) NOT NULL,
  kode_matakuliah VARCHAR(6) NOT NULL,
  nilai DECIMAL(3,2) NOT NULL,
  semester SMALLINT NOT NULL,
  tahun_akademik VARCHAR(9) NOT NULL,
  FOREIGN KEY (npm) REFERENCES mahasiswa(npm),
  FOREIGN KEY (kode_matakuliah) REFERENCES matakuliah(kode_matakuliah)
);