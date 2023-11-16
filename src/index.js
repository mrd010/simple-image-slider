import 'material-symbols/outlined.css';
import './styles/DropDownMenu.scss';
import './styles/ImageSlider.scss';
import './styles/main.scss';

import img1 from './img/635d74677747f.jpg';
import img2 from './img/1920x1080-px-action-adventure-Earth-fantasy-lord-1595123-wallhere.com.jpg';
import img3 from './img/abstract-digital-art-wallpaper-diabolica-463.jpg';
import img4 from './img/lord-of-the-rings-landscape-wallpapers-1080p-For-Desktop-Wallpaper.jpg';
import img5 from './img/mass-effect-ascension-wallpaper-176.jpg';
import img6 from './img/space-planet-digital-art-471.jpg';
import img7 from './img/wallpapersden.com_the-lord-of-the-rings-rise-to-war-hd-2021_1920x1080.jpg';
import img8 from './img/watch-dogs-legion-logo-anonymous-492.jpg';

import { DropDownMenu, ImageSlider } from './MyLibrary';

const myMenu = new DropDownMenu();
myMenu.addMenuItem('Home');
myMenu.addMenuItem('Gallery');
myMenu.addMenuItem('Wallpaper Sites');
myMenu.addMenuItem('About');
myMenu.addSubMenuItem('Wallpaper Sites', 'Wallpapers Wide', 'https://wallpaperswide.com/');
myMenu.addSubMenuItem('Wallpaper Sites', 'Upsplash', 'https://unsplash.com/wallpapers/');
myMenu.addSubMenuItem('Wallpaper Sites', 'Wallpaper Flare', 'https://www.wallpaperflare.com/');

document.body.appendChild(myMenu.getDOM());

const myImageSlider = new ImageSlider(5000);

const IMGS = [img1, img2, img3, img4, img5, img6, img7, img8];

IMGS.forEach((imageUrl) => {
  myImageSlider.addImage(
    (() => {
      const img = new Image();
      img.src = imageUrl;
      return img;
    })()
  );
});

console.log(myImageSlider);

document.body.appendChild(myImageSlider.getDOM());
