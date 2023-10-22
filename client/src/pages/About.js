import React from "react";
import Nav from "../components/Nav";

const About = () => {
  return (
    <div className="container">
      <div>
        <Nav />
        <h4>About</h4>
        <hr />
        <div className="About">
          <p className="d-flex justify-content-evenly">
            <h3>Nama : Alvin Faiz Rinaldi</h3>
            <h3>Umur : 24 Tahun</h3>
            <h3>Alamat : BSD, Tangerang Selatan</h3>
          </p>
          <hr />
          <h6 className="text-center">Riwayat Pendidikan</h6>
          <table class="table table-dark table-striped table-sm table-hover">
            <thead>
              <tr>
                <th scope="col">Tahun</th>
                <th scope="col">Sekolah</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">2005 – 2008</th>
                <td>SDN Cikoko 01 Pagi (Kelas 1-3)</td>
              </tr>
              <tr>
                <th scope="row">2008 – 2011</th>
                <td>SDN Rawabuntu 3 (Kelas 4-6)</td>
              </tr>
              <tr>
                <th scope="row">2011 – 2014</th>
                <td colspan="2">SMPN 11 Kota Tangerang Selatan</td>
              </tr>
              <tr>
                <th scope="row">2014 – 2017</th>
                <td colspan="2">SMAN 7 Kota Tangerang Selatan (Jurusan IPA)</td>
              </tr>
              <tr>
                <th scope="row">2018 – 2022</th>
                <td colspan="2">
                  Universitas Gunadarma (Jurusan Teknik Informatika)
                </td>
              </tr>
            </tbody>
          </table>
          <hr />
          <h6 className="text-center">Pengalaman Organisasi</h6>
          <table class="table table-dark table-striped table-sm table-hover">
            <thead>
              <tr>
                <th scope="col">Tahun</th>
                <th scope="col">Anggota</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">2014 – 2017</th>
                <td>Paskibra Sekolah di SMAN 7 Kota Tangerang Selatan</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <h6 className="text-center">Pengalaman Kerja</h6>
          <table class="table table-dark table-striped table-sm table-hover">
            <thead>
              <tr>
                <th scope="col">Tahun</th>
                <th scope="col">Sebagai</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">2019 – 2022</th>
                <td>
                  Asisten, Tutor & Penanggung Jawab Kursus Tingkat Fundamental,
                  Beginner & Intermediate di LePKom Universitas Gunadarma
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default About;
