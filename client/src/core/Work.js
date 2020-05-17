import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <Layout title="Projects" description="Here is my some projects.">
      {/* <div className="projsection">
        <img src="./projects/sbddecoration.png" alt="" className="proj" />
        <img src="./projects/sbddecoration.png" alt="" className="proj" />
        <img src="./projects/sbddecoration.png" alt="" className="proj" />
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 pt-2 pb-2 ">
            <a href="#" className="proj">
              <img
                src="./projects/sbddecoration.png"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-md-6 pt-2 pb-2 ">
            <a href="#" className="proj">
              <img
                src="./projects/britishenglish.PNG"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-md-12 pt-2 pb-2  ">
            <a href="#" className="proj">
              <img
                src="./projects/dayaramschool.PNG"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-md-8 pt-2 pb-2   ">
            <a href="#" className="proj">
              <img
                src="./projects/kdtrading.PNG"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>

          <div className="col-md-4  pt-2 pb-2  ">
            <a href="#" className="proj">
              <img src="./projects/kosmon.PNG" alt="" className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Work;
