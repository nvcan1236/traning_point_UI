import { API } from "../configs/APIconfig";

const fetchRegister = async (missionId) => {
  const res = await fetch(API.registerMission(missionId), {
    headers: {
      Authorization: localStorage.getItem("USER_TOKEN"),
    },
    method: "POST",
  });
  if (res.ok) {
    await res.json()
    console.log("Đăng ký thàng công");
    return res.ok
  }
};

const fetchReportMissing = async (missionId, description, files) => {
  const formData = new FormData();
  formData.append("description", description);
  Array.from(files).forEach((file) => formData.append("files", file));

  const res = await fetch(API.reportMissing(missionId), {
    headers: {
      Authorization: localStorage.getItem("USER_TOKEN"),
    },
    method: "POST",
    body: formData,
  });
  if (res.ok) {
    console.log("Báo cáo thành công");
    return res.okk;
  }
};

const fetchFaculties = async () => {
  const res = await fetch(API.getAllFaculties, {
    headers: {
      Authorization: localStorage.getItem("USER_TOKEN"),
    },
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  }
};

const fetchAllPointGroup = async () => {
  const res = await fetch(API.getAllPointGroup, {
    headers: {
      Authorization: localStorage.getItem("USER_TOKEN"),
    },
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  }
};

const fetchUserMission = async (isRegisted) => {
  const res = await fetch(
    `${API.userMission}${isRegisted ? "?isRegisted=true" : ""}`,
    {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
      },
    }
  );
  if (res.ok) {
    return await res.json();
  }
};

export {
  fetchRegister,
  fetchReportMissing,
  fetchFaculties,
  fetchAllPointGroup,
  fetchUserMission,
};
