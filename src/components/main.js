
import ReactSwitch from "react-switch";
import Wordle from './Wordle'


import React, { useContext } from "react";
import { Context } from "../context/Context";





export default function Main() {

    const { theme, themeInvText,toggleTheme ,solution,type,definition } = useContext(Context);

  return (
    <div className={`${theme} main`} >
    <div className="switch">
        <label className={themeInvText}> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
      </div>
    <h1 className={themeInvText} >Real Fake Wordle </h1>
    <h2 className={themeInvText}>{type} , {definition}</h2>
    {solution && <Wordle solution={solution} />}
  </div>
  )
}
