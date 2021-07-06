import { createContext, useState, useContext } from "react";

export interface IPersonDetails {
  person: {
    name: string;
    gender: string;
    height: string;
    mass: string;
    homeworld: {
      name: string;
      terrain: string;
      population: string;
    }
  }
  setPerson: Function;
}

export const personContextDefaultValue:any  = {
  person: {
    name: "",
    gender: "",
    height: "",
    mass: "",
    homeworld: {
      name: "",
      terrain: "",
      population: ""
    },
  },
  setPerson: (personDetails: any) => {}
}

const PersonDetailContext = createContext(personContextDefaultValue);

const usePersonDetailProvider = () => {
 
  const [personDetails ,setPersonDetails] = useState(personContextDefaultValue)
  const handleSetPersonDetails = (props: any) => {
    setPersonDetails({...personDetails ,person: props})
 }
 return {person: personDetails, setPerson: handleSetPersonDetails}
}
export const usePersonDetails = () => useContext(PersonDetailContext)

export const PersonDetailProvider = ({children}: any) => (
  <PersonDetailContext.Provider value={usePersonDetailProvider()}>
    {children}
  </PersonDetailContext.Provider>
)
