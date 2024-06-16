$('.header-page').load('header.html');
$('.footer-page').load('footer.html');

// 嘗試從前端傳遞資料到後端，請後端至資料庫撈取相應的資料
// function getInfo(e) {
//     let xhr = new XMLHttpRequest();
//     xhr.open('POST', 'http://localhost/AIpartners.php');
//     xhr.onreadystatechange = (() => {
//         if (xhr.readyState == 4 && xhr.status == 200){
//             console.log('ok');
//             // let response = JSON.parse(xhr.responseText);
//         }else{
//             console.log('error');
//         }
//     })
//     xhr.setRequestHeader("Content-Type","Application/json;charset=utf-8");
//     xhr.send(e);
// }

// window.addEventListener('load',(()=>{
//     let partner_appearance = localStorage.getItem('partnerAppearance');
//     getInfo(partner_appearance);
// }))

function getInfo() {
    let partner_appearance = localStorage.getItem('partnerAppearance');
    fetch('http://127.0.0.1/AIpartners.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: partner_appearance
    }).then((response) => {
        console.log('success');
        return response.json();
    }).then((res) => {
        console.log(res);
        // let partner_appearance = localStorage.getItem('partnerAppearance');
        // let partnerAppearanceArr = JSON.parse(partner_appearance);

        let photo = document.getElementById('photo');
        let interactivePartnerPhoto = document.getElementById('interactive-partner-photo')

        photo.innerHTML = `<img src='data:image/png;base64, ${res}' alt=''>`
        interactivePartnerPhoto.innerHTML =
            `<img src="data:image/png;base64, ${res}" alt="" class="rounded-circle flex-shrink-0">`

        // for (i = 0; i < 16; i++) {
        //     if (partnerAppearanceArr.toString() == res['appearance'][i].toString()) {
        //         photo.innerHTML = `<img src='data:image/png;base64, ${res['image'][i]}' alt=''>`
        //         interactivePartnerPhoto.innerHTML =
        //             `<img src="data:image/png;base64, ${res['image'][i]}" alt="" class="rounded-circle flex-shrink-0">`
        //     }
        // }
    })
}

window.onload = () => {
    getInfo();
}



let partner_name = localStorage.getItem('partnerName');
let partner_trait = localStorage.getItem('partnerTrait');
let partnerTraitArr = JSON.parse(partner_trait);
// let partner_appearance = localStorage.getItem('partnerAppearance');
// let partnerAppearanceArr = JSON.parse(partner_appearance);
// console.log(partnerTraitArr);
console.log(partnerAppearanceArr);

// 基本資料：姓名
let partnerName = document.getElementById('partner-name');
partnerName.innerText = partner_name;
let interactivePartnerName = document.getElementById('interactive-partner-name')
interactivePartnerName.innerText = partner_name;
// 基本資料：圖片
// let photoSrc = [
//     'partners_photo/0000.jpg',
//     'partners_photo/0001.jpg',
//     'partners_photo/0010.jpg',
//     'partners_photo/0011.jpg',
//     'partners_photo/0100.jpg',
//     'partners_photo/0101.jpg',
//     'partners_photo/0110.jpg',
//     'partners_photo/0111.jpg',
//     'partners_photo/1000.jpg',
//     'partners_photo/1001.jpg',
//     'partners_photo/1010.jpg',
//     'partners_photo/1011.jpg',
//     'partners_photo/1100.jpg',
//     'partners_photo/1101.jpg',
//     'partners_photo/1110.jpg',
//     'partners_photo/1111.jpg',
// ]
// let photo = document.getElementById('photo');
// let interactivePartnerPhoto = document.getElementById('interactive-partner-photo')

