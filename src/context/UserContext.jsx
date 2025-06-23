import React, { createContext ,useState} from 'react'
export const data=createContext();

function UserContext({children}) {
const [itemlist,setItemlist]=useState([]);
const item={
    itemlist,
    setItemlist
}
  return (
    <div>
        <data.Provider value={item}>
            {children}
        </data.Provider>
    </div>
  )
}

export default UserContext;