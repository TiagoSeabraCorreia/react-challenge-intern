import React from 'react';
import "./css.css";
const Gummie = (props) => {
  return (
    <div className="gummie">
      {props.item}
    </div>
  );
};

export default Gummie;