/* eslint-disable no-undef */
// import React from 'react'

import Heading from "../components/layout/Heading";
import { IoCheckmark, IoCreateOutline } from "react-icons/io5";
import Chart from "react-google-charts";
import { useEffect, useState } from "react";
import { getChartData, getStatsReport } from "../utils/statsUtils";

export default function ResultPage() {
  const data = [["Điểm các điều", "Đã đăng kí", "Đã xác nhận", "Điểm tối đa"]];
  const [chartData, setChartData] = useState(data);
  const [report, setReport] = useState();

  const options = {
    chart: {
      title: "Điểm rèn luyện ",
      subtitle: "Theo điều trong học kì 1 2024-2024",
    },
    colors: ["#ffce3d", "#4daf54", "#f02849"],
  };

  const getChart = async () => {
    const data = await getChartData();
    setChartData([...chartData, ...data]);
  };

  const getReport = async () => {
    const data = await getStatsReport();
    console.log(data);
    setReport(data);
  };

  useEffect(() => {
    getChart();
    getReport();
  }, []);

  return (
    <div className="py-6">
      <section>
        <Heading>TỔNG QUAN KẾT QUẢ ĐIỂM RÈN LUYỆN</Heading>
        <div className=" flex gap-12 justify-between items-end">
          {/* chart */}
          <div className="w-[720px] ">
            <Chart
              data={chartData}
              options={options}
              width="100%"
              height="400px"
              chartType="Bar"
            />
          </div>

          {/* detail */}
          <div className="flex-1 mt-6 ml-12 flex flex-col gap-6">
            {report &&
              report.map((data) => (
                <div key={data[0]}>
                  <p className="font-medium">{data[0]}</p>
                  <div className="flex gap-3 items-center">
                    <IoCreateOutline className="w-6 text-xg text-yellow-600 " />
                    <span className="text-yellow-600"> Đã đăng kí:</span>
                    <span className="cursor-pointer font-medium text-mainBlue">
                      {data[2]}
                    </span>{" "}
                    - {data[1]}/{data[5]} điểm
                  </div>
                  <div className="flex gap-3 items-center">
                    <IoCheckmark className="w-6 text-xl text-green-700 " />
                    <span className="text-green-700">Đã xác nhận:</span>
                    <div>
                      <span className="cursor-pointer font-medium text-mainBlue">
                        {data[4]}
                      </span>{" "}
                      - {data[3]}/{data[5]} điểm
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
