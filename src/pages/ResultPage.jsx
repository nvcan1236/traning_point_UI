/* eslint-disable no-undef */
// import React from 'react'

import Heading from "../components/layout/Heading";
import { IoCheckmark, IoCreateOutline } from "react-icons/io5";
import Chart from "react-google-charts";

export default function ResultPage() {

  const data = [
    ["Điểm các điều", "Đã đăng kí", "Đã xác nhận", "Điểm tối đa"],
    ["Điều 1", 35, 25, 20],
    ["Điều 2", 20, 20, 20],
    ["Điều 3", 50, 45, 25],
    ["Điều 4", 30, 30, 25],
  ];

  const options = {
    chart: {
      title: "Điểm rèn luyện ",
      subtitle: "Các điều trong học kì 1 2024-2024",
    },
    colors: ["#ffce3d", "#4daf54", "#f02849"],
    
  };

  return (
    <div className="py-6">
      <section>
        <Heading>TỔNG QUAN KẾT QUẢ ĐIỂM RÈN LUYỆN</Heading>
        <div className=" flex gap-12 justify-between items-end">
          {/* chart */}
          <div className="w-[720px] ">
            <Chart
              data={data}
              options={options}
              width="100%"
              height="400px"
              chartType="Bar"
            />
          </div>

          {/* detail */}
          <div className="flex-1 mt-6 ml-12 flex flex-col gap-6">
            <div>
              <p className="font-medium">Tất cả</p>
              <div className="flex gap-3 items-center">
                <IoCreateOutline className="w-6 text-xg text-yellow-600 " />
                <span className="text-yellow-600"> Đã đăng kí:</span>
                <span className="cursor-pointer font-medium text-mainBlue">
                  15
                </span>{" "}
                - 65/100 điểm
              </div>
              <div className="flex gap-3 items-center">
                <IoCheckmark className="w-6 text-xl text-green-700 " />
                <span className="text-green-700">Đã xác nhận:</span>
                <div>
                  <span className="cursor-pointer font-medium text-mainBlue">
                    10
                  </span>{" "}
                  - 50/100 điểm
                </div>
              </div>
            </div>

            <div>
              <p className="font-medium">Điều 1</p>
              <div className="flex gap-3 items-center">
                <IoCreateOutline className="w-6 text-xg text-yellow-600 " />
                <span className="text-yellow-600"> Đã đăng kí:</span>
                <span className="cursor-pointer font-medium text-mainBlue">
                  15
                </span>{" "}
                - 65/100 điểm
              </div>
              <div className="flex gap-3 items-center">
                <IoCheckmark className="w-6 text-xl text-green-700 " />
                <span className="text-green-700">Đã xác nhận:</span>
                <div>
                  <span className="cursor-pointer font-medium text-mainBlue">
                    10
                  </span>{" "}
                  - 50/100 điểm
                </div>
              </div>
            </div>

            <div>
              <p className="font-medium">Điều 2</p>
              <div className="flex gap-3 items-center">
                <IoCreateOutline className="w-6 text-xg text-yellow-600 " />
                <span className="text-yellow-600"> Đã đăng kí:</span>
                <span className="cursor-pointer font-medium text-mainBlue">
                  15
                </span>{" "}
                - 65/100 điểm
              </div>
              <div className="flex gap-3 items-center">
                <IoCheckmark className="w-6 text-xl text-green-700 " />
                <span className="text-green-700">Đã xác nhận:</span>
                <div>
                  <span className="cursor-pointer font-medium text-mainBlue">
                    10
                  </span>{" "}
                  - 50/100 điểm
                </div>
              </div>
            </div>

            <div>
              <p className="font-medium">Điều 3</p>
              <div className="flex gap-3 items-center">
                <IoCreateOutline className="w-6 text-xg text-yellow-600 " />
                <span className="text-yellow-600"> Đã đăng kí:</span>
                <span className="cursor-pointer font-medium text-mainBlue">
                  15
                </span>{" "}
                - 65/100 điểm
              </div>
              <div className="flex gap-3 items-center">
                <IoCheckmark className="w-6 text-xl text-green-700 " />
                <span className="text-green-700">Đã xác nhận:</span>
                <div>
                  <span className="cursor-pointer font-medium text-mainBlue">
                    10
                  </span>{" "}
                  - 50/100 điểm
                </div>
              </div>
            </div>

            <div>
              <p className="font-medium">Điều 4</p>
              <div className="flex gap-3 items-center">
                <IoCreateOutline className="w-6 text-xg text-yellow-600 " />
                <span className="text-yellow-600"> Đã đăng kí:</span>
                <span className="cursor-pointer font-medium text-mainBlue">
                  15
                </span>{" "}
                - 65/100 điểm
              </div>
              <div className="flex gap-3 items-center">
                <IoCheckmark className="w-6 text-xl text-green-700 " />
                <span className="text-green-700">Đã xác nhận:</span>
                <div>
                  <span className="cursor-pointer font-medium text-mainBlue">
                    10
                  </span>{" "}
                  - 50/100 điểm
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
