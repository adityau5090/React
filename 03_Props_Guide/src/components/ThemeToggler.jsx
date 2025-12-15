
import { createContext, useContext, useState } from "react"
// import { div } from "three/tsl";

const ThemeContext = createContext();
// const AuthContext = createContext();

export function ThemeProvider({children}){
  const [theme, setTheme] = useState("light");
 
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }
  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark"
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
}

const ThemeToggleButton = () => {
  const {toggleTheme,isDark} = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="bg-blue-500 py-0.5 px-5 rounded-3xl "
    >{isDark ? "🌙" : "🌞"}</button>
  )
}

const ThemeCard = ({title, children}) => {
  const {isDark} = useTheme();
  return (
    <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
       <h3>{title}</h3>
       <div>{children}</div>
    </div>
  )
}

const ThemeToggler = () => {
  return (
    <div>
      ThemeToggler
      <ThemeToggleButton/>
    </div>
  )
}

export default ThemeToggler
