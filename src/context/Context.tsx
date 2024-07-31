import { Children, createContext, useState } from "react";
 
type initialType = {
    open: Boolean,
    setOpen: React.Dispatch<React.SetStateAction<Boolean>>
}

const INITIA_STATE: initialType = {
    open: false,
    setOpen: ()=> {}
}

 const CreateContext = createContext<initialType>(INITIA_STATE)

const ContextProvide = ({children}:{children:React.ReactNode})=>{
   const [open, setOpen] = useState<Boolean>(false)
   return(
        <CreateContext.Provider value={{open, setOpen}}>
            {children}
        </CreateContext.Provider>
   )
}

export {ContextProvide, CreateContext}