// if (partnerAppearanceArr.toString() == ['毛絨可愛', '大眼睛', '大耳朵', '身強體壯'].toString()) {
//     photo.innerHTML = `<img src='${photoSrc[0]}' alt=''>`
//     interactivePartnerPhoto.innerHTML =
//         `<img src="${photoSrc[0]}" alt="" class="rounded-circle flex-shrink-0">`
// } else if (partnerAppearanceArr.toString() == ['毛絨可愛', '大眼睛', '大耳朵', '瘦小可愛'].toString()) {
//     photo.innerHTML = `<img src='${photoSrc[1]}' alt=''>`
//     interactivePartnerPhoto.innerHTML =
//         `<img src="${photoSrc[1]}" alt="" class="rounded-circle flex-shrink-0">`
// } else if (partnerAppearanceArr.toString() == ['毛絨可愛', '大眼睛', '小耳朵', '身強體壯'].toString()) {
//     photo.innerHTML = `<img src='${photoSrc[2]}' alt=''>`
//     interactivePartnerPhoto.innerHTML =
//         `<img src="${photoSrc[2]}" alt="" class="rounded-circle flex-shrink-0">`
// } else if (partnerAppearanceArr.toString() == ['毛絨可愛', '大眼睛', '小耳朵', '瘦小可愛'].toString()) {
//     photo.innerHTML = `<img src='${photoSrc[3]}' alt=''>`
//     interactivePartnerPhoto.innerHTML =
//         `<img src="${photoSrc[3]}" alt="" class="rounded-circle flex-shrink-0">`
// } else if (partnerAppearanceArr.toString() == ['毛絨可愛', '小眼睛', '大耳朵', '身強體壯'].toString()) {
//     photo.innerHTML = `<img src='${photoSrc[4]}' alt=''>`
//     interactivePartnerPhoto.innerHTML =
//         `<img src="${photoSrc[4]}" alt="" class="rounded-circle flex-shrink-0">`
// } else if (partnerAppearanceArr.toString() == ['毛絨可愛', '小眼睛', '大耳朵', '瘦小可愛'].toString()) {
//     photo.innerHTML = `<img src='${photoSrc[5]}' alt=''>`
//     interactivePartnerPhoto.innerHTML =
//         `<img src="${photoSrc[5]}" alt="" class="rounded-circle flex-shrink-0">`
// } else if (partnerAppearanceArr.toString() == ['毛絨可愛', '小眼睛', '小耳朵', '身強體壯'].toString()) {
//     photo.innerHTML = `<img src='${photoSrc[6]}' alt=''>`
//     interactivePartnerPhoto.innerHTML =
//         `<img src="${photoSrc[6]}" alt="" class="rounded-circle flex-shrink-0">`
// } else if (partnerAppearanceArr.toString() == ['毛絨可愛', '小眼睛', '小耳朵', '瘦小可愛'].toString()) {
//     photo.innerHTML = `<img src='${photoSrc[7]}' alt=''>`
//     interactivePartnerPhoto.innerHTML =
//         `<img src="${photoSrc[7]}" alt="" class="rounded-circle flex-shrink-0">`
// } else if (partnerAppearanceArr.toString() == ['現代機械', '大眼睛', '大耳朵', '身強體壯'].toString()) {
//     photo.innerHTML = `<img src='${photoSrc[8]}' alt=''>`
//     interactivePartnerPhoto.innerHTML =
//         `<img src="${photoSrc[8]}" alt="" class="rounded-circle flex-shrink-0">`
// } else if (partnerAppearanceArr.toString() == ['現代機械', '大眼睛', '大耳朵', '瘦小可愛'].toString()) {
//     photo.innerHTML = `<img src='${photoSrc[9]}' alt=''>`
//     interactivePartnerPhoto.innerHTML =
//         `<img src="${photoSrc[9]}" alt="" class="rounded-circle flex-shrink-0">`
// } else if (partnerAppearanceArr.toString() == ['現代機械', '大眼睛', '小耳朵', '身強體壯'].toString()) {
//     interactivePartnerPhoto.innerHTML =
//         `<img src="${photoSrc[10]}" alt="" class="rounded-circle flex-shrink-0">`
//     photo.innerHTML = `<img src='${photoSrc[10]}' alt=''>`
// } else if (partnerAppearanceArr.toString() == ['現代機械', '大眼睛', '小耳朵', '瘦小可愛'].toString()) {
//     photo.innerHTML = `<img src='${photoSrc[11]}' alt=''>`
//     interactivePartnerPhoto.innerHTML =
//         `<img src="${photoSrc[11]}" alt="" class="rounded-circle flex-shrink-0">`
// } else if (partnerAppearanceArr.toString() == ['現代機械', '小眼睛', '大耳朵', '身強體壯'].toString()) {
//     photo.innerHTML = `<img src='${photoSrc[12]}' alt=''>`
//     interactivePartnerPhoto.innerHTML =
//         `<img src="${photoSrc[12]}" alt="" class="rounded-circle flex-shrink-0">`
// } else if (partnerAppearanceArr.toString() == ['現代機械', '小眼睛', '大耳朵', '瘦小可愛'].toString()) {
//     photo.innerHTML = `<img src='${photoSrc[13]}' alt=''>`
//     interactivePartnerPhoto.innerHTML =
//         `<img src="${photoSrc[13]}" alt="" class="rounded-circle flex-shrink-0">`
// } else if (partnerAppearanceArr.toString() == ['現代機械', '小眼睛', '小耳朵', '身強體壯'].toString()) {
//     photo.innerHTML = `<img src='${photoSrc[14]}' alt=''>`
//     interactivePartnerPhoto.innerHTML =
//         `<img src="${photoSrc[14]}" alt="" class="rounded-circle flex-shrink-0">`
// } else {
//     photo.innerHTML = `<img src='${photoSrc[15]}' alt=''>`
//     interactivePartnerPhoto.innerHTML =
//         `<img src="${photoSrc[15]}" alt="" class="rounded-circle flex-shrink-0">`
// }
// 基本資料：特質敘述
let info = document.getElementById('info');
info.innerHTML = ` 
<p class='fs-5 m-0'> ${partner_name} ，是一位${partnerAppearanceArr[0]}風格 、 具有${partnerAppearanceArr[1]} 、 ${partnerAppearanceArr[2]}的${partnerAppearanceArr[3]}寵物！
    個性${partnerTraitArr[0]} 、 ${partnerTraitArr[1]} 、 ${partnerTraitArr[2]} ，而且喜愛${partnerTraitArr[3]}！ </p>
`
// 特質決定回應句子
let feedback = [];
if (partnerTraitArr[0] == '活潑') {
    feedback[0] = '耶！我最喜歡您！'
} else {
    feedback[0] = '謝謝您總是協助我'
}
if (partnerTraitArr[1] == '理性') {
    feedback[1] = '請提供我必要協助'
} else {
    feedback[1] = '謝謝您，我好感動'
}
if (partnerTraitArr[2] == '謹慎') {
    feedback[2] = '小心點，別受傷了'
} else {
    feedback[2] = '超刺激！我喜歡！'
}
if (partnerTraitArr[3] == '戶外活動') {
    feedback[3] = '帶我去戶外走走吧'
} else {
    feedback[3] = '我們一起待在家吧'
}
// console.log(feedback);

