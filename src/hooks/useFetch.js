import { API } from "../configs/APIconfig";

const fetchRegister = async (missionId) => {
  const res = await fetch(API.registerMission(missionId), {
    headers: {
      Authorization: localStorage.getItem("USER_TOKEN"),
    },
    method: "POST",
  });
  if (res.ok) {
    await res.json();
    console.log("Đăng ký thàng công");
    return res.ok;
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
    return res.ok;
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

const fetchGetFacultyClasses = async (facultyId) => {
  try {
    const res = await fetch(API.getFacultyClass(facultyId), {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("Something went wrong!!");
    }
    const data = await res.json();
    return data;
  } catch (ex) {
    console.log(ex);
  }
};

const fetchDetailFaculty = async () => {
  const res = await fetch(API.getFacultyByAssistant, {
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

const fetchActivities = async (keyword) => {
  try {
    const res = await fetch(API.getAllActivities(keyword), {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
      },
    });

    if (!res.ok) {
      throw new Error("Something went wrong!!!");
    }
    const data = await res.json();
    return data;
  } catch (ex) {
    console.log(ex);
  }
};

const fetchDetailActivity = async (activityId) => {
  try {
    const res = await fetch(API.getDetailActivity(activityId), {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
      },
    });

    if (!res.ok) {
      throw new Error("Something went wrong!!!");
    }
    const data = await res.json();
    return data;
  } catch (ex) {
    console.log(ex);
  }
};

const fetchAddActivity = async (bodyData) => {
  try {
    const res = await fetch(API.addActivity(bodyData.pointGroup), {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
      method: "POST",
    });

    if (!res.ok) {
      throw new Error("Something went wrong!!!");
    }
    const data = await res.json();
    return data;
  } catch (ex) {
    console.log(ex);
  }
};

const fetchUpdateActivity = async (bodyData, activityId) => {
  try {
    const res = await fetch(API.updateActivity(activityId), {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
      method: "PUT",
    });

    if (!res.ok) {
      throw new Error("Something went wrong!!!");
    }
    console.info(res.status);
    alert("Lưu thành công");
  } catch (ex) {
    console.log(ex);
  }
};

const fetchAddMission = async (bodyData, activityId) => {
  try {
    const res = await fetch(API.addMission(activityId), {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
      method: "POST",
    });

    if (!res.ok) {
      throw new Error("Something went wrong!!!");
    }
    const data = await res.json();
    return data;
  } catch (ex) {
    console.log(ex);
  }
};

const fetchUpdateMission = async (bodyData, missionId) => {
  try {
    const res = await fetch(API.updateMission(missionId), {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
      method: "PUT",
    });

    if (!res.ok) {
      throw new Error("Something went wrong!!!");
    }
    const data = await res.json();
    return data;
  } catch (ex) {
    console.log(ex);
  }
};

const fetchPosts = async () => {
  try {
    const res = await fetch(API["getPost"], {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
      },
    });
    if (!res.ok) {
      throw new Error("Something went wrong!!");
    }
    const data = await res.json();
    return data;
  } catch (ex) {
    console.log(ex);
  }
};

const fetchAddPost = async (post) => {
  try {
    const formData = new FormData();
    formData.append("content", post.content);
    formData.append("activity", post.activity);
    Array.from(post.images).forEach((image) =>
      formData.append("images", image)
    );
    console.log(formData.images);
    const res = await fetch(API.getPost, {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
      },
      method: "POST",
      body: formData,
    });
    if (!res.ok) {
      throw new Error("Something went wrong!!");
    }
    const data = await res.json();
    return data;
  } catch (ex) {
    console.log(ex);
  }
};

const fetchDetailPost = async (postId) => {
  try {
    const res = await fetch(API.detailPost(postId), {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
      },
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("Something went wrong!!");
    }
    const data = await res.json();
    return data;
  } catch (ex) {
    console.log(ex);
  }
};

const fetchUpdatePost = async (post, postId) => {
  try {
    // const formData = new FormData();
    // formData.append("content", post.content)
    // formData.append("activity", post.activity)
    // Array.from(post.images).forEach(image => formData.append("images", image))
    const res = await fetch(API.detailPost(postId), {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(post),
    });
    if (!res.ok) {
      throw new Error("Something went wrong!!");
    }
    const data = await res.json();
    return data;
  } catch (ex) {
    console.log(ex);
  }
};

const fetchDeleteActivity = async (activityId) => {
  try {
    const res = await fetch(API.deletelActivity(activityId), {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
      },
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Something went wrong!!");
    }
    const data = await res.json();
    return data;
  } catch (ex) {
    console.log(ex);
  }
};

const fetchDeleteMission = async (missionId) => {
  try {
    const res = await fetch(API.deleteMission(missionId), {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
      },
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Something went wrong!!");
    }
    const data = await res.json();
    return data;
  } catch (ex) {
    console.log(ex);
  }
};

const fetchDeletePost = async (postId) => {
  try {
    const res = await fetch(API.deletePost(postId), {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
      },
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Something went wrong!!");
    }
    const data = await res.json();
    return data;
  } catch (ex) {
    console.log(ex);
  }
};

const fetchGetMissingReportByFaculty = async (facultyId) => {
  try {
    const res = await fetch(API.getMissingReport(facultyId), {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
      },
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("Something went wrong!!");
    }
    const data = await res.json();
    return data;
  } catch (ex) {
    console.log(ex);
  }
};

const fetchGetDetailMissingReport = async (missingReportId) => {
  try {
    const res = await fetch(API.getDetailMissingReport(missingReportId), {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
      },
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("Something went wrong!!");
    }
    const data = await res.json();
    return data;
  } catch (ex) {
    console.log(ex);
  }
};

const fetchUpdateStatusMissingReport = async (missingReportId, bodyData) => {
  try {
    const res = await fetch(API.getDetailMissingReport(missingReportId), {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(bodyData),
    });
    if (!res.ok) {
      throw new Error("Something went wrong!!");
    }
    const data = await res.json();
    return data;
  } catch (ex) {
    console.log(ex);
  }
};

const fetchGetMissingReportByUserId = async (userId, periodId) => {
  try {
    const res = await fetch(API.getMissingReportById(userId, periodId), {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
      },
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("Something went wrong!!");
    }
    const data = await res.json();
    return data;
  } catch (ex) {
    console.log(ex);
  }
};

const fetchGetStudentByStudentId = async (studentId) => {
  try {
    const res = await fetch(API.getStudentByStudentId(studentId), {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
      },
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("Something went wrong!!");
    }
    const data = await res.json();
    return data;
  } catch (ex) {
    console.log(ex);
    return false;
  }
};

const fetchGetResultByUserId = async (userId) => {
  try {
    const res = await fetch(API.getResultById(userId), {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
      },
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("Something went wrong!!");
    }
    const data = await res.json();
    return data;
  } catch (ex) {
    console.log(ex);
  }
};

const fetchStatsByRank = async () => {
  const res = await fetch(API.statsByRank, {
    headers: {
      Authorization: localStorage.getItem("USER_TOKEN"),
    },
  });

  if (res.ok) {
    const data = res.json();
    return data;
  }
};

const fetchStatsByFaculty = async () => {
  const res = await fetch(API.statsByFaculty, {
    headers: {
      Authorization: localStorage.getItem("USER_TOKEN"),
    },
  });

  if (res.ok) {
    const data = res.json();
    return data;
  }
};

const fetchGeneratePdf = async (bodyData) => {
  const res = await fetch(API.generatePdf, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
    method: "POST",
    responseType: "blob",
  });

  if (res.ok) {
    const data = await res.blob(); // Nhận dữ liệu dưới dạng blob
    return data;
  }
};

const fetchUploadActivity = async (activityId, file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(API.uploadActivity(activityId), {
    headers: {
      Authorization: localStorage.getItem("USER_TOKEN"),
    },
    method: "POST",
    body: formData,
  });
  if (res.ok) {
    console.log("Nạp danh sách thành công");
    return res.ok;
  }
};

const fetchGetAssistant = async () => {
  const res = await fetch(API.getAllAssistant, {
    headers: {
      Authorization: localStorage.getItem("USER_TOKEN"),
    },
    method: "GET",
  });
  if (res.ok) {
    const data = res.json();
    return data;
  }
}

export {
  fetchRegister,
  fetchReportMissing,
  fetchFaculties,
  fetchAllPointGroup,
  fetchUserMission,
  fetchActivities,
  fetchDetailActivity,
  fetchAddActivity,
  fetchUpdateActivity,
  fetchAddMission,
  fetchUpdateMission,
  fetchPosts,
  fetchAddPost,
  fetchDetailPost,
  fetchUpdatePost,
  fetchGetMissingReportByFaculty,
  fetchGetMissingReportByUserId,
  fetchGetResultByUserId,
  fetchGetDetailMissingReport,
  fetchUpdateStatusMissingReport,
  fetchDeleteActivity,
  fetchDeleteMission,
  fetchDeletePost,
  fetchGetStudentByStudentId,
  fetchDetailFaculty,
  fetchStatsByRank,
  fetchStatsByFaculty,
  fetchGeneratePdf,
  fetchUploadActivity,
  fetchGetFacultyClasses,
  fetchGetAssistant
};
