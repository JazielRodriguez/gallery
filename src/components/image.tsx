import React, { useState } from "react";
interface Props {
  url: string;
  onImageIsMaximized: ({
    isVisible,
    url,
  }: {
    isVisible: boolean;
    url: string;
  }) => void;
}
const Image: React.FC<Props> = (props) => {
  const [buttonsAreVisible, setButtonsAreVisible] = useState<boolean>(false);
  const buttonsAreVisibleHandler = () => {
    setButtonsAreVisible(true);
  };
  const buttonsArentVisibleHandler = () => {
    setButtonsAreVisible(false);
  };
  const imageMaximizedHandler = () => {
    props.onImageIsMaximized({ isVisible: true, url: props.url });
  };
  return (
    <div
      className="w-[16rem] h-[16rem] rounded relative"
      onMouseEnter={buttonsAreVisibleHandler}
      onMouseLeave={buttonsArentVisibleHandler}
    >
      <img
        className="w-full h-full object-cover relative rounded z-0"
        src={props.url}
      />
      {buttonsAreVisible && (
        <div className="absolute right-[2rem] bottom-[2rem] flex gap-4">
          <div
            className="z-[10000000] w-[2rem] h-[2rem] bg-indigo-500  rounded-2xl flex items-center justify-center cursor-pointer"
            onClick={imageMaximizedHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrows-maximize"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M16 4l4 0l0 4" />
              <path d="M14 10l6 -6" />
              <path d="M8 20l-4 0l0 -4" />
              <path d="M4 20l6 -6" />
              <path d="M16 20l4 0l0 -4" />
              <path d="M14 14l6 6" />
              <path d="M8 4l-4 0l0 4" />
              <path d="M4 4l6 6" />
            </svg>
          </div>
          <div className="z-[10000000] w-[2rem] h-[2rem] bg-indigo-500 rounded-2xl flex items-center justify-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-download"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
              <path d="M7 11l5 5l5 -5" />
              <path d="M12 4l0 12" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
export default Image;
