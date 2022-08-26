import React from "react";
// import HighlightIcon from "@material-ui/icons/Highlight";
// import { faWindowMinimize } from "@fortawesome/free-solid-svg-icons";



function Header() {

  // function click() {
  //   history.replace("/")
  // }
  // const [isMousedOver, setMouseOver] = React.useState(false);
  // function handleMouseOver() {
  //   setMouseOver(true);
  // }

  // function handleMouseOut() {
  //   setMouseOver(false);
  // }
  return (
    <header>
      <h1>
        {/* <HighlightIcon /> */}
        Synthisha
        <a href="/Post" className="navyh neon"> 
                            <span className="voyla"></span>
                            <span className="voyla"></span>
                            <span className="voyla"></span>
                            <span className="voyla"></span> All Post </a>
        <a href="/MyPost" className="navyh neon"> 
        <span className="voyla"></span>
                            <span className="voyla"></span>
                            <span className="voyla"></span>
                            <span className="voyla"></span>
        My Post </a>
      </h1>
      <a href="/" className='neon Logout'>
                            <span className="voyla"></span>
                            <span className="voyla"></span>
                            <span className="voyla"></span>
                            <span className="voyla"></span>
      Log out</a>
    </header>
  );
}

export default Header;
