import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { ligtboxSpinn } from './spinner';
import 'spin.js/spin.css';

function onContainerClick(event) {
    event.preventDefault();
    if (event.target.nodeName != 'IMG') {
        return;
    }
    const ChangeImg = `<img class = "basiclightbox-img" src=${event.target.dataset.source} alt="${event.target.alt}" />`;
    const instance = basicLightbox.create(ChangeImg);
    instance.show();
    const lightboxEl = instance.element();
    const modalSpin = ligtboxSpinn.spin(lightboxEl);
    const basiclightboxImg = document.querySelector('.basiclightbox-img');

    basiclightboxImg.addEventListener('load', e => {
        modalSpin.stop();
    });
    // event.target.onload = () => modalSpinner.stop();
}
export { onContainerClick };