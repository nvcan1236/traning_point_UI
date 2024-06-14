/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import Heading from "../../components/layout/Heading";
import { Chart } from "react-google-charts";
import SelectBox from "../../components/formControls/SelectBox";
import BackButton from "../../components/Buttons/BackButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import { IoSaveSharp } from "react-icons/io5";

export default function AssistantStats() {
  const [data, setData] = useState([
    ["Xếp loại", "Sinh viên"],
    ["Xuất xắc", 1000],
    ["Giỏi", 1170],
    ["Khá", 660],
    ["Trung Bình", 1030],
  ]);

  const [options, setOptions] = useState({
    chart: {
      title: "Thống kê điểm rèn luyện theo loại",
      subtitle: "Khoa công nghệ thông tin học kì 1 2023-2024",
    },
  });

  const filterOptions = [
    { id: 1, name: "Tất cả", value: 1 },
    { id: 2, name: "Kì này", value: 2 },
    { id: 3, name: "Theo lớp", value: 3 },
    { id: 4, name: "Theo khoa CNTT", value: 4 },
  ];
  const [filter, setFilter] = useState(filterOptions[0].value);
  const handleSetFilter = (name, value) => {
    setFilter(value);
  };

  useEffect(() => {}, [data]);

  return (
    <div className="p-6">
      <div className="flex gap-10 items-end">
        <BackButton />
        <Heading>Thống kê kết quả học kỳ</Heading>
        <div className="flex-1">
          <SelectBox
            options={filterOptions}
            name={"filter"}
            onChange={handleSetFilter}
            className="mt-4 !w-[200px]"
            value={filterOptions[0].name}
          />
        </div>
        <SecondaryButton className="flex items-center gap-2 rounded-sm px-4">
          <IoSaveSharp /> Lưu báo cáo
        </SecondaryButton>
      </div>
      <div className="flex gap-8 mt-20">
        <div className="w-3/5">
          <div>
            <Chart
              chartType="Bar"
              width="100%"
              height="400px"
              data={data}
              options={options}
            />
          </div>
        </div>
        <div className="flex-1">
          <div>
            <Chart
              chartType="PieChart"
              width="100%"
              height="400px"
              data={data}
              options={options}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
