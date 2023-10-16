import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const StyledLink = ({ href, children, style }) => {
  return (
    <Link href={href} style={{ textDecoration: "none", ...style }}>
      {children}
    </Link>
  );
};

const NavBar = () => {
  return (
    <div style={{ height: 80, width: "100%" }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#202020", height: 80 }}>
        <Toolbar
          style={{
            "font-family": "Poppins-Regular, Helvetica",
            height: "100%",
          }}
        >
          <div style={{ height: 54, width: 57, marginLeft: 100, flexGrow: 1 }}>
            <StyledLink
              href={"/"}
              style={{ color: "#f7f7f7", fontSize: "24px" }}
            >
              <img src="mackenzie.svg" alt="Mackenzie Logo" />
            </StyledLink>
          </div>
          <div style={{ marginRight: 100}}>
            <StyledLink
              href="./institutional"
              style={{ color: "#f7f7f7", fontSize: "16px", marginRight: 16 }}
            >
              Quem somos
            </StyledLink>
            <StyledLink
              href="/"
              style={{ color: "#f7f7f7", fontSize: "16px", marginRight: 16 }}
            >
              Lixo Eletrônico
            </StyledLink>
            <StyledLink
              href="/"
              style={{ color: "#f7f7f7", fontSize: "16px", marginRight: 16 }}
            >
              Pontos de coleta
            </StyledLink>
            <StyledLink
              href="/"
              style={{ color: "#f7f7f7", fontSize: "16px", marginRight: 16 }}
            >
              Projetos
            </StyledLink>
            <StyledLink
              href="/"
              style={{ color: "#f7f7f7", fontSize: "16px" }}
            >
              Contato
            </StyledLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
