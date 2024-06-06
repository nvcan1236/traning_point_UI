import { IoAddSharp, IoSearchSharp } from "react-icons/io5";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Heading from "../../components/layout/Heading";
import AssistantActivity from "../../components/Activity/AssistantActivity";
import Input from "../../components/formControls/Input";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import { useEffect, useRef, useState } from "react";
import { fetchActivities } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/Buttons/BackButton";

export default function AssistantActivitiesPage() {
  const navigate = useNavigate();
  const [activities, setActivities] = useState();
  const [keyword, setKeyword] = useState("");
  const inputRef = useRef()


  const getActivities = async (keyword) => {
    const data = await fetchActivities(keyword);
    setActivities(data);
  };
  useEffect(() => {
    getActivities(keyword);
  }, [keyword]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-end">
      <div className="flex items-end gap-6">
        <BackButton /> <Heading>Các hoạt động rèn luyện</Heading>
      </div>
        <div className="flex gap-2 items-center">
          <div className="flex items-stretch">
            <Input
              placeholder="Tìm hoạt động..."
              className="text-sm rounded-sm"
              ref={inputRef}
            />
            <SecondaryButton className={"rounded-sm border-l-0"} onClick={()=>setKeyword(inputRef.current.value)}>
              <IoSearchSharp />
            </SecondaryButton>
          </div>
          <PrimaryButton
            className={"rounded-sm inline-flex gap-2 items-center"}
            onClick={() => navigate("./edit")}
          >
            <IoAddSharp /> Hoạt động mới
          </PrimaryButton>
        </div>
      </div>

      <section className="mt-6">
        <h3 className="font-medium text-slate-800">Danh sách hoạt động</h3>
        <ul className="flex flex-col gap-2 mt-3 ml-4">
          {activities?.length > 0 &&
            activities.map((activity) => (
              <AssistantActivity key={activity.id} activity={activity} />
            ))}
        </ul>
      </section>

      {/* <section className="mt-6">
        <h3 className="font-medium text-slate-800">Hoạt động đã kết thúc</h3>
        <ul className="flex flex-col gap-2 mt-3 ml-4">
          {[1, 2, 3, 4].map((i) => (
            <AssistantActivity key={i} id={i} />
          ))}
        </ul>
      </section> */}
    </div>
  );
}
