import temtlateImage from './templates/templateImage.hbs'
import './sass/main.scss';
import NewsApiService from './js/apiService';
import LoadMoreBtn from './js/components/load-more-btn'

// const options = {
//     headers: {
//         Authorization: '21751714-0d98bde39df4a5d3fa6697446',
//     },
// }
const refs = {
    searchForm: document.querySelector('.js-search-form'),
    articlesContainer: document.querySelector('.js-articles-container'),
    // loadMoreBtn: document.querySelector('[data-action="load-more"]')
};
const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});
const newApiService = new NewsApiService();
console.log(loadMoreBtn);


console.log(newApiService);

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);


 
function onSearch(e){
    e.preventDefault();

    clearArticlesContainer();

    newApiService.query = e.currentTarget.elements.query.value;
    if (newApiService.query === '') {
        return alert('Please try again');
    }
    loadMoreBtn.show();
    newApiService.resetPage();
    clearArticlesContainer();
    fetchArticles();
   
}


function fetchArticles() {
        loadMoreBtn.disable();
     newApiService.fetchArticles().then(hits => {
        
        appendHitsMakup(hits);
        loadMoreBtn.enable();
    });
}
function appendHitsMakup(hits) {
    refs.articlesContainer.insertAdjacentHTML('beforeend', temtlateImage(hits));
     
 }
 
 function clearArticlesContainer() {
     refs.articlesContainer.innerHTML = '';
 }