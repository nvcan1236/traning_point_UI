/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import Input from "../components/formControls/Input";
import Avatar from "../components/Images/Avatar";
import Heading from "../components/layout/Heading";
import CheckBox from "../components/formControls/CheckBox";
import { API } from "../configs/APIconfig";

export default function ActivitiesPage() {
  const [pointGroup, setPointGroup] = useState(0);
  const [missions, setMisions] = useState([]);
  const [isRegisted, setIsRegisted] = useState(false);

  const fetchActivities = async () => {
    const res = await fetch(API.userMission, {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
      },
    });
    if (res.ok) {
      let data = await res.json();
      if (pointGroup) {
        data = data.filter(
          (mission) => mission.mission.activity.pointGroupId == pointGroup
        );
      }
      if (isRegisted) {
        data = data.filter(
          (mission) => mission.registerDate != null
        );
      }
      console.log(pointGroup, data);
      setMisions(data);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, [pointGroup, isRegisted]);

  return (
    <div>
      <div className="flex justify-between items-end ">
        <div className="flex gap-8 items-end mb-6">
          <Heading>DANH SÁCH HOẠT ĐỘNG </Heading>
          <CheckBox
            label="Đã đăng ký"
            check={isRegisted}
            onClick={() => setIsRegisted(!isRegisted)}
          />
        </div>

        <div className="flex justify-end gap-4 relative z-10">
          <div
            onClick={() => setPointGroup(0)}
            className={`px-6 py-2 border border-mainBlue border-b-0 ${
              pointGroup === 0 && " bg-tintBlue  "
            }`}
          >
            Tất cả
          </div>
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              onClick={() => setPointGroup(item)}
              className={`px-6 py-2 border border-mainBlue border-b-0 ${
                pointGroup === item && " bg-tintBlue  "
              }`}
            >
              Điều {item}
            </div>
          ))}
        </div>
      </div>

      <table className="w-full h-20 border border-mainBlue mt-[-1px] text-center">
        <thead className="h-16 bg-tintBlue ">
          <tr className="">
            <th>Mã số</th>
            <th>Tên hoạt động</th>
            <th>Điểm</th>
            <th>Thời gian</th>
            <th>Ngày đăng kí</th>
            {pointGroup == 0 && <th>Điều</th>}
          </tr>
        </thead>
        <tbody>
          {missions && missions.length > 0 ? (
            missions.map((mission) => (
              <Fragment key={mission.id}>
                <tr>
                  <td
                    colSpan={10}
                    className="text-left pl-6 border-t font-semibold pt-6"
                  >
                    {mission.mission.activity.name}
                  </td>
                </tr>
                <tr>
                  <td>{mission.mission.id}</td>
                  <td className="text-left">
                    {mission.mission.name}{" "}
                    <p className="text-sm text-slate-600">
                      {mission.mission.content}
                    </p>
                  </td>
                  <td>{mission.mission.point}</td>
                  <td>
                    {mission.mission.startDate}- {mission.mission.endDate}
                  </td>
                  <td>
                    {mission.registerDate
                      ? new Date(mission.registerDate).toLocaleDateString("vi")
                      : "Chưa đăng ký"}
                  </td>
                  {pointGroup == 0 && (
                    <td>{mission.mission.activity.pointGroupId}</td>
                  )}
                </tr>
              </Fragment>
            ))
          ) : (
            <tr>
              <td colSpan={20}>
                <p className="p-6">Không có hoạt động nào trong điều này</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
