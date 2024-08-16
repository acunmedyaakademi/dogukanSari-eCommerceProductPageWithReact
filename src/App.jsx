import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Container />
    </>
  )
}

function Header() {

  return(
    <header>
      <div className="navBar">
        <a href="#"><img src="/images/logo.png" alt="Marka Logo" /></a>
        <ul>
          <li>Koleksiyon</li>
          <li>Erkek</li>
          <li>Kadın</li>
          <li>Hakkımızda</li>
          <li>İletişim</li>
        </ul>
      </div>
      <div className="boxAndPicture"> 
        <button><img src="/images/basketLogo.svg" alt="Alışveriş Sepeti Logosu" /></button>
        <img src="/images/profilePic.png" alt="Profile Picture" />
      </div> 
    </header>
  )
}

function Container() {
  const [cemilOlabilirMi, setCemilOlabilirMi] = useState(0);

  const [id, setId] = useState(0);

  function generateId() {
    setId(id + 1);
    return id;
  }

  function createBasketHtml(product) {
    return `
      <li>
        <img src="../images/productImage1.png" alt="" />
        <div className="urundetails">
          <p>${product.name}</p>
          <p><span>${product.price} x${product.count}</span><span>$${product.totalCount}.00</span></p>
        </div>
        <button className="deleteBtn"><img src="../images/trashBin.svg" alt="" /></button>
      </li>
    `
  }

  function addToBasket() {

    const addedProduct = [];

    addedProduct.push({
      id: generateId(),
      name: "Sonbahar'da Sınırlı Sayıda Üretilen Spor Ayakkabılar",
      price: 125,
      count: count,
      totalCount: count * 125,
    });

    document.querySelector('.basketList').innerHTML += addedProduct.map(x => createBasketHtml(x)).join('');
  }

  const imagesArray = [
    { url: "/images/productImage1.png" },
    { url: "/images/productImage2.png" },
    { url: "/images/productImage3.png" },
    { url: "/images/productImage4.png" },
  ];

  function prevImg() {
    setCemilOlabilirMi((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  }

  function nextImg() {
    setCemilOlabilirMi((prevIndex) => (prevIndex < imagesArray.length - 1 ? prevIndex + 1 : prevIndex));
  }

  function handleModal() {
    const modal = document.querySelector('.modal');
    modal.showModal();
  }

  const [count, setCount] = useState(0);

  function counterPlus() {
    setCount(count + 1);
  }

  function counterMinus() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <div className="basket">
        <h1>Sepet</h1>
        <hr />
        <ul className='basketList'>
          Sepetiniz Boş
        </ul>
      </div>
      
      <div className="imageContainer">
        <div className="bigImage">
          <img onClick={handleModal} src="../images/productImage1.png" alt="Product Image" />
        </div>
        <div className="smallerImages">
          <img src="../images/productImage1.png" alt="Product Image 1" />
          <img src="../images/productImage2.png" alt="Product Image 2" />
          <img src="../images/productImage3.png" alt="Product Image 3" />
          <img src="../images/productImage4.png" alt="Product Image 4" />
        </div>
      </div>

      <dialog className="modal">
        <div className="dialogContainer">
          <div className="bigImageDialog">
            <button className="prev" onClick={prevImg}>
              <img src="/images/buttonLeft.png" alt="Button Left" />
            </button>
            <img src={imagesArray[cemilOlabilirMi].url} alt="Product Image" />
            <button className="next" onClick={nextImg}>
              <img src="/images/buttonRight.png" alt="Button Right" />
            </button>
          </div>
          <div className="smallerImagesDialog">
            <img src="../images/productImage1.png" alt="Product Image 1" />
            <img src="../images/productImage2.png" alt="Product Image 2" />
            <img src="../images/productImage3.png" alt="Product Image 3" />
            <img src="../images/productImage4.png" alt="Product Image 4" />
          </div>
        </div>
      </dialog>

      <div className="containerContent">
        <h3>Spor Ayakkabı Şirketi</h3>
        <h1>Sonbahar'da Sınırlı Sayıda Üretilen Spor Ayakkabılar</h1>
        <p>Bu düşük profilli spor ayakkabılar günlük giyim için mükemmel bir arkadaştır. Dayanıklı kauçuk dış tabana sahip olan bu ayakkabılar, havanın sunabileceği her şeye dayanacaktır.</p>
        <p className="price">$125 <span>50%</span></p>
        <p style={{ textDecoration: 'line-through', color: '#B6BCC8', fontSize: 16, marginBottom: 32 }}>$250</p>
        <div className="contentButtons">
          <div className="addAndReduce">
            <button onClick={counterMinus}><img src="../images/minus.png" alt="" /></button>
            <p>{count}</p>
            <button onClick={counterPlus}><img src="../images/plus.svg" alt="" /></button>
          </div>
          <div className="addToBasket">
            <button onClick={addToBasket}><img src="../images/basketLogo.svg" alt="Basket Logo" />Sepete Ekle</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
