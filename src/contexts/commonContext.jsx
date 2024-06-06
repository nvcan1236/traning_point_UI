/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import { API } from "../configs/APIconfig";

const CommonContext = createContext();

function CommonProvider(props) {
  const [pointGroups, setPointGroups] = useState([]);
  const [faculties, setFaculties] = useState([]);

  const getFaculties = async () => {
    const res = await fetch(API.getAllFaculties, {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
      },
    });

    if (res.ok) {
      const data = await res.json();
      setFaculties(data);
    }
  };

  const getAllPointGroup = async () => {
    const res = await fetch(API.getAllPointGroup, {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
      },
    });

    if (res.ok) {
      const data = await res.json();
      setPointGroups(data);
    }
  };

  useEffect(() => {
    getAllPointGroup();
    getFaculties();
  }, []);

  const value = { faculties, pointGroups };

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
