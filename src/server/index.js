import bodyParser from "body-parser";
import express from "express";
import prisma from "../../prisma/client/index.js";

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/mahasiswa", async (req, res) => {
  try {
    const result = await prisma.mahasiswa.findMany({
      take: 5,
    });
    if (!result) {
      return res.json({
        message: "Failed Get All Mahasiswa",
      });
    }
    return res.send({
      message: "Succesfully Get All Mahasiswa",
      data: result,
    });
  } catch (error) {
    console.log("Error");
  }
});

app.post("/mahasiswa", async (req, res) => {
  const { npm, nama, jurusan, tanggal_lahir, alamat } = req.body;
  try {
    const createNewMahasiswa = await prisma.mahasiswa.create({
      data: {
        npm,
        nama,
        jurusan,
        tanggal_lahir,
        alamat,
      },
    });
    if (!createNewMahasiswa) {
      return res.send({
        message: "Failed Create New Mahasiswa",
      });
    }
    return res.send({
      message: "Successfully Create New Mahasiswa",
      data: createNewMahasiswa,
    });
  } catch (error) {
    return res.json({
      message: "Error Server",
      error: error,
    });
  }
});

app.get("/mataKuliah", async (req, res) => {
  try {
    const result = await prisma.matakuliah.findMany({
      take: 5,
    });
    if (!result) {
      return res.json({
        message: "Failed Get All MataKuliah",
      });
    }
    return res.send({
      message: "Succesfully Get All MataKuliah",
      data: result,
    });
  } catch (error) {
    console.log("Error");
  }
});

app.post("/mataKuliah", async (req, res) => {
  const { kode_matakuliah, nama_matakuliah, sks } = req.body;
  try {
    const createNewMatakuliah = await prisma.matakuliah.create({
      data: {
        kode_matakuliah,
        nama_matakuliah,
        sks,
      },
    });
    if (!createNewMatakuliah) {
      return res.send({
        message: "Failed Create New Matakuliah",
      });
    }
    return res.send({
      message: "Successfully Create New Matakuliah",
      data: createNewMatakuliah,
    });
  } catch (error) {
    console.log("Error Server");
  }
});

app.get("/nilai", async (req, res) => {
  try {
    const result = await prisma.nilai.findMany({
      take: 5,
    });
    if (!result) {
      return res.json({
        message: "Failed Get All Nilai",
      });
    }
    return res.send({
      message: "Succesfully Get All Nilai",
      data: result,
    });
  } catch (error) {
    console.log("Error Server");
  }
});

app.post("/nilai", async (req, res) => {
  const { npm, kode_matakuliah, nilai, semester, tahun_akademik } = req.body;
  try {
    const createNewNilai = await prisma.nilai.create({
      data: {
        npm,
        kode_matakuliah,
        nilai,
        semester,
        tahun_akademik,
      },
    });
    if (!createNewNilai) {
      return res.json({
        message: "Failed Create New Nilai",
      });
    }
    return res.send({
      message: "Succesfully Create New Nilai",
      data: createNewNilai,
    });
  } catch (error) {
    return res.json({
      message: "Error Server",
      error: error,
    });
  }
});

app.listen(port, () => {
  console.info(`Server running on port ${port}`);
});
