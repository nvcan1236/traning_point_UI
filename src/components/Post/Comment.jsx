/* eslint-disable react/prop-types */
import Avatar from "../Images/Avatar";

export default function Comment({ children, type }) {
  return (
    <div className="text-sm">
      <div className={`flex gap-3 items-end ${type=='reply'&&'pl-7 ml-3 border-l'}`}>
        <Avatar
          radius={28}
          className="mt-3 mb-1"
          src="https://images.unsplash.com/photo-1711126978286-16424ccdd787?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"
        />

        <div className="flex-1">
          <div >
            <span className="font-medium">canh</span>
            <span> - April 22, 2024</span>
          </div>
          <p className={`px-3 py-2  rounded-md ${type=='reply'?'bg-tintBlue':'bg-slate-200'}`}>{children}</p>
        </div>

        
      </div>
    </div>
  );
}
