import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) =>{
  return(
    <>
      <section id="header" className="d-flex align-content-center">
        <div className="container-fluid nav-bg">
          <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-0 order-lg-2 d-flex justify-content-center flex-column">
              <h1>
                {props.title} <strong className="text-primary"> {props.title2} </strong>
              </h1>

              <h2 className="my-3">
                {props.title3}
              </h2>

              <div className="mt-3">
                <NavLink to={props.visit} className="btn-get-started btn btn-outline-primary rounded-pill">{props.btnName}</NavLink>
              </div>
            </div>

            <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 header-img">
              <img src={props.imgSrc} className="img-fluid animated" alt="brand"/>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;