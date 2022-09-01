
import React, { useState  , useEffect} from "react";


export const Context = React.createContext();

export const ContextProvider = ({ children }) => {

  
    const [theme, setTheme] = useState(localStorage.getItem('light') );
    const [themeInvText, setThemeInvText] = useState(localStorage.getItem('dark-text') );
    const [themeInvBorder, setThemeInvBorder] = useState(localStorage.getItem('dark-border') );
    const [solution, setSolution] = useState(null)
    const [type, setType] = useState(null)
    const [definition, setDefinition] = useState(null)


    useEffect(() => {
        fetch('http://localhost:3001/solutions')
          .then(res => res.json())
          .then(json => {
            // random int between 0 & 14
            const randomSolution = json[Math.floor(Math.random()*json.length)]
            setSolution(randomSolution.word.toLowerCase())
            setType(randomSolution.type.toLowerCase())
            setDefinition(randomSolution.definition.toLowerCase())
          })
      }, [setSolution])


 
      
        React.useEffect(() => {
          localStorage.setItem('light', theme);
        }, [theme,setSolution]);

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





