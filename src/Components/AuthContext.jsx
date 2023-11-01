import { createContext, useState } from "react";
import DisplayData from "./DisplayData";

export const AppContext = createContext();

const AuthContext = ({ children }) => {

    const initial = {
        fullName: "",
        collegeName: "",
        fullAddress: "",
        // id:1,
    }

    const [formList, setFormList] = useState([initial])
    const [show, setShow] = useState(null)
    const [clicked, setClicked] = useState(false)
    const [goBack, setGoBack] = useState(false)
    return (
        <AppContext.Provider value={{ clicked, setClicked, formList, setFormList, show, setShow, initial,goBack, setGoBack}}>
            {children}
        </AppContext.Provider>
    )
}

export default AuthContext