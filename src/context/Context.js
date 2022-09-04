
import React, { useState  , useEffect} from "react";

import solutions from './db-easy'

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {

  
    const [theme, setTheme] = useState(localStorage.getItem('light') );
    const [themeInvText, setThemeInvText] = useState(localStorage.getItem('dark-text') );
    const [themeInvBorder, setThemeInvBorder] = useState(localStorage.getItem('dark-border') );
    const [solution, setSolution] = useState(null)
    const [type, setType] = useState(null)
    const [definition, setDefinition] = useState(null)



    useEffect(() => {
        // fetch('https://json-server-real-fake-wordle.herokuapp.com/solutions')
        // fetch('https://plant-fluffy-basilisk.glitch.me/solutions')
          // .then(res => res.json())
          //   .then(json => {
              const randomSolution = solutions[Math.floor(Math.random()*solutions.length)]
              setSolution(randomSolution.word.toLowerCase())
              setType(randomSolution.type.toLowerCase())
              setDefinition(randomSolution.definition.toLowerCase())
            // })
         
              
      }, [])


 
      
        React.useEffect(() => {
          localStorage.setItem('light', theme);
        }, [theme]);

        React.useEffect(() => {
          localStorage.setItem('dark-text', themeInvText);
        }, [themeInvText]);
        React.useEffect(() => {
          localStorage.setItem('dark-border', themeInvBorder);
        }, [themeInvBorder]);


      const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
        setThemeInvText(() => (theme === "light" ? "light-text" : "dark-text"));
        setThemeInvBorder(() => (theme === "light" ? "light-border" : "dark-border"));
      };


  
    return (
        <Context.Provider value={{ theme, setTheme ,themeInvText, setThemeInvText,toggleTheme ,solution ,themeInvBorder,type,definition}}>
            {children}
        </Context.Provider>
    );
   
};





