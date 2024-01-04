import { listAll, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/client";
import Image from "./image";
import { useState, useEffect } from "react";
const Gallery: React.FC = () => {
  const imagesListRef = ref(storage, "images/");
  const [listOfImagesUrl, setListOfImagesUrl] = useState<string[]>([]);
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setListOfImagesUrl((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return (
    <div className="px-8 py-4 w-[85%] min-h-screen">
      <p className="text-3xl py-4">Preview</p>
      <div className="flex flex-wrap gap-2">
        {listOfImagesUrl.map((url, index) => (
          <Image key={index} url={url} />
        ))}
      </div>
    </div>
  );
};
export default Gallery;
