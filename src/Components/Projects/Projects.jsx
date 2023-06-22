import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://sagargulia.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1648711219501%2FFvOwRRVml.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
                  alt="Nordstrom"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Nordstrom</h2>
              <p>
                Clone of the international Online Shopping Store. We have tried to build the perfect clone of the website.. It's a team project completed executed in 5 days.
              </p>
              <div>
                <SiHtml5 />
                <IoLogoJavascript />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://nordstormunit4.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/thesagargulia/Nordstorm-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://github.com/thesagargulia/CloneUrbanOutfitters/raw/main/images/img3.png"
                  alt="
                  CloneUrbanOutfitters"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>CloneUrbanOutfitters</h2>
              <p>
              Urban Outfitters is a lifestyle related retailer which specializes in selling apparel, clothing accessories and apartment products. It primarily targets teens and young adults who are interested in hipster subculture and alternative fashion.
              </p>
              <div>
                <IoLogoJavascript />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://clone-urban-outfitters.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/thesagargulia/CloneUrbanOutfitters"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://news-cdn.softpedia.com/images/news2/Dropbox-2-9-Enters-Development-with-Streaming-Sync-Feature-442773-2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Backend API for Drive / DropBox Clone </h2>
              <p>
                Backend API for a google drive like app built using NodeJS, Express, Mongoose, MongoDB Atlas and AWS S3 for storage. A solo project. CRUD operations for users, files and folders.
              </p>
              <div>
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://drive-system.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    URL for the API
                  </span>
                </a>
                <a
                  href="https://github.com/imbickydutta/file-system-backend"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/1bsxCjF/Screenshot-349.png"
                  alt="Tic-tak-toe"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Mcdonald</h2>
              <p>
                Mini project of Mcdonald food app built. Features : Button for Ordering the food, History of all the food ordered.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://tictactoe-bicky.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/imbickydutta/tictactoe/tree/master"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/96018330/146671692-ef54a404-e400-48fc-8163-e130da0c44d2.png"
                  alt="Practo"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Practo Clone</h2>
              <p>
              Practo is an E-commerce web application for online Buying Medicines and Consult to Doctor and Book Appointment.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://practo-clone-project.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/thesagargulia/Practo-Clone-Project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
