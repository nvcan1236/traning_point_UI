import { IoCreateOutline, IoReaderSharp } from "react-icons/io5";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import Heading from "../../components/layout/Heading";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDetailActivity } from "../../hooks/useFetch";
import Loading from "../../components/layout/Loading";
import BackButton from "../../components/Buttons/BackButton";

export default function AssistantDetailActivity() {
  const navigate = useNavigate();
  const { activityId } = useParams();
  const [activity, setActivity] = useState();
  const getActivity = async (id) => {
    const data = await fetchDetailActivity(id);
    setActivity(data);
  };
  useEffect(() => {
    getActivity(activityId);
  }, [activityId]);
  return (
    <>
      <div className="p-6">
        <div className="flex items-end gap-6">
          <BackButton /> <Heading>Hoạt động</Heading>
        </div>
        {activity ? (
          <div>
            <div className="flex justify-between items-end">
              <div className="flex-1">
                <Heading className="text-2xl mb-3">{activity.name}</Heading>
                <p>Khoa Công nghệ thông tin</p>
                <p>Kì 1 năm học 2023-2024</p>
                <p>
                  Hoạt động{" "}
                  <span className="font-semibold text-lg text-mainBlue">
                    {activity.pointGroup.name}
                  </span>
                </p>
              </div>
              <div className="flex gap-2">
                <PrimaryButton className={"rounded-sm flex gap-2 items-center"}>
                  <IoReaderSharp /> Nạp DS điểm danh
                </PrimaryButton>
                <SecondaryButton
                  className={"rounded-sm flex gap-2 items-center"}
                  onClick={() => navigate(`/activities/edit/${activity.id}`)}
                >
                  <IoCreateOutline /> Chỉnh sửa
                </SecondaryButton>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-5">
              {activity.missions.length == 0 && (
                <p className="py-40 text-center text-slate-400">
                  {" "}
                  ( Hoạt động chưa có nhiệm vụ nào ){" "}
                </p>
              )}
              {activity.missions.length > 0 &&
                activity.missions.map((mission, index) => (
                  <div
                    className="px-6 py-4 border border-tintBlue rounded-sm flex justify-between items-center"
                    key={mission.id}
                  >
                    <div className="w-1/2">
                      <h3>Nhiệm vụ {index + 1}</h3>
                      <div className="font-medium text-lg text-slate-700">
                        {mission.name}
                      </div>
                      <p className="text-sm text-slate-600">
                        {mission.content}
                      </p>
                    </div>
                    <p className="w-1/4 text-center">
                      Số điểm: {mission.point}
                    </p>
                    <span className="font-medium text-mainBlue w-1/4 text-end">
                      {new Date(mission.startDate).toLocaleDateString("vi")} -{" "}
                      {new Date(mission.endDate).toLocaleDateString("vi")}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <Loading radius={30} className="my-40" />
        )}
      </div>
    </>
  );
}
