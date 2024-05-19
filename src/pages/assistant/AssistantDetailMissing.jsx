import Heading from "../../components/layout/Heading";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import TextArea from "../../components/formControls/TextArea";

export default function AssistantDetailMissing() {
  return (
    <div className=" p-6">
      <Heading className="text-lg">Chi tiết báo thiếu</Heading>
      <div className="flex mt-4 ">
        <div className="w-3/5">
          <section>
            <h3 className="font-medium text-slate-500">Sinh viên</h3>
            <div className="mt-2 pl-3">
              <div className="flex flex-col gap-2">
                <p>
                  <span className="font-medium text-mainBlue">Họ tên</span>:
                  Nguyễn Văn Cảnh
                </p>
                <p>
                  <span className="font-medium text-mainBlue">MSSV</span>:
                  2151053005
                </p>
                <p>
                  <span className="font-medium text-mainBlue">Khoa</span>: Công
                  nghệ thông tin
                </p>
                <p>
                  <span className="font-medium text-mainBlue">Lớp</span>:
                  DH21IT01
                </p>
                <p>
                  <span className="font-medium text-mainBlue">Email</span>:
                  2151052005canh@gmail.com
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="font-medium text-slate-500">Báo thiếu</h3>
            <div className="mt-2 pl-3">
              <div className="flex flex-col gap-2">
                <p>
                  <span className="font-medium text-mainBlue">
                    Ngày yêu cầu
                  </span>
                  : 20/05/2024
                </p>
                <p>
                  <span className="font-medium text-mainBlue">Nội dung</span>
                  <TextArea
                    defaultValue="Em chưa được cộng điểm hoạt động này"
                    className={'block mt-2 w-[500px]'}
                    readOnly
                  ></TextArea>
                </p>
                <div>
                  <span className="font-medium text-mainBlue">Minh chứng</span>
                  <div className="mt-3 w-[500px] text-white ">
                    <Swiper
                      slidesPerView="auto"
                      pagination={{
                        type: "fraction",
                      }}
                      style={{
                        alignSelf: "start",
                      }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                    >
                      {[1, 2, 3].map((i) => (
                        <SwiperSlide key={i}>
                          <img
                            src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/444763544_3711779145764821_6401796988515557076_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHD4DFO5GVLutosuAuiTECMWLO26tmcuu1Ys7bq2Zy67eUtLcDL5MpYHriJKT6g0Xawfm6ayI_NMm1gMItVhlCK&_nc_ohc=s1PBkWfEIigQ7kNvgFRQHXG&_nc_ht=scontent.fsgn2-3.fna&oh=00_AYDi1aDfe7Kq0B-XPbULhZB7v2KK5gr3AfJ01Qcrxmip3w&oe=664EB7B0"
                            alt=""
                            className="select-none max-h-[400px] mx-auto object-contain"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="mt-4 flex items-stretch gap-4">
                    <SecondaryButton className="bg-red-500 w-[120px] text-white border-none rounded-sm">
                      Từ chối
                    </SecondaryButton>
                    <PrimaryButton className="!bg-green-500 border-none rounded-sm">
                      Chấp nhận
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex-1">
          <div className="border border-dashed border-tintBlue rounded-sm mt-4 py-6 px-8">
            <div>
              <h3 className="font-medium text-slate-500">Hoạt động</h3>
              <h3 className="text-lg mt-2">Hoạt động Hiến máu nhân đạo </h3>
              <p>Khoa Công nghệ thông tin</p>
              <p>Kì 1 năm học 2023-2024</p>
              <p>
                Hoạt động{" "}
                <span className="font-semibold text-lg text-mainBlue">
                  điều 1
                </span>
              </p>
            </div>
            <div className="mt-8">
              <h3 className="font-medium text-slate-500">Nhiệm vụ</h3>
              <h3 className="text-lg mt-2 ">Tham gia hiến máu</h3>
              <p>+5 điểm</p>
              <p>
                Nội dung: Tham gia hiến máu vào ngày 10/4/2024 tại cơ sở Nhà Bè
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
