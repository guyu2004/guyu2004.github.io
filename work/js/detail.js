$(document).ready(function() {
    $("#fourth").click(function() {
        var user_id = document.cookie;
        if (user_id == "") {
            window.location.href = "http://localhost:8080/login.html";
        } else {
            window.location.href = "http://localhost:8080/me.html?value=" + user_id;
        }
    });
    var value = location.search.replace(/[^\d]/g, "")
    detail(value);
});

function detail(value) {
    $.ajax({
        url: "http://localhost:8080/detail", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {
            id: value
        }, //参数值
        type: "post", //请求方式
        success: function(data) {
            var str =
                '<div class="title">' +
                '<p id="headTitle">' + data[0].title + '</p>' +
                '<span id="dynasty">' + '[' + data[0].dynasty + ']' + '</span>' +
                '<span id="author">' + data[0].author + '</span>' +
                '</div>' +
                '<div class="content">' +
                '<pre>' + data[0].content +
                '</pre>' +
                '</div>' +
                '<div class="appreciate">' +
                '<p id="ping">评析</p>' +
                '<p class="pingContent">' + data[0].appreciate + '</p>' +
                '</div>'
            $(".poem").append(str);
        },
        error: function() {
            alert("服务器错误");
        }
    });

}