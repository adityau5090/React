import {useAppStore} from "../store/appStore"

const Navbar = () => {
    const theme = useAppStore((state) => state.theme);
    const user = useAppStore((state) => state.user)
    const login = useAppStore((state) => state.login)
    const logout = useAppStore((state) => state.logout)
    const toggeTheme = useAppStore((state) => state.toggleTheme)
  return (
    <div>
      <span>Theme: {theme}</span>
      <button 
      onClick={toggeTheme}>
        Toggler
      </button>
      {user ? (
        <>
        <span>Hi, {user}</span>
        <button onClick={() => {login(user)}} className="bg-red-300">Login</button>
        <button onClick={logout}>Logout</button>
        </>
      ) : (
        <span>Guest</span>
      )}
    </div>
  )
}

export default Navbar
