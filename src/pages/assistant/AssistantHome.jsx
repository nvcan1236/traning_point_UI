import BackButton from "../../components/Buttons/BackButton";
import Heading from "../../components/layout/Heading";

export default function AssistantHome() {
  return (
    <div>
      <div className="flex items-end gap-6">
        <BackButton /> <Heading>Trang chủ</Heading>
      </div>
    </div>
  )
}
