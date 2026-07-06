import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo, resumeSection, greeting} from "../../portfolio"; // 👈 여기에 greeting을 추가했습니다.
import {Fade} from "react-reveal";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className={isDark ? "dark-mode heading" : "heading"}>
              {contactInfo.title}
            </h1>
            <p className={isDark ? "dark-mode subTitle" : "subTitle"}>
              {contactInfo.subtitle}
            </p>
            <div className={isDark ? "dark-mode contact-text-div" : "contact-text-div"}>
              {contactInfo.number && (
                <>
                  <a className="contact-detail" href={"tel:" + contactInfo.number}>
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={require("../../assets/lottie/contactMail.json")} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMail.svg")}
              />
            )}
          </div>
        </div>
        
        {/* 👇 Email banner at the bottom of the page */}
        {resumeSection.display && (
          <div className="resume-main-div">
            <div className="resume-header">
              <h1 className={isDark ? "dark-mode heading" : "heading"}>
                {resumeSection.title}
              </h1>
              <p className={isDark ? "dark-mode subTitle" : "subTitle"}>
                {resumeSection.subtitle}
              </p>
            </div>
            <div className="resume-content-div">
              {/* it will connect google drive and open in new tab */}
              <a
                className="btn-text"
                href={greeting.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="main-button">
                  View My Resume
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </Fade>
  );
}
