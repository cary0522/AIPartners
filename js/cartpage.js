$('.header-page').load('header.html');
        $('.footer-page').load('footer.html');

        // 取得購物車資料
        let shoppingList = JSON.parse(localStorage.getItem('shoppingList'))
        let monthPlan = JSON.parse(localStorage.getItem('monthPlan'))

        // 取得需要控制元素
        let cartPart = document.getElementById('cartPart')
        let monthPart = document.getElementById('monthPart')
        let totalPart = document.getElementById('totalPart')
        let doneModal = document.getElementById('doneModal')
        const dModal = new bootstrap.Modal(doneModal)
        let doneList = document.getElementById('doneList')
        let totalSum = document.getElementById('totalSum')
        let finalPrice = null

        // 購買單隻情況
        if (shoppingList) {
            monthPart.style = 'display:none;'
            for (i = 0; i < shoppingList.length; i++) {
                if (shoppingList[i]) {
                    cartPart.innerHTML += `
                    <div class="col-12 row mx-auto border-bottom py-2 justify-content-center">
                        <img src="${shoppingList[i][0][1]}" alt="" class="cart-img p-1 col-6 col-md-4 col-lg-3 mx-auto">
                        <div class="col-12 col-md-6 col-lg-8 align-self-center cart-text text-center mx-auto d-flex flex-column justify-content-center">
                            <p class="row col-12 mx-auto justify-content-evenly">${shoppingList[i][1][1]}</p>
                            <div class="row col-12 my-3 mx-auto justify-content-evenly fs-3">
                                <span class="col-2 align-self-center" id='itemTotal${i}'>${shoppingList[i][2][1]*shoppingList[i][3][1]}</span>
                                <span class="col-2 align-self-center mx-1"><i class="fa-solid fa-dollar-sign"></i></span>
                                <button class="btn btnMinus col-1">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                <input type="tel" pattern="[0-9]{1}" value="${shoppingList[i][3][1]}" class="col-4 text-center cartText" id='itemIndex${i}'>
                                <button class="btn btnPlus col-1">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    `
                    let allItemTotal = parseInt(shoppingList[i][2][1]) * parseInt(shoppingList[i][3][1])
                    finalPrice += allItemTotal
                    totalPart.innerHTML = `
                    <div class='my-3 mx-auto fs-3'>
                        <span class='darkText'>總金額：</span>
                        <span class="col-1 align-self-center darkText" id='totalPrice'>${finalPrice}</span>
                        <span class="col-1 align-self-center mx-1 darkText"><i class="fa-solid fa-dollar-sign darkText"></i></span>
                    </div>
                    <button type="button" class="btn my-3 mx-auto p-1 col-6 fs-4" id='btnCheckOut'>確認結帳</button>
                    `
                }
            }

            // 設定購物車加減數量事件及計算總金額function
            let btnMinus = document.querySelectorAll('.btnMinus')
            let btnPlus = document.querySelectorAll('.btnPlus')
            // 點擊增加數量
            function cartPlus(e) {
                for (i = 0; i < shoppingList.length; i++) {
                    if (e.previousElementSibling.id == `itemIndex${i}`) {
                        let itemIndex = document.getElementById(`itemIndex${i}`)
                        let num = parseInt(shoppingList[i][3][1])
                        if (num < 9) {
                            num += 1
                            shoppingList[i][3][1] = num
                            itemIndex.value = num
                        }
                        let itemTotal = document.getElementById(`itemTotal${i}`)
                        itemTotal.innerText = parseInt(`${shoppingList[i][2][1]*shoppingList[i][3][1]}`)
                    }
                }
            }
            // 點擊減少數量
            function cartMinus(e) {
                for (i = 0; i < shoppingList.length; i++) {
                    if (e.nextElementSibling.id == `itemIndex${i}`) {
                        let itemIndex = document.getElementById(`itemIndex${i}`)
                        let num = parseInt(shoppingList[i][3][1])
                        if (num > 0) {
                            num -= 1
                            shoppingList[i][3][1] = num
                            itemIndex.value = num
                        }
                        let itemTotal = document.getElementById(`itemTotal${i}`)
                        itemTotal.innerText = parseInt(`${shoppingList[i][2][1]*shoppingList[i][3][1]}`)
                    }
                }
            }
            // 計算最終總金額
            function checkoutPrice() {
                let finalPrice = 0
                for (i = 0; i < shoppingList.length; i++) {
                    if (shoppingList[i]) {
                        let allItemTotal = parseInt(shoppingList[i][2][1]) * parseInt(shoppingList[i][3][1])
                        finalPrice += allItemTotal
                        totalPrice.innerText = finalPrice
                    }
                }
            }
            // 偵測點擊事件並觸發function
            for (i = 0; i < shoppingList.length; i++) {
                if (btnPlus[i]) {
                    btnPlus[i].addEventListener('click', function () {
                        cartPlus(this)
                        checkoutPrice()
                    })
                }
            }
            for (i = 0; i < shoppingList.length; i++) {
                if (btnMinus[i]) {
                    btnMinus[i].addEventListener('click', function () {
                        cartMinus(this)
                        checkoutPrice()
                    })
                }
            }
        }


        // 訂閱制情況
        if (monthPlan) {
            cartPart.style = 'display:none;'
            monthPart.innerHTML = `
            <div class="col-12 align-self-center cart-text text-center container-fluid">
                <div class='d-flex flex-nowrap mx-auto justify-content-center'>
                    <div class="col-2 m-1 month-card-pet">
                        <img src="./partners_photo/1100.jpg" alt="" class="pet-card-img p-1">
                    </div>
                    <div class="col-2 m-1 month-card-pet">
                        <img src="./partners_photo/0010.jpg" alt="" class="pet-card-img p-1">
                    </div>
                    <div class="col-2 m-1 month-card-pet">
                        <img src="./partners_photo/0110.jpg" alt="" class="pet-card-img p-1">
                    </div>
                    <div class="col-2 m-1 month-card-pet">
                        <img src="./partners_photo/1001.jpg" alt="" class="pet-card-img p-1">
                    </div>
                    <div class="col-2 m-1 month-card-pet">
                        <img src="./partners_photo/0111.jpg" alt="" class="pet-card-img p-1">
                    </div>
                    </div>
                <div class='d-flex flex-column mx-auto justify-content-center mt-2 '>
                    <span class="row mx-auto">${monthPlan[0][1]}</span>
                    <div class="row my-3 mx-auto justify-content-evenly">
                        <span class="col-1 align-self-center" id='monthTotal'>${monthPlan[1][1]}</span>
                        <span class="col-1 align-self-center mx-1"><i class="fa-solid fa-dollar-sign"></i></span>
                    </div>
                </div>
            </div>
            `
            totalPart.innerHTML = `
            <div class='my-3 mx-auto fs-3'>
                <span class='darkText'>總金額：</span>
                <span class="col-1 align-self-center" id='totalPrice'>199</span>
                <span class="col-1 align-self-center mx-1"><i class="fa-solid fa-dollar-sign darkText"></i></span>
            </div>
            <button type="button" class="btn my-3 mx-auto p-1 col-6 fs-4" id='btnCheckOut'>確認結帳</button>
            `
        }

        // 偵測最終點擊確認結帳事件
        let btnCheckOut = document.getElementById('btnCheckOut')
        btnCheckOut.addEventListener('click', function () {
            dModal.show()
            if (monthPlan) {
                doneList.innerHTML = `
                <p>${monthPlan[0][1]} 共 ${monthPlan[1][1]}
                    <span class="col-1 align-self-center mx-1"><i class="fa-solid fa-dollar-sign"></i></span>
                </p>
                `
                totalSum.innerHTML = `
                <p>共 199 元</p>
                `
                setTimeout(()=>{
                    window.open('./index.html','_self')
                },10000)
            } else {
                for (i = 0; i < shoppingList.length; i++) {
                    if (shoppingList[i]) {
                        doneList.innerHTML += `
                        <p>${shoppingList[i][1][1]} * ${shoppingList[i][3][1]} ，共 ${shoppingList[i][2][1]*shoppingList[i][3][1]}
                            <span class="col-2 align-self-center mx-1"><i class="fa-solid fa-dollar-sign"></i></span>
                        </p>
                        `
                        totalSum.innerHTML = `
                        <p>總共 ${finalPrice} 元</p>
                        `
                    }
                }
                setTimeout(()=>{
                    window.open('./index.html','_self')
                },10000)
            }
        })