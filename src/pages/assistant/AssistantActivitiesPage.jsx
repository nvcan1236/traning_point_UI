import { IoAddSharp, IoSearchSharp } from "react-icons/io5";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Heading from "../../components/layout/Heading";
import AssistantActivity from "../../components/Activity/AssistantActivity";
import Input from "../../components/formControls/Input";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import { useNavigate } from "react-router-dom";

export default function AssistantActivitiesPage() {
  const navigate = useNavigate()
  return (
    <div className="px-6">
      <div className="flex justify-between items-end">
        <Heading className='text-xl'>Các hoạt động rèn luyện</Heading>
        <div className="flex gap-2 items-center">
          <div className="flex items-stretch">
            <Input
              placeholder="Tìm hoạt động..."
              className="text-sm rounded-sm"
            />
            <SecondaryButton className={"rounded-sm border-l-0"}>
              <IoSearchSharp />
            </SecondaryButton>
          </div>
          <PrimaryButton
            className={"rounded-sm inline-flex gap-2 items-center"}
            onClick={()=>navigate("./edit")}
          >
            <IoAddSharp /> Hoạt động mới
          </PrimaryButton>
        </div>
      </div>
      <section className="mt-6">
        <h3 className="font-medium text-slate-800">Hoạt động đang diễn ra</h3>
        <ul className="flex flex-col gap-2 mt-3 ml-4">
          {[1, 2, 3, 4].map((i) => 
            <AssistantActivity key={i} id={i} />
          )}
        </ul>
      </section>

      <section className="mt-6">
        <h3 className="font-medium text-slate-800">Hoạt động đã kết thúc</h3>
        <ul className="flex flex-col gap-2 mt-3 ml-4">
        {[1, 2, 3, 4].map((i) => 
            <AssistantActivity key={i} id={i} />
          )}
        </ul>
      </section>
    </div>
  );
}
