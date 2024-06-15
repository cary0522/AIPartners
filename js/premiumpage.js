$('.header-page').load('header.html');
        $('.footer-page').load('footer.html');

        // 設定可選購商品
        let petGoods = []
        function Goods(name, price, src) {
            this.name = name;
            this.price = price;
            this.image = src;
        }
        petGoods[0] = new Goods(`毛絨可愛、大眼睛、小耳朵的可愛寵物`, 40, "./partners_photo/0011.jpg")
        petGoods[1] = new Goods(`現代機械、小眼睛、大耳朵的強壯寵物`, 30, "./partners_photo/1100.jpg")
        petGoods[2] = new Goods(`毛絨可愛、小眼睛、大耳朵的可愛寵物`, 50, "./partners_photo/0101.jpg")
        petGoods[3] = new Goods(`現代機械、大眼睛、小耳朵的強壯寵物`, 40, "./partners_photo/1010.jpg")
        petGoods[4] = new Goods(`毛絨可愛、大眼睛、大耳朵的可愛寵物`, 50, "./partners_photo/0001.jpg")

        // 將單隻購買商品渲染至頁面
        let petGoodList = document.getElementById('petGoodList')
        for (i = 0; i < petGoods.length; i++) {
            petGoodList.innerHTML +=
                `
            <div class='pet-card position-relative col-6 col-sm-4 col-lg-2 my-2'>
                <form class='cartForm' action='#' method='POST' id='form${i}'>
                    <img src="${petGoods[i].image}" alt="" class='w-75 pet-card-img m-1'>
                    <input type="text" hidden value="${petGoods[i].image}" name='goodsImage'>
                    <p class='text-wrap mx-auto goodsNameText'>${petGoods[i].name}</p>
                    <input type="text" hidden value="${petGoods[i].name}" name='goodsName'>
                    <p class='fs-5'>${petGoods[i].price}
                        <i class='fa-solid fa-dollar-sign darkText'></i>    
                    </p>
                    <input type="text" hidden value="${petGoods[i].price}" name='goodsPrice'>
                    <button class="btn btnMinus" type='button'>
                        <i class="fa-solid fa-minus"></i>    
                    </button>
                    <input type="tel" value='1' id='input${i}' pattern="[0-9]{1}" name='goodsIndex' class='col-4 text-center'>
                    <button class="btn btnPlus" type='button'>
                        <i class="fa-solid fa-plus"></i>
                    </button>
                    <button type='submit' class='btn btn-outline-secondary col-6 mx-auto my-2 px-0 py-1 submitText'>
                        <i class="fa-solid fa-cart-plus"></i>
                        <br>
                        <small id='cartText'>加入購物車</small>
                    </button>
                </form>
            </div>
            `
        }
        // 設定加減按鈕控制指定商品數量
        let btnPlus = document.querySelectorAll('.btnPlus')
        let btnMinus = document.querySelectorAll('.btnMinus')

        function cartPlus(e) {
            let num = parseInt(e.previousElementSibling.value)
            if (num < 9) {
                num += 1
                e.previousElementSibling.value = num
            }
        }
        function cartMinus(e) {
            let num = parseInt(e.nextElementSibling.value)
            if (num > 0) {
                num -= 1
                e.nextElementSibling.value = num
            }
        }
        for (i = 0; i < petGoods.length; i++) {
            btnPlus[i].addEventListener('click', function () {
                cartPlus(this)
            })
        }
        for (i = 0; i < petGoods.length; i++) {
            btnMinus[i].addEventListener('click', function () {
                cartMinus(this)
            })
        }

        // 設定購買成功彈跳視窗
        let cartToast = document.getElementById('cartToast')
        const cToast = new bootstrap.Toast(cartToast)
        let guideToast = document.getElementById('guideToast')
        const gToast = new bootstrap.Toast(guideToast)
        // 透過表單抓取「加入購物車」商品名稱、價錢、數目資料
        let shoppingList = []
        let cartForm = document.querySelectorAll('.cartForm')
        for (i = 0; i < petGoods.length; i++) {
            cartForm[i].addEventListener('submit', function (event) {
                event.preventDefault(); // 暫停網頁跳轉
                for (j = 0; j < petGoods.length; j++) {
                    if (this.id == `form${j}`) {
                        shoppingList[j] = Array.from(new FormData(document.getElementById(this
                            .id))) // Array.from() 將 FormData 資料轉為可以存進 localStorage 的格式
                        // console.log(shoppingList)
                    }
                }
                localStorage.setItem('shoppingList', JSON.stringify(shoppingList)) // 將已購買商品資訊存入儲存空間
                let sum = 0
                for (s = 0; s < shoppingList.length; s++) {
                    if (shoppingList[s]) {
                        sum += parseInt(shoppingList[s][2][1] * shoppingList[s][3][1])
                        if (sum > 199) {
                            gToast.show() // 引導訂閱月費制
                        }else{
                            cToast.show() // 成功加入購物車
                        }
                    }
                }

            })
        }

        // 引導訂閱月費制成功，清除購物車資料
        let guideToastAgain = document.getElementById('guideToastAgain')
        guideToastAgain.addEventListener('click',function(){
            localStorage.setItem('shoppingList',null)
            window.open('./premiumpage.html','_self')
        })

        // 設定訂閱成功彈跳視窗
        let monthForm = document.getElementById('monthForm')
        let monthToast = document.getElementById('monthToast')
        const mToast = new bootstrap.Toast(monthToast)
        monthForm.addEventListener('submit', function (event) {
            event.preventDefault()
            let monthPlan = Array.from(new FormData(monthForm))
            localStorage.setItem('monthPlan', JSON.stringify(monthPlan))
            mToast.show()
        })