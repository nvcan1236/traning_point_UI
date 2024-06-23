import {
  IoCheckmarkDoneSharp,
  IoClipboardOutline,
  IoTimeOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import Heading from "../components/layout/Heading";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import { Fragment, useEffect, useState } from "react";
import { fetchAllPointGroup, fetchUserMission } from "../hooks/useFetch";
import Loading from "../components/layout/Loading";
import { getStatsReport } from "../utils/statsUtils";

export default function DetailResult() {
  const [missions, setMissions] = useState();
  const [pointGroup, setPointGroups] = useState();
  const [report, setReport] = useState();

  const getPointGroups = async () => {
    const data = await fetchAllPointGroup();
    setPointGroups(data);
  };

  const gethActivities = async () => {
    const isRegisted = true;
    const data = await fetchUserMission(isRegisted);
    setMissions(data);
  };

  const getReport = async () => {
    const data = await getStatsReport();
    let total = 0;
    for (let i = 1; i <= 4; i++) {
      if (data[i][1] <= data[i][5]) {
        total += data[i][1];
      } else {
        total += data[1][5];
      }
    }
    const reportData = [
      {
        value: total,
        label: "Tổng điểm",
        icon: <IoTrophyOutline />,
      },
      {
        value: data[0][2],
        label: "Số hoạt động đăng ký",
        icon: <IoClipboardOutline />,
      },
      {
        value: data[0][4],
        label: "Số hoạt động đã xác nhận",
        icon: <IoCheckmarkDoneSharp />,
      },
      {
        value: data[0][2] - data[0][4],
        label: "Số điểm chờ xác nhận",
        icon: <IoTimeOutline />,
      },
    ];
    setReport(reportData);
  };

  useEffect(() => {
    gethActivities();
    getPointGroups();
    getReport();
  }, []);
  return (
    <div>
      <Heading>CHI TIẾT KẾT QUẢ RÈN LUYỆN</Heading>
      <div className="mt-8 flex flex-wrap justify-between gap-4">
        {report &&
          report.map((data) => (
            <div
              className="flex p-4 gap-4 bg-blue-50 flex-1 min-w-[200px]  rounded-xl items-center border border-tintBlue"
              key={data.label}
            >
              <div className="w-12 h-12 rounded-lg bg-tintBlue text-mainBlue text-lg flex items-center justify-center ">
                {data.icon}
              </div>
              <div>
                <p className="text-sm text-slate-500 b">{data.label}</p>
                <span className="text-3xl font-semibold text-mainBlue">
                  {data.value}
                </span>
              </div>
            </div>
          ))}
      </div>

      {(!pointGroup || pointGroup.length === 0) && (
        <Loading className={"my-20"} radius={30} />
      )}

      {pointGroup &&
        pointGroup.map((pg) => (
          <div className="mt-8" key={pg.id}>
            <div>
              <h3 className="font-semibold">Điều {pg.id}</h3>
              <p className="text-slate-500 text-sm">{pg.content} - {pg.maxPoint} điểm</p>
            </div>

            <div className="border rounded-lg mt-5 p-5">
              <table className="w-full  text-center  ">
                <thead>
                  <tr className="border-b-[1px] h-14 bg-slate-200 rounded-md">
                    <th>Mã số</th>
                    <th className="w-[500px]">Tên</th>
                    <th>Số điểm</th>
                    <th>Tình trạng</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {missions &&
                    missions.length > 0 &&
                    missions.filter(
                      (d) => d.mission.activity.pointGroup === pg.id
                    ).length === 0 && (
                      <tr>
                        <td colSpan={99} className="text-center pt-8">
                          Không có hoạt động
                        </td>{" "}
                      </tr>
                    )}
                  {missions &&
                    missions.length > 0 &&
                    missions
                      .filter((d) => d.mission.activity.pointGroup === pg.id)
                      .map((data) => (
                        <Fragment key={data.mission.id}>
                          <tr>
                            <td colSpan={10} className="text-left">
                              {`${data.mission.activity.name} `}  
                              {/* - Tối đa ${data.mission.activity.maxPoint} điểm */}
                            </td>
                          </tr>
                          <tr>
                            <td>{data.mission.id}</td>
                            <td>{data.mission.name}</td>
                            <td>{data.mission.point}</td>
                            <td>
                              {data.isCompleted ? (
                                <div className="inline-block text-sm w-[140px] py-1 px-4 bg-green-200 text-green-700 rounded-lg">
                                  Đã xác nhận
                                </div>
                              ) : (
                                <span className="inline-block text-sm w-[140px] py-1 px-4 bg-yellow-100 text-yellow-700 rounded-lg">
                                  Chờ xác nhận
                                </span>
                              )}
                            </td>
                            <td className="text-center text-sm">
                              {!data.isCompleted ? (
                                <SecondaryButton className={"text-sm"}>
                                  Báo thiếu
                                </SecondaryButton>
                              ) : (
                                <span className="text-slate-400">
                                  Đã hoàn thành
                                </span>
                              )}
                            </td>
                          </tr>
                        </Fragment>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

      <div></div>
    </div>
  );
}
