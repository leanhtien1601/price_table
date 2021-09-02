var a = 1
var b = 1
var c = 1
var d = 1
var classAdd = document.getElementById("detail-quick");
var classes = classAdd.classList;
var result = classes.contains("add_quick");


function closeAdd() {
    var element = document.getElementById("detail-quick");
    element.classList.remove("add_quick");
}



const check_name = () => {
    var name = document.getElementsByName("name")
    var name_err = document.getElementById("name_err");
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var format_kc = /\s/g;
    if (name[0].value == "") {
        document.getElementById("upload").setAttribute("disabled", "");
        name_err.innerHTML = "Bạn không được để trống";
        a = 2;
    } else if (format.test(name[0].value) || format_kc.test(name[0].value)) {
        document.getElementById("upload").setAttribute("disabled", "");
        name_err.innerHTML = "Bạn không được nhập kí tự đặc biệt";
        a = 2;
    } else {

        document.getElementById("upload").removeAttribute("disabled", "");
        name_err.innerHTML = "";
        a = 1;
    }
}

const check_email = () => {
    var email = document.getElementById('email');
    var email_err = document.getElementById("email_err");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        document.getElementById("upload").setAttribute("disabled", "");
        email_err.innerHTML = ('Hay nhap dia chi email hop le.\nExample@gmail.com');
        b = 2;
    } else {
        document.getElementById("upload").removeAttribute("disabled", "");
        email_err.innerHTML = "";
        b = 1
    }
}

const check_password = () => {
    var password = document.getElementById("password")
    var password_err = document.getElementById("password_err");
    var checkT = 0;
    var checkH = 0;
    var i = 0;
    var character = '';
    while (i <= password.value.length) {
        character = password.value.charAt(i);
        if (!isNaN(character * 1)) {
        } else {
            if (character == character.toUpperCase()) {
                var checkT = 1
            }
            if (character == character.toLowerCase()) {
                var checkH = 1
            }
        }
        i++;
    }

    if (password.value == "" || password.value.length < 8 || password.value.length > 32) {
        document.getElementById("upload").setAttribute("disabled", "");
        password_err.innerHTML = "Bạn nhập mật khẩu từ 8-32 kí tự";
        c = 2;

    } else if (checkT != 1 || checkH != 1) {
        document.getElementById("upload").setAttribute("disabled", "");
        password_err.innerHTML = "Bạn nhập mật khẩu có chữ in hoa và thường";
        c = 2;

    } else {
        document.getElementById("upload").removeAttribute("disabled", "");
        password_err.innerHTML = "";
        check_re_password();
        c = 1
    }
}

const check_re_password = () => {
    var re_password = document.getElementById("re_password");
    var re_password_err = document.getElementById("re_password_err");
    var password = document.getElementById("password");
    if (password.value != re_password.value) {
        document.getElementById("upload").setAttribute("disabled", "");
        re_password_err.innerHTML = "Bạn nhập lại không đúng mật khẩu";
        d = 2;

    } else {
        document.getElementById("upload").removeAttribute("disabled", "");
        re_password_err.innerHTML = "";
        d = 1
    }
}
function kt() {
    check_name();
    check_email();
    check_password();
    if (a == 2 || b == 2 || c == 2 || d == 2) {
        document.getElementById("upload").setAttribute("disabled", "");
       

    } else {
        document.getElementById("upload").removeAttribute("disabled", "");
        if (result) {
            classAdd = classList.remove('add_quick')
        } else {
            var element = document.getElementById("detail-quick");
            element.classList.add("add_quick");
        }
      
    }


}