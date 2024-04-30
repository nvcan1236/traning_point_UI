// import React from 'react'

export default function HomePage() {
  return (
    <div>
      <div className="relative">
        <div className="absolute top-0 left-0 bottom-0 w-full bg-gradient-to-r z-10 from-mainBlue to-transparent flex items-center rounded-md">
          <h1 className="text-white text-xl px-10 font-medium">
            HỆ THỐNG ĐIỂM RÈN LUYỆN <br /> TRƯỜNG ĐẠI HỌC MỞ <br /> THÀNH PHỐ HỒ
            CHÍ MINH
          </h1>
        </div>
        <img
          src="https://hoisinhvientphcm.com/wp-content/uploads/2021/06/IMG_1679-copy-1024x683-1.jpg"
          alt=""
          className="w-full h-[320px] object-cover rounded-sm"
        />
      </div>
      <div className="flex items-end text-lg text-mainBlue font-medium gap-2 mt-6">
        Tổng điểm rèn luyện:{" "}
        <span className="text-xl font-semibold text-mainBlue">50</span>
      </div>
      <div>
        <h3 className="text-lg text-mainBlue font-medium mt-6">
          Hoạt động tuần này
        </h3>
        <ul className="flex gap-3 mt-4">
          <li className="py-4 px-8 border border-slate-200 rounded-md w-1/3 flex flex-col gap-2">
            <h3 className="font-medium ">Khoa CNTT</h3>
            <p>Điều 1 - 5 điểm</p>
            <p>Mùa hè xanh</p>
          </li>
          <li className="py-4 px-8 border border-slate-200 rounded-md w-1/3 flex flex-col gap-2">
            <h3 className="font-medium ">Khoa CNTT</h3>
            <p>Điều 1 - 5 điểm</p>
            <p>Mùa hè xanh</p>
          </li>
          <li className="py-4 px-8 border border-slate-200 rounded-md w-1/3 flex flex-col gap-2">
            <h3 className="font-medium ">Khoa CNTT</h3>
            <p>Điều 1 - 5 điểm</p>
            <p>Mùa hè xanh</p>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg text-mainBlue font-medium mt-8">
          Thông tin điểm rèn luyện
        </h3>
        <ul className="flex gap-20 my-3">
          <li className="w-1/2 cursor-pointer">
            <img
              src="https://ou.edu.vn/wp-content/uploads/2022/08/TS.-Le-Nguyen-Quoc-Khang-%E2%80%93-Pho-Hieu-truong-truong-Dai-hoc-Mo-TP.HCM-da-gui-loi-cam-on-den-cac-Doanh-nghiep-.jpg"
              alt=""
              className="w-full h-[200px] object-cover"
            />
            <p className="mt-3 font-light text-lg">Cách tính điểm rèn luyện</p>
            <p className="text-slate-600 text-sm font-light mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              excepturi sunt asperiores ab iste ad doloremque repudiandae
              ducimus molestiae nisi.
            </p>
          </li>
          <li className="w-1/2 cursor-pointer">
            <img
              src="https://ou.edu.vn/wp-content/uploads/2023/07/IMG_1751.jpg"
              alt=""
              className="w-full h-[200px] object-cover"
            />
            <p className="mt-3 font-light text-lg">Nội dung các điều</p>
            <p className="text-slate-600 text-sm font-light mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              libero officia voluptas suscipit, aliquam minus!
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
