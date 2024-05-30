import { fetchAllPointGroup, fetchUserMission } from "../hooks/useFetch";

const getChartData = async () => {
  const pointGroups = await fetchAllPointGroup();
  let data = await fetchUserMission(true);
  const initialValue = [["Tất cả", 0, 0, 100]];
  pointGroups.forEach((pg) => {
    initialValue.push([pg.name, 0, 0, pg.maxPoint]);
  });

  const result = data.reduce((acc, current) => {
    acc[0][1] += current.mission.point;
    if (current.isCompleted) {
      acc[0][2] += current.mission.point;
    }

    pointGroups.forEach((pg) => {
      if (current.mission.activity.pointGroupId === pg.id) {
        acc[pg.id][1] += current.mission.point;
        if (current.isCompleted) {
          acc[pg.id][2] += current.mission.point;
        }
      }
    });
    return acc;
  }, initialValue);
  return result;
};

// label - điểm đã đk - hd đã đki - điểm đã xác nhận - hd đã xác nhân - điểm tối đa
const getStatsReport = async () => {
  const pointGroups = await fetchAllPointGroup();
  let data = await fetchUserMission(true);
  const initialValue = [["Tất cả", 0, 0, 0, 0, 100]];
  pointGroups.forEach((pg) => {
    initialValue.push([pg.name, 0, 0,0, 0, pg.maxPoint]);
  });

  const result = data.reduce((acc, current) => {
    acc[0][1] += current.mission.point;
    acc[0][2] ++;
    if (current.isCompleted) {
      acc[0][3] += current.mission.point;
      acc[0][4] ++;
    }

    pointGroups.forEach((pg) => {
      if (current.mission.activity.pointGroupId === pg.id) {
        acc[pg.id][1] += current.mission.point;
        acc[pg.id][2] ++;
        if (current.isCompleted) {
          acc[pg.id][3] += current.mission.point;
          acc[pg.id][4] ++;
        }
      }
    });
    return acc;
  }, initialValue);
  return result;
}

export { getChartData, getStatsReport };
