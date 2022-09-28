import React, { useState } from 'react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage]=useState({
    show : false,
    src : ""
  })

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  const handleModal = ()=>{
    setModal(!modal)
  }
  const handleImageModal = (e)=>{
    setModalImage({
      show : true, //menampilkan image modalnya
      src : e.target.src //untuk mengambil data src pada gambar yang diclick
    })
  }
  //kondisi ketika loading bernilai true
  if (loading) {
    return <div className="loading_screen">Loading Please Wait...</div>;
  }
  // modal
  return (
    <>
      {modal && (
        <div className="modal">
          <h1>Hello Modal</h1>
          <button onClick={handleModal}>Open Modal</button>
        </div>
      )}

      {modalImage.show && (
        <div className="modal">
          <img src={modalImage.src} alt="" />
          <button onClick={()=>{
            setModalImage({
              show : false,
              src : ""
            })
          }}>close image modal</button>
        </div>
      )}

      <div>
        <h1>Hello react App</h1>
        <button onClick={handleModal}>tutup Modal</button>
      </div>

      <div className="image_wrapper">
        <img src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=500" alt="" onClick={handleImageModal} />

        <img src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=500" alt="" onClick={handleImageModal} />

        <img src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=500" alt="" onClick={handleImageModal} />

      </div>
    </>
  );
}
