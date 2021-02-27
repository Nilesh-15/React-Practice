import React from 'react';
import Card from './Card';
import Sdata from './SData';

const Service = () =>{
  console.log(Sdata);
  return(
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="text-center">
            <h1>Our Service</h1>
              <div className="row gy-4">
                 {
                      Sdata.map((value,index) =>{
                        return <Card 
                          imgSrc={value.imgSrc}
                          title={value.title}
                          key={index}
                          id={index}
                        />
                      })
                    }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;