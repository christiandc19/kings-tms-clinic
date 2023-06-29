import React from "react";
import "./Topbar.css";
import { MdLocationPin } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';

const Topbar = () => {
  return (
    <div className="topbar" name="top">
      <div className="topbar-content container">
        <div className="address bar-box1 top-hide">
          <p><span><MdLocationPin />&nbsp;</span> 7454 Melrose Ave., Los Angeles CA 90046</p>
        </div>

        <div className="email bar-box2 top-hide">
          <p><span><FiMail />&nbsp;</span> info@kingstms.com</p>
        </div>

        <div className="number bar-box3">
          <p> <span><AiOutlinePhone />&nbsp;</span> +1 (323) 319-6219</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
