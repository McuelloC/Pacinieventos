import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import GaleryIMG from '../../assets/images/Galery/GaleryIMG';


const imagenes = [
    GaleryIMG.Gallery1,
    GaleryIMG.Gallery2,
    GaleryIMG.Gallery3,
    GaleryIMG.Gallery4,
    GaleryIMG.Gallery5,
    GaleryIMG.Gallery6,
    GaleryIMG.Gallery7,
    GaleryIMG.Gallery8,
    GaleryIMG.Gallery9,
    GaleryIMG.Gallery10,
    GaleryIMG.Gallery11,
    GaleryIMG.Gallery12,
    GaleryIMG.Gallery13,
    GaleryIMG.Gallery14,
    GaleryIMG.Gallery15,
    GaleryIMG.Gallery16,
    GaleryIMG.Gallery17,
    GaleryIMG.Gallery18,
  ];
const ImageGallery = () => {
  const [data, setData] = useState({  i: 0 });

  const viewImage = (i) => {
    setData({ i });
    console.log(i)
    
  };

  const HandleImage = (action) => {
    setData((prevData) => {
      let i = prevData.i;
      if (action === 'next') {
        i = i + 1 < imagenes.length ? i + 1 : 0;
      }
      if (action === 'previous') {
        i = i - 1 >= 0 ? i - 1 : imagenes.length - 1;
      }
      return { ...prevData, i }
    });
  };

  return (
    <>
      {data.i !== 0 && (
        <div
        style={{
            width: '100%',
            height: '100vh',
            background: 'black',
            position: 'fixed',
            top: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'auto',
            zIndex:"5",
          }}
        >
          <button
            style={{
              position: 'absolute',
              top: '10px',
              right: '30px',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '25px',
            }}
            onClick={() => viewImage(0)}
          >
            X
          </button>
          <button
            style={{
              fontSize: '40px',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
            }}
            onClick={() => HandleImage('previous')}
          >
            <i className="bi bi-arrow-left-circle"></i>
          </button>
          <img
            src={GaleryIMG[`Gallery${data.i}`]}
            style={{ width: 'auto', maxWidth: '90%', maxHeight: '90%' }}
            alt=""
          />
          <button
            style={{
              fontSize: '40px',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
            }}
            onClick={() => HandleImage('next')}
          >
            <i className="bi bi-arrow-right-circle"></i>
          </button>
        </div>
      )}
      <div style={{ padding: '10px', marginTop: '25%' }}>
        <h1
          style={{
            fontSize: '3.5rem',
            fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
            color: 'white',
            marginLeft: '30%',
          }}
        >
          GALERIA DE IMAGENES
        </h1>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter="20px">
            {imagenes.map((imagen, i) => (
              <img
                key={i}
                src={imagen}
                style={{
                  width: '100%',
                  height: '300px',
                  display: 'block',
                  cursor: 'pointer',
                }}
                alt=""
                onClick={() => viewImage(i+1)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export { ImageGallery };
