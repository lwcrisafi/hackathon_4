import React from "react";
import './Mosaic.scss'

export default  function Mosaic() {
  const cells = 4;

  const generateMosaic = () => {
    const mosaic = [];
    for (let i = 0; i < cells; i++) {
      for (let j = 0; j < cells; j++) {
        const className = `cell d-${i + j}`;
        mosaic.push(<div className={className} key={`${i}-${j}`}></div>);
      }
    }
    return mosaic;
  };

  return <div className="mosaic-loader">{generateMosaic()}</div>;
}
