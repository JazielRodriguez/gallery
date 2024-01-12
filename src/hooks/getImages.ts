import { app } from "../firebase/client";
import { getStorage, ref, listAll } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";

export async function getImages(): Promise<string[]> {
  const appStorage = getStorage(app);
  const imagesListRef = ref(appStorage, "images/");
  const listOfImages: string[] = [];

  try {
    const response = await listAll(imagesListRef);

    for await (const item of response.items) {
      const url = await getDownloadURL(item);
      listOfImages.push(url);
    }
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }

  return listOfImages;
}
