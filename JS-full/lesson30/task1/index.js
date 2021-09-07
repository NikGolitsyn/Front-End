// input imgage source, callback function
// output none

// algo
// create promise
// 1 create an img element
// 2 set source and add it to our page
// 3 add eventListener function after load
// 4 add eventListener in case of 'error'

export const addImage = imgSrc => {
  const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };

    const onError = () => {
      const error = new Error('Image load is failed...');
      reject(error);
    };

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', onError);
  });
  return p;
};

const imgSrc =
  'https://p.bigsstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

const resultPromise = addImage(imgSrc);
// resultPromise.then(data => console.log(data));
resultPromise.catch(error => console.log(error));

// examples
// addImage(
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
//   onImageLoaded,
// );
// addImage(
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596',
//   onImageLoaded,
// );
// addImage(
//   '',
//   onImageLoaded,
// );
