
import { useEffect, useState } from 'react';
import ButLink from './ButLink'
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
export default function Pics({setIsPics}) {
    const [images, setImages] = useState([]);

    const storage = getStorage();


    const imagesRef = ref(storage, "image");


    const fetchImages = async () => {
        try {
          const listResult = await listAll(imagesRef);
          const images = await Promise.all(
            listResult.items.map(async (itemRef) => {
              const downloadURL = await getDownloadURL(itemRef);
              return downloadURL;
            })
          );
          return images;
        } catch (error) {
          console.error('Error fetching images:', error);
          return [];
        }
      };
      

  useEffect(() => {
    const fetchAndSetImages = async () => {
      const fetchedImages = await fetchImages();
      setImages(fetchedImages);
    };

    fetchAndSetImages();
  }, []);

  return (
    <div style={{padding: '10px' }}>
      <div style={{height: '80vh', overflowY: 'scroll', borderTop: '4px solid #662222', borderBottom: '4px solid #662222' }}>
        {images.map((imageURL, index) => (
          <img
            key={index}
            src={imageURL}
            alt={`Image ${index}`}
            style={{ border: '4px solid #662222', bourderBottom: '0px' }}
          />
        ))}
      </div>
      <br/>
      <ButLink rout="/" text="Home" setIsPics={setIsPics}/>
    </div>
  );
}