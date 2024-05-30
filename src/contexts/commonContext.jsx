/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";
import { API } from "../configs/APIconfig";

const CommonContext = createContext();

function CommonProvider(props) {
  // const [poinrGroups, setPointGroups] = useState([]);
  // const [faculty, setfaculty] = useState([]);

  const getFaculties = async () => {
    const res = await fetch(API.getAllFaculties, {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
      },
    });

    if(res.ok) {
      const data = await res.json()
      return data
    }
  };

  const getAllPointGroup = async () => {
    const res = await fetch(API.getAllPointGroup, {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
      },
    });

    if(res.ok) {
      const data = await res.json()
      return data;
    }
  };

  const faculty = getFaculties()
  const poinrGroups = getAllPointGroup()

  const value = {faculty, poinrGroups};

  return (
    <CommonContext.Provider value={value} {...props}></CommonContext.Provider>
  );
}
function useCommon() {
  const context = useContext(CommonContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

export { CommonProvider, useCommon };
