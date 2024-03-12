import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

const ImageSlider = ({ url, page = 1, limit = 5 }) => {
  const [images, setimages] = useState([]);
  const [currentslide, setcurrentslide] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errormsg, seterrormsg] = useState(null);

  async function fetchimage(geturl) {
    try {
      setLoading(true);
      const resp = await fetch(`${geturl}?page=${page}&limit=${limit}`);

      const data = await resp.json();

      if (data) {
        setimages(data);
        setLoading(false);
      }
    } catch (e) {
      seterrormsg(e.message);
    }
  }
  useEffect(() => {
    if (url !== "") {
      fetchimage(url);
    }
  }, [url]);

  console.log(images);

  if (loading) {
    <div>LOading the data !! Please wait</div>;
  }

  if (errormsg !== null) {
    return <div>Error Occured! {errormsg}</div>;
  }

  function handlePrev() {
    setcurrentslide(currentslide === 0 ? images.length - 1 : currentslide - 1);
  }

  function handleNext() {
    setcurrentslide(currentslide === images.length - 1 ? 0 : currentslide + 1);
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        className="arrow arrow-left"
      />
      {images.map((imagesitem, index) => (
        <img
          key={imagesitem.id}
          alt={imagesitem.download_url}
          src={imagesitem.download_url}
          className={
            currentslide === index
              ? "current-image"
              : "current-image hide-current-image"
          }
        />
      ))}

      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />

      <span className="circle-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={
              currentslide === index
                ? "current-indicator"
                : "current-indicator inactive-indicator"
            }
            onClick={() => {
              setcurrentslide(index);
            }}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default ImageSlider;
