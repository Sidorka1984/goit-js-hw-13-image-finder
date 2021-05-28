// import temtlateImage from './templates/templateImage.hbs'
import './sass/main.scss';
import './js/serch-gallery';
// import NewsApiService from './js/apiService';
// import LoadMoreBtn from './js/components/load-more-btn';
// import { info, error } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';


// // const options = {
// //     headers: {
// //         Authorization: '21751714-0d98bde39df4a5d3fa6697446',
// //     },
// // }
// const refs = {
//     searchForm: document.querySelector('.js-search-form'),
//     articlesContainer: document.querySelector('.js-articles-container'),
//     // loadMoreBtn: document.querySelector('[data-action="load-more"]')
// };
// const loadMoreBtn = new LoadMoreBtn({
//     selector: '[data-action="load-more"]',
//     hidden: true,
// });
// const newApiService = new NewsApiService();
// // console.log(loadMoreBtn);


// // console.log(newApiService);

// refs.searchForm.addEventListener('submit', onSearch);
// loadMoreBtn.refs.button.addEventListener('click', onLoadMore);


 
// function onSearch(e){
//     e.preventDefault();

//     clearArticlesContainer();

//     newApiService.query = e.currentTarget.elements.query.value;
//     if (newApiService.query.trim() === '') {
//         loadMoreBtn.hide();
//         return info({
//             text: 'Please, try again',
//             delay: 1500,
//             closerHover: true,
//         });
//     }
//     loadMoreBtn.show();
//     newApiService.resetPage();
//     clearArticlesContainer();
//     fetchArticles();
   
// }


// function fetchArticles() {
//     loadMoreBtn.disable();
//     return newApiService.fetchArticles().then(hits => {
//         setTimeout(() => {
//             appendHitsMakup(hits);
//             loadMoreBtn.enable();
//             if (hits.length === 0) {
//                 loadMoreBtn.hide();
//                 error({
//                     text: 'Please enter a valid request',
//                     delay: 1500,
//                     closerHover: true,
//                 });
//             }
//         }, 200);
//     })       
       
// }
//  function onLoadMore() {
//   fetchArticles()
//     .then(
//       setTimeout(() => {
//         window.scrollBy({
//           top: document.documentElement.clientHeight - 80,
//           behavior: 'smooth',
//         });
//       }, 2000),
//     )
//     .catch(error => console.log(error));
// }
// function appendHitsMakup(hits) {
//     refs.articlesContainer.insertAdjacentHTML('beforeend', temtlateImage(hits));
     
//  }
 
//  function clearArticlesContainer() {
//      refs.articlesContainer.innerHTML = '';
// }
