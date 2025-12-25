export const metadata = {
    title: {
        default: "Default Auth",
        template: "%s | Template Auth", 
        //here %s takes metadata from pages and replace it with %s if presetnt otherwise if no metadata present in pades then it shows default metadata 
        absolute: "",
    }
}

const AuthLayout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default AuthLayout