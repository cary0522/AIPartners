$('.header-page').load('header.html');
        $('.footer-page').load('footer.html');

        // 點擊忘記密碼按鈕，變換頁面顯示內容
        let loginpage = document.getElementById('loginpage');
        let forgetPassword = document.getElementById('forget-password');
        forgetPassword.addEventListener('click', function () {
            loginpage.innerHTML = `
            <div class="mx-auto p-5 rounded" id="log-in">
                <div class="input-group my-5 mx-auto">
                    <span class="input-group-text">帳號</span>
                    <input type="email" class="form-control log-in-input rounded-end" placeholder="請輸入email" required autofocus>
                    <p class="ms-2 mb-0 align-self-center"></p>
                    </div>
                <div class="row justify-content-evenly">
                    <button class="btn rounded-pill col-4 ms-2" type="button" id='getCodeBtn'>獲得驗證碼</button>
                </div>
                <div class="input-group my-5 mx-auto">
                    <span class="input-group-text">驗證碼</span>
                    <input type="password" class="form-control rounded-end" placeholder="請輸入驗證碼" required>
                    <p class="ms-2 mb-0 align-self-center"></p>
                </div>
                <div class="row justify-content-evenly">
                    <button class="btn rounded-pill col-4 m-2" type="button" id='forgetPasswordLogInBtn'>登入</button>
                </div>
            </div>
            `
        })

        // 成功登入頁面跳轉
        let email = document.getElementById('email')
        let password = document.getElementById('password')
        let registerBtn = document.getElementById('registerBtn')
        let logInBtn = document.getElementById('logInBtn')
        let errorToast = document.getElementById('errorToast')
        const eToast = new bootstrap.Toast(errorToast)
        logInBtn.addEventListener('click', function () {
            if (email.value == 'abc@xxx.com' && password.value == '1234') {
                window.open('./partnerspage.html', '_self')
            } else {
                eToast.show()
                // 帳號、密碼錯誤彈跳視窗
            }
        })