/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Avatar from "../Images/Avatar";

export default function Comment({ children, type, comment }) {
  return (
    <div className="text-sm">
      <div className={`flex gap-3 items-end ${type=='reply'&&'pl-7 ml-3 border-l'}`}>
        <Avatar
          radius={28}
          className="mt-3 mb-1"
          src={comment.user.avatar}
        />

        <div className="flex-1">
          <div >
            <span className="font-medium">{comment.user.username}</span>
            <span className="ml-2 text-sm text-slate-700">{new Date(comment.createdAt).toLocaleDateString("vi")}</span>
          </div>
          <p className={`px-3 py-2  rounded-md ${type=='reply'?'bg-tintBlue':'bg-slate-200'}`}>{comment.content}</p>
        </div>

        
      </div>
    </div>
  );
}
