$(document).ready(function() {
    $("#btn").click(function() {
        var name = $("#name").val();
        var password = $("#password").val();
        var sName = searchName(name);
        var sPassword = searchPassword(password);
        if (name == sName && password == sPassword) {
            var user_id = searchUser(name);
            document.cookie = user_id;
            //$("#user_id").attr("value", user_id);
            window.location.href = "http://localhost:8080/me.html?value=" + user_id;
            alert("登录成功")
        } else if (name == searchUser(name) && password != searchPassword(password)) {
            alert("用户名重复或密码错误")
        } else {
            user(name, password);
            var user_id = searchUser(name);
            document.cookie = user_id;
            window.location.href = "http://localhost:8080/me.html?value=" + user_id;
            alert("登录注册成功");
        }
    });
});

function user(name, password) {
    $.ajax({
        url: "http://localhost:8080/user", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {
            name: name,
            password: password,
        }, //参数值
        type: "post", //请求方式
        success: function() {
            alert("登录成功！");
        },
        error: function() {
            alert("服务器连接错误！")
        }
    });
}

function searchUser(name) {
    $.ajax({
        url: "http://localhost:8080/searchUser", //请求的url地址
        dataType: "json", //返回格式为json
        async: false, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {
            "name": name
        }, //参数值
        type: "post", //请求方式
        success: function(data) {
            if (data == "") {
                user_id = ""
            } else {
                user_id = data[0].id
            }
        },
        error: function() {
            alert("no")
        }
    });
    return user_id;
}

function searchName(name) {
    $.ajax({
        url: "http://localhost:8080/searchName", //请求的url地址
        dataType: "json", //返回格式为json
        async: false, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {
            "name": name
        }, //参数值
        type: "post", //请求方式
        success: function(data) {
            if (data == "") {
                name = "";
            } else {
                name = data[0].name
            }
        },
        error: function() {
            alert("no")
        }
    });
    return name;
}

function searchPassword(password) {
    $.ajax({
        url: "http://localhost:8080/searchPassword", //请求的url地址
        dataType: "json", //返回格式为json
        async: false, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {
            password: password
        }, //参数值
        type: "post", //请求方式
        success: function(data) {
            if (data == "") {
                password = ""
            } else {
                password = data[0].password
            }
        },
        error: function() {
            alert("no")
        }
    });
    return password;
}