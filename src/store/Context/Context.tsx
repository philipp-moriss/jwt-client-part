import Store from "../store";
import React, {createContext, useContext} from "react";

const store = new Store()

export const Context = createContext<StoreContext>({
    store,
})

export const useMyStore = () => {
    return useContext(Context)
}

export const MyStoreProvider : React.FC = ({children}) => {
    return <Context.Provider value={{store}}>{children}</Context.Provider>
}



interface StoreContext {
    store: Store
}
