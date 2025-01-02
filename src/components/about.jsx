import React from "react";

export const About = (props) => {
  const icons = [
    "fa fa-check",
    "fa fa-clock-o",
    "fa fa-money"
  ]
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/bathroom.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>LA NOSTRA MISSIONE</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>PERCHE' SCEGLIERCI</h3> 
              {props.data
                ? props.data.Why.map((d, i) => (
                  <div id="features" className="text-center">
                    <div className="container" style={{backgroundColor: 'white', flexDirection: 'row', display: 'flex', marginLeft: -40}}>
                      <div key={d} className="col-xs-2 col-md-6" style={{flexDirection: 'row', display: 'flex', }}>
                        {" "}
                        <i className={icons[i]}></i>
                        <div style={{ textAlign: 'end', width: '80%'}}>
                          <h3 style={{textAlign: 'flex-end'}}>{d}</h3>
                          <p>{props.data.Why2[i]}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))
                : "loading"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
