
import React, { useState  , useEffect} from "react";


export const Context = React.createContext();

export const ContextProvider = ({ children }) => {

  
    const [theme, setTheme] = useState(localStorage.getItem('light') );
    const [themeInvText, setThemeInvText] = useState(localStorage.getItem('dark-text') );
    const [themeInvBorder, setThemeInvBorder] = useState(localStorage.getItem('dark-border') );
    const [solution, setSolution] = useState(null)
    const [type, setType] = useState(null)
    const [definition, setDefinition] = useState(null)
    const [letters, setLetters] = useState(null)


    useEffect(() => {
        fetch('https://plant-fluffy-basilisk.glitch.me/solutions')
          .then(res => res.json())
            .then(json => {
              const randomSolution = json[Math.floor(Math.random()*json.length)]
              setSolution(randomSolution.word.toLowerCase())
              setType(randomSolution.type.toLowerCase())
              setDefinition(randomSolution.definition.toLowerCase())
            })
            fetch('https://plant-fluffy-basilisk.glitch.me/letters')
            .then(res => res.json())
            .then(json => {
              setLetters(json)
            })

      }, [setSolution])


 
      
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
        <Context.Provider value={{ theme, setTheme ,themeInvText, setThemeInvText,toggleTheme ,solution ,themeInvBorder,type,definition,letters}}>
            {children}
        </Context.Provider>
    );
   
};





