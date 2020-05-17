import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout title="I'm Sahil" description="Developer and Designer">
      <div className="row text-center pt-5 mt-5 mb-5 pb-5">
        <div className="container mt-5">
          <div className="title ">
            <h2 className="text-white ml-auto mr-auto display-4 mb-4">
              About Me
            </h2>
          </div>
          <p className="lead mt-2">
            I' am a Web Developer Designer with 1 year experience . I'm using
            HTML5, CSS3, bootstrap4, JavaScript, Jquery for frontend and for
            backend Nodejs, express Framework, PHP, PHP PDO, laravel Framework,
            Ajax, MongoDB, MySQL. I have done lot of project in my past
            experience with customer satisfaction , I'm providing front-end,
            backed services for web applications and also API services for web
            and mobile apps, with clean and fresh code. I am provide service
            according to the client requirement and also add some features if
            needed. The main goal of my services is to provide Responsive and
            Attractive design with strong back-end structure.
          </p>
        </div>
        <div className="container pt-5 mt-5 mb-5 pb-5">
          <div className="title">
            <h2 className="text-white ml-auto mr-auto display-4 mb-4">
              Skills
            </h2>
            <div className="row py-3">
              <div className="col-md-4 col-sm-4 mt-3">
                <i className="fab fa-html5 fa-7x"></i>
              </div>
              <div className="col-md-4 col-sm-4  mt-3">
                <i className="fab fa-css3-alt fa-7x"></i>
              </div>
              <div className="col-md-4 col-sm-4  mt-3">
                <i className="fab fa-js-square fa-7x"></i>
              </div>
              <div className="col-md-4 col-sm-4 mt-3">
                <i className="fab fa-bootstrap fa-7x"></i>
              </div>
              <div className="col-md-4 col-sm-4  mt-3">
                <i className="fab fa-php fa-7x"></i>
              </div>
              <div className="col-md-4 col-sm-4  mt-3">
                <i className="fab fa-java fa-7x"></i>
              </div>
              <div className="col-md-4 col-sm-4  mt-3">
                <i className="fab fa-node-js fa-7x"></i>
              </div>
              <div className="col-md-4 col-sm-4  mt-3">
                <i className="fab fa-laravel fa-7x"></i>
              </div>
              <div className="col-md-4 col-sm-4  mt-3">
                <i className="fab fa-react fa-7x"></i>
              </div>
              <div className="col-md-4 col-sm-4  mt-2">
                <img
                  src="./mysql.png"
                  alt="mysql"
                  width="165px"
                  className="text-white"
                />
              </div>
              <div className="col-md-4 col-sm-4  mt-3">
                <img
                  src="./mongodb.svg"
                  alt="mysql"
                  width="165px"
                  className="text-white"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-5 mt-5 mb-5 pb-5">
          <div className="title">
            <h2 className="text-white ml-auto mr-auto display-4 mb-4">
              Contact
            </h2>
          </div>
          <div className="row text-left">
            <div className="col-md-4">
              <h3>Social Links</h3>
              <ul className="social pt-4">
                <li className="list-item">
                  <a href="https://www.facebook.com/sahil110043">
                    <i className="fab fa-facebook-f fa-2x"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="far fa-envelope fa-2x"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Mohdsahil">
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/mohd-sahil-01768215a/">
                    <i className="fab fa-linkedin fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Contact Details</h3>
              <div className="pt-8">
                <p className="lead">
                  If you have any question and query that you want to know,
                  always welcome no metter you are a developer, a business men
                  or a student feel free to cantact here is my email
                </p>
                <p className="mail">
                  email:-{" "}
                  <a href="https://sahils110043@gmail.com">
                    sahils110043@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
