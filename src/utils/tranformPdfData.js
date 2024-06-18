const tranformPdfResultData = (results, studentName, studentId) => {
  const title = `KẾT QUẢ RÈN LUYỆN \nSinh viên: ${studentName} \n MSSV: ${studentId} `;
  const headers = ["Tên hoạt động", "Tên nhiệm vụ", "Điều", "Điểm"];
  const rows = [];
  results.forEach((pg) =>
    pg.listActivity.forEach((activity) =>
      activity.missionResultDTOList.forEach((mission) => {
        rows.push([
          activity.activityName,
          mission.missionName,
          pg.name,
          mission.point,
        ]);
      })
    )
  );
  return {
    title,
    headers,
    rows,
  };
};

const tranformPdfMisssingtData = (missings, studentName, studentId) => {
  const title = `KẾT QUẢ BÁO THIẾU \n Sinh viên: ${studentName} \n MSSV: ${studentId} `;
  const headers = [
    "Tên hoạt động",
    "Tên nhiệm vụ",
    "Điều",
    "Điểm",
    "Tình trạng",
  ];
  const rows = [];
  missings.forEach((missing) =>
    rows.push([
      missing.activityName,
      missing.missionName,
      missing.pointGroupName,
      missing.missionPoint,
      missing.status,
    ])
  );
  return {
    title,
    headers,
    rows,
  };
};

export { tranformPdfResultData, tranformPdfMisssingtData };
