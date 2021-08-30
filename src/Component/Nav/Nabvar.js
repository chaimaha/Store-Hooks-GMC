import React from "react";
import Add from "../Add/Add";
import "./Navbar.css";

const Nabvar = ({ handleAdd }) => {
  return (
    <div>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Favicon */}
        <link
          rel="shortcut icon"
          href="./images/favicon.ico"
          type="image/x-icon"
        />
        {/* Box icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />
        {/* Custom StyleSheet */}
        <link rel="stylesheet" href="styles.css" />
        <title>Code_chaima_rezgui- Ecommerce Website</title>
        {/* Header */}
        <header id="home" className="header">
          {/* Navigation */}
          <nav className="nav">
            <div className="navigation container"></div>
          </nav>
          {/* Hero */}
          <img src="/assets/banner.png" alt="" className="hero-img" />
          <div className="hero-content">
            <h2>
              <span className="discount">70% </span> SALE OFF
            </h2>
            <h1>
              <span>Summer Vibes</span>
              <span>chaima's shop</span>
            </h1>
            <a className="btn" href="">
              shop now
            </a>
            <Add className="btn" handleAdd={handleAdd}></Add>
          </div>
        </header>
        {/* Main */}
        <main>
          <section className="advert section">
            <div className="advert-center container">
              <div className="advert-box">
                <div className="dotted">
                  <div className="content">
                    <h2>
                      Girls <br />
                      Clothing
                    </h2>
                    <h4>Worlds Best Brands</h4>
                  </div>
                </div>
                <img src="/assets/advert3.png" alt="" />
              </div>
              <div className="advert-box">
                <div className="dotted">
                  <div className="content">
                    <h2>
                      Summer <br />
                      Clothing
                    </h2>
                    <h4>Worlds Best Brands</h4>
                  </div>
                </div>
                <img src="/assets/advert1.png" alt="" />
              </div>
              <div className="advert-box">
                <div className="dotted">
                  <div className="content">
                    <h2>
                      Boys <br />
                      Clothing
                    </h2>
                    <h4>Worlds Best Brands</h4>
                  </div>
                </div>
                <img src="/assets/advert2.png" alt="" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Nabvar;
