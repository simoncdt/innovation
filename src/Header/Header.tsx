import React from "react";

const Header: React.FC = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        backgroundColor: "transparent",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      {/* Logo */}
      <div>
        <img
          src="ex.png"
          alt="Logo"
          style={{
            height: "50px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Navigation */}
      <nav>
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            gap: "20px",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Living Room
            </a>
          </li>
          <li>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Kitchen
            </a>
          </li>
          <li>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Outdoors
            </a>
          </li>
          <li>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
