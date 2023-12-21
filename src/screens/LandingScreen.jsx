import React, { useState } from "react";
import "../styles/landingscreen.css";
import logo from "../assets/companylogo.svg";
// import Microsoft from "../Assets/microsoft.svg"
import SignInBatch1 from "../assets/signinbadge.svg";
import { Row, Col } from "antd";

import SignUp from "../components/SignUp";
import Login from "../components/Login";
import TwoFactorAuthentication from "../components/TwoFactorAuthentication";

const LandingScreen = () => {
  const [page, setPage] =  useState("signup")

  const switchHandler = () => {
    if(page === "signup"){
      setPage("login")
    }else if(page === "login"){
      setPage("signup")
    }
  };

  return (
    <div className="landing_main">
      <Row>
        <Col span={12} className="left_content">
          <br />

          <div className="landing_page_logo">
            <img src={logo} alt="Company_Logo" className="company_logo_img" />
          </div>
          <br />
          <br />

          <div className="landing_page_content">
            <h1 className="landing_page_title">Get Started Today</h1>
            <p className="discription_page">
              8081 is a desktop and mobile online Financial Application <br />
              for tardingCrypto with support of Automatic tools, <br />
              Machine Learning and Artificial Intelligence-fits any <br />
              kind of investors (bigginers or advance), no more trading <br />
              in the dark, connect to all major exchanges.
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>

          <div className="features_page_icons">
            <br />
            <br />
            <br />
            <Row >
              <Col span={10} className="left_icons">
                <Row className="item_container">
                  <Col span={9}>
                    <img src={SignInBatch1} alt="Trading_Image" />
                  </Col>
                  <Col span={15}>
                    <p>
                      <b>
                        {" "}
                        Trading <br />
                        Automation
                      </b>
                      <br /> 
                      Create automated trade rules
                    </p>
                  </Col>
                </Row>
              </Col>

              <Col span={10} className="right_icons">
                <Row className="item_container">
                  <Col span={9}>
                    <img src={SignInBatch1} alt="Trading_Image" />
                  </Col>

                  <Col span={15}>
                    <p>
                      <b>Fully Synced </b>
                      <br />
                      Connected to your phone, mail <br />
                      and social plateforms.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col span={10} className="left_icons">
                <Row className="item_container">
                  <Col span={9}>
                    <img src={SignInBatch1} alt="Trading_Image" />
                  </Col>

                  <Col span={15}>
                    <p>
                      <b> 24/7 Market Updates</b>
                      <br /> Get the latest stats and market news.
                    </p>
                  </Col>
                </Row>
              </Col>

              <Col span={10} className="right_icons">
                <Row className="item_container">
                  <Col span={9}>
                    <img src={SignInBatch1} alt="Trading_Image" />
                  </Col>

                  <Col span={15}>
                    <p>
                      <b>Fast and Reliable</b>
                      <br />
                      Top notch trading performance.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>

        <Col span={12}>
          <br />
          <div className="right_content">
            {
              (page === "signup" || page === "login") ?
              (
                <div>
                  <button className="main_custom_button" onClick={switchHandler}>
                    {page === "signup" ? "Log In" : "Sign Up"}
                  </button>
                  <br />
                </div>
              ) : null
            }

            {
              page === "signup" ? <SignUp setPage={setPage} /> :
              page === "login" ? <Login setPage={setPage} /> :
              page === "authenticate" ? <TwoFactorAuthentication setPage={setPage}/>: null
            }
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LandingScreen;
