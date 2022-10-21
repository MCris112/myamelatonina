import React from "react";

const Button = (props) => {
  var styles = "p-2 border block w-100 text-center ease-in duration-150 hover:bg-primary hover:text-white hover:border-primary ";

  switch (props.type) {
    case 'outline':
        styles += "border-accent text-accent hover:bg-primary "
      break;
    default:
        styles += "bg-accent border-accent text-primary";
      break;
  }

  if (props.tag == "button") {
    return (
      <button onClick={link} className={type}>
        {label}
      </button>
    );
  } else {
    return (
      <a to={props.link} className={styles}>
        {props.label}
      </a>
    );
  }
};

export default Button;
