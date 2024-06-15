$('.header-page').load('header.html');
$('.footer-page').load('footer.html');

// 取得特質、外表選項總表
let traitListStr = localStorage.getItem('trait');
let traitList = JSON.parse(traitListStr);
let appearanceListStr = localStorage.getItem('appearance');
let appearanceList = JSON.parse(appearanceListStr);

// 設定戶已選列表
let traitArr = [];
let appearanceArr = [];

// 網頁初始內容
let makeContent = document.getElementById('make-content');
makeContent.innerHTML = `
        <div class='col-12 col-md-5'>
            <input type="radio" id="appearance-left" name='option' class="col-6 radioOption" value='${appearanceList[0]}'>
            <label for='appearance-left' id='appearance-left' class='radioLabel'>${appearanceList[0]}</label>
        </div>
        <p class='col-12 col-md-2 orContent'>或是</p>
        <div class='col-12 col-md-5'>
            <input type="radio" id="appearance-right" name='option' class="col-6 radioOption" value='${appearanceList[1]}'>
            <label for='appearance-right' id='appearance-right' class='radioLabel'>${appearanceList[1]}</label>
        </div>
`

// 偵測選擇次數控制腳印進度條
let cTimes = 0
let footDivI = document.querySelectorAll('.footDivI')

function chooseTimes() {
    if (footDivI[cTimes]) {
        footDivI[cTimes].style = 'color:var(--highlight-text);'
    }
    cTimes += 1
}

// 已選外表選項，放入已選陣列，並呈現在已選區域
function appearanceCardContent() {
    for (let i = 0; i < appearanceArr.length; i++) {
        let appearanceCard = document.querySelectorAll('.appearanceCard')
        appearanceCard[i].innerText = appearanceArr[i]
        appearanceCard[i].classList += 'checkedOption '
        appearanceCard[i].classList.add('checkedAppearance')
        for (let j = 0; j < i; j++) {
            appearanceCard[j].classList.remove('checkedAppearance')
        }
    }
}
// 已選特質選項，放入已選陣列，並呈現在已選區域
function traitCardContent() {
    for (let i = 0; i < traitArr.length; i++) {
        let traitCard = document.querySelectorAll('.traitCard')
        traitCard[i].innerText = traitArr[i]
        traitCard[i].classList += 'checkedOption'
        traitCard[i].classList.add('checkedTrait')
        for (let j = 0; j < i; j++) {
            traitCard[j].classList.remove('checkedTrait')
        }
    }
}


// 第一階段：選擇外表選項，選項翻頁，將已選選項放入已選陣列並儲存，剪影會隨機變換
let appearanceLeft = document.getElementById('appearance-left')
let appearanceRight = document.getElementById('appearance-right')
let blindImgSrc = ['./nobackgroundIMG/1011.nobg.png', './nobackgroundIMG/0111.nobg.png', './nobackgroundIMG/0110.nobg.png',
    './nobackgroundIMG/1010.nobg.png', './nobackgroundIMG/1100.nobg.png', './nobackgroundIMG/1101.nobg.png',
    './nobackgroundIMG/0010.nobg.png', './nobackgroundIMG/1011.nobg.png', './nobackgroundIMG/0011.nobg.png'
]
let blindImg = document.getElementById('blindImg')

// 設定選擇區域翻頁效果
function addFlipCard() {
    let radioLabel = document.querySelectorAll('.radioLabel')
    radioLabel[0].classList.add('radioLabelFlip')
    radioLabel[1].classList.add('radioLabelFlip')
}

