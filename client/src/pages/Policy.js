import React from "react";
import Layout from "./../components/Layout/Layout.js";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy.jpg"
            alt="contactus"
            style={
              { width: "90%", height:"50%"}
          }
          />
        </div>
        <div className="col-md-4">
          <p>Data Collection: We may collect personal information such as name, email address, and other relevant details when you voluntarily provide it to us through our website.</p>
          <p>Data Usage: We may use the personal information collected for various purposes, including but not limited to processing orders, responding to inquiries, improving our services, and sending promotional materials.</p>
          <p>Data Sharing: We may share your personal information with trusted third-party service providers who assist us in operating our website, conducting our business, or providing services to you. However, we do not sell, trade, or rent your personal information to third parties for marketing purposes without your explicit consent.</p>
          <p>Data Security: We take appropriate measures to protect the confidentiality and integrity of your personal information. However, please note that no method of data transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security</p>
          <p>Cookies and Tracking Technologies: Our website may use cookies and other tracking technologies to enhance your browsing experience, analyze usage patterns, and personalize content. You have the option to disable cookies in your browser settings, but this may affect the functionality of our website.</p>
          <p>Third-Party Links: Our website may contain links to third-party websites or services that are not under our control. We are not responsible for the privacy practices or content of such websites. We recommend reviewing the privacy policies of those third-party websites before providing any personal information.</p>
          </div>
      </div>
    </Layout>
  );
};

export default Policy;