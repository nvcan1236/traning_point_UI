import {
  IoBarbellOutline,
  IoRibbonOutline,
  IoTimeOutline,
  IoWarningOutline,
} from "react-icons/io5";
import Heading from "../components/layout/Heading";
import SecondaryButton from "../components/Buttons/SecondaryButton";

export default function DetailResult() {
  return (
    <div>
      <Heading>CHI TIẾT KẾT QUẢ RÈN LUYỆN</Heading>
      <div className="mt-8 flex gap-4">
        <div className="flex p-4 gap-4 bg-blue-50 w-1/4 rounded-xl items-center">
          <div className="w-12 h-12 rounded-lg bg-tintBlue text-mainBlue text-lg flex items-center justify-center ">
            <IoBarbellOutline />
          </div>
          <div>
            <p className="text-sm text-slate-500">Số hoạt động</p>
            <span className="text-3xl font-semibold text-mainBlue">20</span>
          </div>
        </div>
        <div className="flex p-4 gap-4 bg-blue-50 w-1/4 rounded-xl items-center">
          <div className="w-12 h-12 rounded-lg bg-tintBlue text-mainBlue text-lg flex items-center justify-center ">
            <IoRibbonOutline />
          </div>
          <div>
            <p className="text-sm text-slate-500">Số điểm</p>
            <span className="text-3xl font-semibold text-mainBlue">60</span>
          </div>
        </div>
        <div className="flex p-4 gap-4 bg-blue-50 w-1/4 rounded-xl items-center">
          <div className="w-12 h-12 rounded-lg bg-tintBlue text-mainBlue text-lg flex items-center justify-center ">
            <IoTimeOutline />
          </div>
          <div>
            <p className="text-sm text-slate-500">Chờ xác nhận</p>
            <span className="text-3xl font-semibold text-mainBlue">25</span>
          </div>
        </div>
        <div className="flex p-4 gap-4 bg-blue-50 w-1/4 rounded-xl items-center">
          <div className="w-12 h-12 rounded-lg bg-tintBlue text-mainBlue text-lg flex items-center justify-center ">
            <IoWarningOutline />
          </div>
          <div>
            <p className="text-sm text-slate-500">Vi phạm</p>
            <span className="text-3xl font-semibold text-mainBlue">5</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div>
          <h3 className="font-semibold">Điểu 1</h3>
          <p className="text-slate-500 text-sm">
            Các hoạt động học thuật, hội thảo khoa học
          </p>
        </div>

        <div className="border rounded-lg mt-5 p-5">
          <table className="w-full  text-center  ">
            <thead>
              <tr>
                <th>STT</th>
                <th className="w-[500px]">Tên</th>
                <th>Số điểm</th>
                <th>Tình trạng</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={10} className="text-left">Mùa hè xanh</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Tham gia chiến dịch</td>
                <td>5</td>
                <td>Đã xác nhận</td>
                <td>
                  <SecondaryButton>Báo thiếu</SecondaryButton>
                </td>
              </tr>
  
              <tr>
                <td>1</td>
                <td>Tham gia chiến dịch</td>
                <td>5</td>
                <td>Đã xác nhận</td>
                <td>
                  <SecondaryButton>Báo thiếu</SecondaryButton>
                </td>
              </tr>
  
              <tr>
                <td colSpan={10} className="text-left">Hiến máu tình nguyện</td>
              </tr>
  
              <tr>
                <td>1</td>
                <td>Tham gia chiến dịch</td>
                <td>5</td>
                <td>Đã xác nhận</td>
                <td>
                  <SecondaryButton>Báo thiếu</SecondaryButton>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8">
        <div>
          <h3 className="font-semibold">Điểu 2</h3>
          <p className="text-slate-500 text-sm">
            Các hoạt động học thuật, hội thảo khoa học
          </p>
        </div>

        <div className="border rounded-lg mt-5 p-5">
          <table className="w-full  text-center  ">
            <thead>
              <tr>
                <th>STT</th>
                <th className="w-[500px]">Tên</th>
                <th>Số điểm</th>
                <th>Tình trạng</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={10} className="text-left">Mùa hè xanh</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Tham gia chiến dịch</td>
                <td>5</td>
                <td>Đã xác nhận</td>
                <td>
                  <SecondaryButton>Báo thiếu</SecondaryButton>
                </td>
              </tr>
  
              <tr>
                <td>1</td>
                <td>Tham gia chiến dịch</td>
                <td>5</td>
                <td>Đã xác nhận</td>
                <td>
                  <SecondaryButton>Báo thiếu</SecondaryButton>
                </td>
              </tr>
  
              <tr>
                <td colSpan={10} className="text-left">Hiến máu tình nguyện</td>
              </tr>
  
              <tr>
                <td>1</td>
                <td>Tham gia chiến dịch</td>
                <td>5</td>
                <td>Đã xác nhận</td>
                <td>
                  <SecondaryButton>Báo thiếu</SecondaryButton>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8">
        <div>
          <h3 className="font-semibold">Điểu 3</h3>
          <p className="text-slate-500 text-sm">
            Các hoạt động học thuật, hội thảo khoa học
          </p>
        </div>

        <div className="border rounded-lg mt-5 p-5">
          <table className="w-full  text-center  ">
            <thead>
              <tr>
                <th>STT</th>
                <th className="w-[500px]">Tên</th>
                <th>Số điểm</th>
                <th>Tình trạng</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={10} className="text-left">Mùa hè xanh</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Tham gia chiến dịch</td>
                <td>5</td>
                <td>Đã xác nhận</td>
                <td>
                  <SecondaryButton>Báo thiếu</SecondaryButton>
                </td>
              </tr>
  
              <tr>
                <td>1</td>
                <td>Tham gia chiến dịch</td>
                <td>5</td>
                <td>Đã xác nhận</td>
                <td>
                  <SecondaryButton>Báo thiếu</SecondaryButton>
                </td>
              </tr>
  
              <tr>
                <td colSpan={10} className="text-left">Hiến máu tình nguyện</td>
              </tr>
  
              <tr>
                <td>1</td>
                <td>Tham gia chiến dịch</td>
                <td>5</td>
                <td>Đã xác nhận</td>
                <td>
                  <SecondaryButton>Báo thiếu</SecondaryButton>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8">
        <div>
          <h3 className="font-semibold">Điểu 4</h3>
          <p className="text-slate-500 text-sm">
            Các hoạt động học thuật, hội thảo khoa học
          </p>
        </div>

        <div className="border rounded-lg mt-5 p-5">
          <table className="w-full  text-center  ">
            <thead>
              <tr>
                <th>STT</th>
                <th className="w-[500px]">Tên</th>
                <th>Số điểm</th>
                <th>Tình trạng</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={10} className="text-left">Mùa hè xanh</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Tham gia chiến dịch</td>
                <td>5</td>
                <td>Đã xác nhận</td>
                <td>
                  <SecondaryButton>Báo thiếu</SecondaryButton>
                </td>
              </tr>
  
              <tr>
                <td>1</td>
                <td>Tham gia chiến dịch</td>
                <td>5</td>
                <td>Đã xác nhận</td>
                <td>
                  <SecondaryButton>Báo thiếu</SecondaryButton>
                </td>
              </tr>
  
              <tr>
                <td colSpan={10} className="text-left">Hiến máu tình nguyện</td>
              </tr>
  
              <tr>
                <td>1</td>
                <td>Tham gia chiến dịch</td>
                <td>5</td>
                <td>Đã xác nhận</td>
                <td>
                  <SecondaryButton>Báo thiếu</SecondaryButton>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div></div>
    </div>
  );
}
