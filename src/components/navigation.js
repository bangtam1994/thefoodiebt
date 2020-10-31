import React from "react";
import { Link } from "gatsby";

export default (props) => (
  <nav className="navigation">
    <Link to="/aboutme">À propos</Link>

    <Link to="/contact">Contact</Link>
  </nav>
);
