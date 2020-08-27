'use strict';
const { all = '', keyword = '' } = document.getQueryParameters();
let ref = database.ref('article');
keyword === ''
  ? (all !== 'all' && (ref = ref.limitToLast(4)))
  : YFoSPTA3.innerHTML += `<li class = 'q6kpK1jH'><a class = 'TnBfB6P0' href = '/?keyword=${keyword}'><span>検索結果: ${keyword}</span></a></li>`;
ref.once('value', snapshot => {
	const val = snapshot.val() ?? {};
	Object.keys(val)
      .filter(key => (keyword === '' || String(val[key].title).includes(keyword)))
      .forEach(createListItem, val);
	dismissDialog();
}).catch(console.error);
