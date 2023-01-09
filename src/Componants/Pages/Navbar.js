import React from "react";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { CgGym } from "react-icons/cg";
//import './Navbar.css';

function Navbar() {
  return (
    <>
      <section>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success ">
          <div className="container-fluid ">
            <a className="navbar-brand" href="/home">
              <CgGym /> Fittness Gym
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to="/home">
                    <ImHome />{" "}
                    <span className="visually-hidden">(current)</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <a href="/Users">
                    <Link to="/about" className="nav-link active">
                      About
                    </Link>
                    <span className="visually-hidden">(current)</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a href="/Users">
                    <Link to="/registration" className="nav-link active">
                      Registration
                    </Link>
                    <span className="visually-hidden">(current)</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a href="/Users">
                    <Link to="/training" className="nav-link active">
                      Training
                    </Link>
                    <span className="visually-hidden">(current)</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a href="/Users">
                    <Link to="/pricing" className="nav-link active">
                      Pricing
                    </Link>
                    <span className="visually-hidden">(current)</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a href="/Users">
                    <Link to="/program" className="nav-link active">
                      Program
                    </Link>
                    <span className="visually-hidden">(current)</span>
                  </a>
                </li>
              </ul>

              <form className="d-flex">
                {/* <input
                    className="form-control me-sm-2"
                    type="search"
                    placeholder="Search"
                  /> */}
                <Link to="/registration">
                  
                  <button
                    className="btn btn-secondary my-2 my-sm-0 mx-2"
                    type="submit"
                  >
                    
                    Join us
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;

// import React from 'react'
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//   <section>
//   <nav className="navbar navbar-expand-lg navbar-dark bg-success ">
//   <div className="container-fluid ">
//     <a className="navbar-brand" href="/#">Profile.com</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarColor01">
//       <ul className="navbar-nav me-auto">
//         <li className="nav-item">
//           <Link className="nav-link active" to="/">Home
//             <span className="visually-hidden">(current)</span>
//           </Link>
//         </li>
//         <li className="nav-item">
//         <a className="nav-link active" href="/Users">User Details
//           <span className="visually-hidden">(current)</span>
//         </a>
//       </li>

//       </ul>
//       <form className="d-flex">
//         <input className="form-control me-sm-2" type="search" placeholder="Search"/>
//         <button className="btn btn-secondary my-2 my-sm-0 mx-2" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//   </section>
//   )
// }

// export default Navbar;
//*
