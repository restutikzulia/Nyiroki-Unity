import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import Profile from "../assets/user.png";

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-logo">Logo</div>
      <ul className="nav-links">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="">Transaksi</Link>
        </li>
        <li>
          <Link to="/anggarankosong">Anggaran</Link>
        </li>
        <li>
          <Link to="">Laporan</Link>
        </li>
      </ul>
      <div className="nav-profile">
        <Link to="/ubahprofil">
          <img src={Profile} alt="porifle" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
