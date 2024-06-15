$('.header-page').load('header.html');
$('.footer-page').load('footer.html');

// 儲存特質總表
let traitList = ['活潑', '安靜', '感性', '理性', '謹慎', '挑戰', '戶外活動', '居家生活'];
let traitListStr = JSON.stringify(traitList);
localStorage.setItem('trait', traitListStr);
// 儲存外表總表
let appearanceList = ['毛絨可愛', '現代機械', '大眼睛', '小眼睛', '大耳朵', '小耳朵', '身強體壯', '瘦小可愛'];
let appearanceListStr = JSON.stringify(appearanceList);
localStorage.setItem('appearance', appearanceListStr);