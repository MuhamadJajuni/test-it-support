-- CreateTable
CREATE TABLE "mahasiswa" (
    "npm" VARCHAR(50) NOT NULL,
    "nama" VARCHAR(50) NOT NULL,
    "jurusan" VARCHAR(50) NOT NULL,
    "tanggal_lahir" VARCHAR(50) NOT NULL,
    "alamat" TEXT,

    CONSTRAINT "mahasiswa_pkey" PRIMARY KEY ("npm")
);

-- CreateTable
CREATE TABLE "matakuliah" (
    "kode_matakuliah" VARCHAR(6) NOT NULL,
    "nama_matakuliah" VARCHAR(50) NOT NULL,
    "sks" SMALLINT NOT NULL,

    CONSTRAINT "matakuliah_pkey" PRIMARY KEY ("kode_matakuliah")
);

-- CreateTable
CREATE TABLE "nilai" (
    "id_nilai" SERIAL NOT NULL,
    "npm" VARCHAR(50) NOT NULL,
    "kode_matakuliah" VARCHAR(6) NOT NULL,
    "nilai" DECIMAL(3,2) NOT NULL,
    "semester" SMALLINT NOT NULL,
    "tahun_akademik" VARCHAR(9) NOT NULL,

    CONSTRAINT "nilai_pkey" PRIMARY KEY ("id_nilai")
);

-- AddForeignKey
ALTER TABLE "nilai" ADD CONSTRAINT "nilai_npm_fkey" FOREIGN KEY ("npm") REFERENCES "mahasiswa"("npm") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nilai" ADD CONSTRAINT "nilai_kode_matakuliah_fkey" FOREIGN KEY ("kode_matakuliah") REFERENCES "matakuliah"("kode_matakuliah") ON DELETE RESTRICT ON UPDATE CASCADE;
