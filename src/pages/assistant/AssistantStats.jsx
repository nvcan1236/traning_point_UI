/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import Heading from "../../components/layout/Heading";
import { Chart } from "react-google-charts";
import SelectBox from "../../components/formControls/SelectBox";
import BackButton from "../../components/Buttons/BackButton";
import { fetchStatsByFaculty, fetchStatsByRank } from "../../hooks/useFetch";

export default function AssistantStats() {
  const [data, setData] = useState([]);

  const [options, setOptions] = useState({
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
  });

  const filterOptions = [
    { id: 1, name: "Theo thành tích", value: 1 },
    { id: 2, name: "Theo khoa", value: 2 },
  ];

  const [filter, setFilter] = useState(filterOptions[0].value);
  const handleSetFilter = (name, value) => {
    setFilter(value);
  }

  const statsByRank = async () => {
    const dataRes = await fetchStatsByRank();
    const array = [
      ["Xếp loại", "Sinh viên"],
      ["Xuất xắc", dataRes[0].excellent],
      ["Giỏi", dataRes[0].good],
      ["Khá", dataRes[0].fair],
      ["Trung Bình", dataRes[0].average],
      ["Yếu", dataRes[0].weak],
      ["Kém", dataRes[0].poor]
    ]
    setData(array);
  }

  const statsByFaculty = async () => {
    const dataRes = await fetchStatsByFaculty();
    const array = [
      ["Lớp", "Điểm rèn luyện trung bình"]
    ] 
    dataRes.forEach(element => {
      array.push([element.name, element.avgTotalPoints])
    });
    setData(array);  
  }

  useEffect(() => {
    if (filter === 1)
      statsByRank();
    else
      statsByFaculty();
  }, [filter]);

  return (
    <div className="p-6">
      <div className="flex gap-10 items-end">
        <BackButton />
        <Heading>Thống kê kết quả học kỳ</Heading>
        <SelectBox
          options={filterOptions}
          name={"filter"}
          onChange={handleSetFilter}
          className='mt-4 w-[200px]'
          value={filterOptions[0].value}
        />
      </div>
      <div className="flex gap-8 mt-20">
        <div className="w-3/5">
          <div>
            <Chart
              chartType="Bar"
              width="100%"
              height="600px"
              data={data}
              options={options}
            />
          </div>
        </div>
        {filter === 1 && (
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
        </div>)
        }
      </div>
    </div>
  );
}