function removeFlipCard() {
    let radioLabel = document.querySelectorAll('.radioLabel')
    radioLabel[0].classList.remove('radioLabelFlip')
    radioLabel[1].classList.remove('radioLabelFlip')
}
// 設定已選選項放入陣列並儲存
function appearanceFlip(e) {
    let k = appearanceList.indexOf(e.value)
    if (k == appearanceList.length - 1 || k == appearanceList.length - 2) {
        appearanceArr.push(appearanceList[k])
        let appearanceArrStr = JSON.stringify(appearanceArr);
        localStorage.setItem('partnerAppearance', appearanceArrStr);
        addFlipCard()
        setTimeout(() => {
            removeFlipCard()
        }, 500)
        traitPart()
        appearanceCardContent()
    } else {
        appearanceArr.push(appearanceList[k])
        e.value = `${appearanceList[k+2]}`
        let labelWay = e.nextElementSibling
        labelWay.innerText = `${appearanceList[k+2]}`
        e.checked = false
        addFlipCard()
        setTimeout(() => {
            removeFlipCard()
        }, 500)
        appearanceCardContent()
    }
}
// 偵測外表左選項，觸發剪影變換、已選選項區域動畫、選擇區域換選項
appearanceLeft.addEventListener('change', function () {
    let srcNum = Math.floor(Math.random() * blindImgSrc.length)
    blindImg.innerHTML = `
    <img src="${blindImgSrc[srcNum]}" alt="" class="w-100">
    `
    appearanceFlip(this)
    let h = appearanceList.indexOf(this.value)
    appearanceRight.value = `${appearanceList[h+1]}`
    appearanceRight.nextElementSibling.innerText = `${appearanceList[h+1]}`
    chooseTimes()
    blindImg.classList.add('blindImgAnimation')
    setTimeout(() => {
        blindImg.classList.remove('blindImgAnimation')
    }, 300)
})
// 偵測外表左選項，觸發剪影變換、已選選項區域動畫、選擇區域換選項
appearanceRight.addEventListener('change', function () {
    let srcNum = Math.floor(Math.random() * blindImgSrc.length)
    blindImg.innerHTML = `
    <img src="${blindImgSrc[srcNum]}" alt="" class="w-100">
    `
    appearanceFlip(this)
    let h = appearanceList.indexOf(this.value)
    appearanceLeft.value = `${appearanceList[h-1]}`
    appearanceLeft.nextElementSibling.innerText = `${appearanceList[h-1]}`
    chooseTimes()
    blindImg.classList.add('blindImgAnimation')
    setTimeout(() => {
        blindImg.classList.remove('blindImgAnimation')
    }, 300)
})


// 第二階段：選擇特質，此時剪影不會隨機變換
let makePart = document.getElementById('makePart');

function traitPart() {
    makePart.innerText = `請選擇寵物特質`
    makeContent.innerHTML = `
    <div class='col-12 col-md-5'>
            <input type="radio" id="trait-left" name='option' class="col-6 radioOption" value='${traitList[0]}'>
            <label for='trait-left' id='trait-left' class='radioLabel'>${traitList[0]}</label>
        </div>
        <p class='col-12 col-md-2 orContent'>或是</p>
        <div class='col-12 col-md-5'>
            <input type="radio" id="trait-right" name='option' class="col-6 radioOption" value='${traitList[1]}'>
            <label for='trait-right' id='trait-right' class='radioLabel'>${traitList[1]}</label>
        </div>
        `

    let traitLeft = document.getElementById('trait-left')
    let traitRight = document.getElementById('trait-right')
    // 設定已選選項放入陣列並儲存
    function traitFlip(e) {
        let n = traitList.indexOf(e.value)
        if (n == traitList.length - 1 || n == traitList.length - 2) {
            traitArr.push(traitList[n])
            let traitArrStr = JSON.stringify(traitArr);
            localStorage.setItem('partnerTrait', traitArrStr);
            naming()
            traitCardContent()
        } else {
            traitArr.push(traitList[n])
            e.value = `${traitList[n+2]}`
            let labelWay = e.nextElementSibling
            labelWay.innerText = `${traitList[n+2]}`
            e.checked = false
            addFlipCard()
            setTimeout(() => {
                removeFlipCard()
            }, 500)
            traitCardContent()
        }
    }
    // 偵測外表左選項，觸發已選選項區域動畫、選擇區域換選項
    traitLeft.addEventListener('change', function () {
        traitFlip(this)
        let m = traitList.indexOf(this.value)
        traitRight.value = `${traitList[m+1]}`
        traitRight.nextElementSibling.innerText = `${traitList[m+1]}`
        chooseTimes()
    })
    // 偵測外表右選項，觸發已選選項區域動畫、選擇區域換選項
    traitRight.addEventListener('change', function () {
        traitFlip(this)
        let m = traitList.indexOf(this.value)
        traitLeft.value = `${traitList[m-1]}`
        traitLeft.nextElementSibling.innerText = `${traitList[m-1]}`
        chooseTimes()
    })
}

// 第三階段：命名
function naming() {
    makePart.innerText = `請為寵物命名`
    makeContent.innerHTML = `
        <div class="input-group my-3 mx-auto flex-nowrap ms-1">
            <span class="input-group-text inputGroup-sizing-lg">輸入名稱</span>
            <input type="text" class="form-control" id='name-text' required value='小美'>
        </div>
        <div class='col-10 col-md-3 my-3 mx-auto'>
            <button type="submit" class="btn" id='make-done'>
                <a href="./partnerspage.html" class='text-decoration-none'>製作完成</a>
            </button>
        </div>
        `
    // 過場頁面顯示
    let makeDone = document.getElementById('make-done');
    makeDone.addEventListener('click', function (event) {
        event.preventDefault()
        let nameText = document.getElementById('name-text').value;
        localStorage.setItem('partnerName', nameText);
        document.getElementById('loading').classList.add('d-block')
        setTimeout(() => {
            window.open('./partnerspage.html', '_self')
        }, 2800)
    })
}