// 設定成就區域顯示進度條及給予隨機回應
let behaviors = ['關心', '零用錢', '稱讚', '餵食', '喝水', '洗澡', '玩耍', '散步', '廁所']
let cardTimes = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let achi = document.getElementById('achi')
let interactivePartnerFeedback = document.getElementById('interactive-partner-feedback')

function progressBarWidth(e) {
    let n = behaviors.indexOf(e.innerText)
    let progressBar = document.getElementsByClassName('progress-bar')
    let achievementProgress = document.getElementsByClassName('achievement-progress')
    cardTimes[n] += 1
    achievementProgress[n].style.display = 'block'
    setTimeout(() => {
        achievementProgress[n].style.display = 'none'
    }, 1000)
    progressBar[n].style.width = cardTimes[n] * 20 + '%'
    let randomNum = Math.floor(Math.random() * feedback.length)
    interactivePartnerFeedback.innerHTML += `
                <div class="d-flex justify-content-between">
                    <div class="ms-5 position-relative">
                        <p class="partner-text textFeedback">${feedback[randomNum]}</p>
                    </div>
                </div>
                `
    // 讓對話框滑到最下面
    interactivePartnerFeedback.scrollTo(0, interactivePartnerFeedback.scrollHeight)
    // 隨機回應句子
    let textFeedback = document.querySelectorAll('.textFeedback')
    setTimeout(() => {
        textFeedback[0].classList.remove('textFeedback')
    }, 1000)
    let sum = 0
    cardTimes.forEach((x) => {
        sum += x
    })
    let liveModal = document.querySelector('#liveModal')
    // 彈跳視窗
    const modal = new bootstrap.Modal(liveModal)
    if (sum == 3) {
        modal.show()
    }
}

// 偵測點擊互動，觸發function
let optionsBehaviors = document.querySelectorAll('.optionsBehaviors')
for (let i = 0; i < behaviors.length; i++) {
    optionsBehaviors[i].addEventListener('click', function () {
        progressBarWidth(this)
    })
}

// 清空localStorage，正式版記得刪掉
// let btnClear = document.getElementById('clear')
// btnClear.addEventListener('click', function () {
//     console.log(clear)
//     localStorage.setItem('partnerTrait', null)
//     localStorage.setItem('partnerAppearance', null)
//     localStorage.setItem('partnerName', null)
//     localStorage.setItem('shoppingList', null)
//     localStorage.setItem('monthPlan', null)
// })