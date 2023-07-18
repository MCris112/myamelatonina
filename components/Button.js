import { useRouter } from 'next/router'

const Button = (props) => {
  let router = useRouter();
  var styles = "flex items-center justify-center cursor-pointer p-2 border block w-100 text-center ease-in duration-150 hover:bg-primary hover:text-white hover:border-primary ";

  const handleClick = (e, href) => {
    e.preventDefault()

    if(href)
    router.push(href)
  }

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
      <>
      <button onClick={link} className={type}>
        {label}
      </button>
      </>
    );
  } else {
    return (
      <>
      <a href={props.link} className={styles} onClick={(e) => {handleClick(e, props.link)}}>
        {props.icon ? <div className="mr-1 flex"><box-icon type='logo' name={props.icon }></box-icon></div> : null}
        {props.label}
      </a>
      </>
    );
  }
};

export default Button;
