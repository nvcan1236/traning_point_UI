/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import Input from "../components/formControls/Input";
import Avatar from "../components/Images/Avatar";
import Heading from "../components/layout/Heading";
import CheckBox from "../components/formControls/CheckBox";

export default function ActivitiesPage() {
  const [pointGroup, setPointGroup] = useState(0);

  return (
    <div >
      <div className="flex justify-between items-end ">
        <div className="flex gap-8 items-end mb-6">
          <Heading>DANH SÁCH HOẠT ĐỘNG </Heading>
          <CheckBox label="Đã đăng ký" />
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
          <div
          onClick={() => setPointGroup(1)}
            className={`px-6 py-2 border border-mainBlue border-b-0 ${
              pointGroup === 1 && " bg-tintBlue  "
            }`}
          >
            Điều 1
          </div>
          <div
          onClick={() => setPointGroup(2)}
            className={`px-6 py-2 border border-mainBlue border-b-0 ${
              pointGroup === 2 && " bg-tintBlue  "
            }`}
          >
            Điều 2
          </div>
          <div
          onClick={() => setPointGroup(3)}
            className={`px-6 py-2 border border-mainBlue border-b-0 ${
              pointGroup === 3 && " bg-tintBlue  "
            }`}
          >
            Điều 3
          </div>
          <div
            onClick={() => setPointGroup(4)}
            className={`px-6 py-2 border border-mainBlue border-b-0 ${
              pointGroup === 4 && " bg-tintBlue  "
            }`}
          >
            Điều 4
          </div>
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
          {pointGroup ==0 && <th>Điều</th>}
        </tr>
        </thead>
        <tbody>
          <tr>
            <td
              colSpan={10}
              className="text-left pl-6 border-t font-semibold pt-6"
            >
              HỘI THAO TRUYỀN THỐNG 2024
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td className="text-left">Tham gia cổ vũ </td>
            <td>5</td>
            <td>17-04/2014 - 25/04/2024</td>
            <td>20/04/2024</td>
            {pointGroup ==0 && <td>3</td>}
          </tr>

          <tr>
            <td>1</td>
            <td className="text-left">Tham gia cổ vũ </td>
            <td>5</td>
            <td>17-04/2014 - 25/04/2024</td>
            <td>20/04/2024</td>
            {pointGroup ==0 && <td>3</td>}

          </tr>
          <tr>
            <td>1</td>
            <td className="text-left">Tham gia cổ vũ </td>
            <td>5</td>
            <td>17-04/2014 - 25/04/2024</td>
            <td>20/04/2024</td>
            {pointGroup ==0 && <td>3</td>}

          </tr>

          <tr>
            <td
              colSpan={10}
              className="text-left pl-6 border-t font-semibold pt-6"
            >
              HỘI THAO TRUYỀN THỐNG 2024
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td className="text-left">Tham gia cổ vũ </td>
            <td>5</td>
            <td>17-04/2014 - 25/04/2024</td>
            <td>20/04/2024</td>
            {pointGroup ==0 && <td>3</td>}

          </tr>

          <tr>
            <td>1</td>
            <td className="text-left">Tham gia cổ vũ </td>
            <td>5</td>
            <td>17-04/2014 - 25/04/2024</td>
            <td>20/04/2024</td>
            {pointGroup ==0 && <td>3</td>}

          </tr>
          <tr>
            <td>1</td>
            <td className="text-left">Tham gia cổ vũ </td>
            <td>5</td>
            <td>17-04/2014 - 25/04/2024</td>
            <td>20/04/2024</td>
            {pointGroup ==0 && <td>3</td>}

          </tr>
        </tbody>
      </table>
    </div>
  );
}
