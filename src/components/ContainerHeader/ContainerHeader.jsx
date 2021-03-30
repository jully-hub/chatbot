import React from "react";

import "../ContainerHeader/ContainerHeader.css";
import { Link} from 'react-router-dom';
export default function ContainerHeader() {
  return (
    <div className="Container-jumbotron red">
      <h1 className="classname">ChatBot</h1>
      <div className="text_container">
        <p>Nossos bots tiram suas dúvidas com perguntas rápidas e resumida </p>
        <sectio className="buttons-group">
          <Link to="/Meetbot">

          <button className="font">CONHECER</button>
          </Link>
          <Link to="/Dashboard">
            <button className="font2">CONVERSAR</button>
          </Link>
        </sectio>
      </div>
      <small>v. 0.0.1</small>
    </div>
  );
}
