import React from "react";
interface Props {
  url: string;
}
const MaximizedImage: React.FC<Props> = (props) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full grid content-center bg-slate-800">
      <div className="w-[60%] h-[60%] mx-auto">
        <img src={props.url} className="h-full w-full rounded object-cover" />
      </div>
    </div>
  );
};
export default MaximizedImage;
