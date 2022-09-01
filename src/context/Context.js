
import React, { useState  , useEffect} from "react";


export const Context = React.createContext();

export const ContextProvider = ({ children }) => {

  
    const [theme, setTheme] = useState(localStorage.getItem('dark') );
    const [themeInvText, setThemeInvText] = useState(localStorage.getItem('light-text') );
    const [themeInvBorder, setThemeInvBorder] = useState(localStorage.getItem('light-border') );
    const [solution, setSolution] = useState(null)


    useEffect(() => {
        fetch('http://localhost:3001/solutions')
          .then(res => res.json())
          .then(json => {
            // random int between 0 & 14
            const randomSolution = json[Math.floor(Math.random()*json.length)]
            setSolution(randomSolution.word.toLowerCase())
          })
      }, [setSolution])


 
      
        React.useEffect(() => {
          localStorage.setItem('dark', theme);
        }, [theme]);

        React.useEffect(() => {
          localStorage.setItem('light-text', themeInvText);
        }, [theme]);
        React.useEffect(() => {
          localStorage.setItem('light-border', themeInvBorder);
        }, [theme]);


      const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
        setThemeInvText(() => (theme === "light" ? "light-text" : "dark-text"));
        setThemeInvBorder(() => (theme === "light" ? "light-border" : "dark-border"));
      };


  
    return (
        <Context.Provider value={{ theme, setTheme ,themeInvText, setThemeInvText,toggleTheme ,solution ,themeInvBorder}}>
            {children}
        </Context.Provider>
    );
   
};





