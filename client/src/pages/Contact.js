import React from 'react';
import Layout from '../components/Layout/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
    return (
<Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contact.jpg"
            alt="contactus"
            style={{ width: "100%" ,height: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any Query about the Product contact us 24X7 Service available
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@VSgadgets.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 8610374256
          </p>
          <p className="mt-3">
            <BiSupport /> : 0416-2252345 (toll free)
          </p>
        </div>
      </div>
    </Layout>
    );
};

export default Contact;