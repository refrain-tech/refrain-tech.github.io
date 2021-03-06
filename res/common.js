'use strict';
function createListItem (key) {
  const { category = 'other', image = '/res/favicon.png', title = '', url = '' } = this[key];
  c6JO6k62.innerHTML += `<section class = 'W1JhWxuv'><a category = ${category} class = 'TVOxHpZ9' href = ${url === '' ? `/article/?category=${category}&key=${key}` : url} target = '_new'><span class = 'eFcynxxU'>${title}</span><div class = 'RaWchbnJ'><img class = 'WaWu7Va9' src = ${image} /></div></a></section>`;
}
function dismissDialog () {
  MsDGo7Eg.style.display = 'none';
  m7eOG5wP.style.animation = 'none';
}
mWYXHFlu.addEventListener('keydown', event => {
  switch (event.keyCode) {
    case 13:
      location.href = `/?keyword=${mWYXHFlu.value}`;
      event.preventDefault();
      break;
  }
});
SYaLdKxJ.addEventListener('click', event => location.href = `/?keyword=${mWYXHFlu.value}`);
const categories = {
  article: '記事',
  content: 'コンテンツ',
  service: 'サービス',
  other: 'その他'
};
let { theme } = document.getQueryParameters();
if (theme !== 'dark') theme = 'light';
document.documentElement.setAttribute('theme', `${theme}-theme`);
