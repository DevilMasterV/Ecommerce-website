import React from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
    <div className="row contactus ">
      <div className="col-md-6 ">
        <img
          src="/images/v.jpg"
          alt="contactus"
          style={{ width: "20%", height: "250px", alignItems: "center" }}
        />
      </div>
      <div className="col-md-4">
        <p className="text-justify mt-2">
        If transparency might strengthen your brand, your About Us page is a good opportunity to summarize your supply chain, how your business works, and relate that back to the mission that drives you.
This is often accomplished with an illustration that presents your business model in an easy-to-digest manner, like this one used by Taaluma Totes that explains how they source materials for their products and how donations help support the country of origin.


        </p>
      </div>
    </div>
  </Layout>
);
};

export default About;