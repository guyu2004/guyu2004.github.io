$(document).ready(function() {
    $("#fourth").click(function() {
        var user_id = document.cookie;
        if (user_id == "") {
            window.location.href = "http://localhost:8080/login.html";
        } else {
            window.location.href = "http://localhost:8080/me.html?value=" + user_id;
        }
    });
    $("#search").click(function() {
        var text = $("#keyWords").val();
        var s_id = title(text)
        console.log(s_id);
        window.location.href = "http://localhost:8080/detail.html?value=" + s_id;
    });
});

function title(text) {
    $.ajax({
        url: "http://localhost:8080/text", //请求的url地址
        dataType: "json", //返回格式为json
        async: false, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {
            "text": text
        }, //参数值
        type: "post", //请求方式
        success: function(data) {
            s_id = data[0].id
        },
        error: function() {
            alert("no")
        }
    });
    return s_id;
}
$.ajax({
    url: "http://localhost:8080/banner", //请求的url地址
    dataType: "json", //返回格式为json
    async: true, //请求是否异步，默认为异步，这也是ajax重要特性
    data: {}, //参数值
    type: "post", //请求方式
    success: function(data) {
        var tr = "";
        for (var i = 0; i < data.length; i++) {
            var str =
                '<div class="lb-item">' +
                '<a href="#">' +
                '<img src="' + data[i].src + '" alt="picture loss">' +
                '<span>' + data[i].title + '</span>' +
                '</a>' +
                '</div>'
            tr += str;
        }
        $(".lb-content").append(tr);
    },
    error: function() {
        alert("no")
    }
});
$.ajax({
    url: "http://localhost:8080/recommend", //请求的url地址
    dataType: "json", //返回格式为json
    async: true, //请求是否异步，默认为异步，这也是ajax重要特性
    data: {}, //参数值
    type: "post", //请求方式
    success: function(data) {
        var tr = "";
        for (var i = 0; i < data.length; i++) {
            var str =
                '<div class="option" style="background:url(img/2.png);">' +
                '<div class="info">' +
                '<div class="main">' + data[i].title + '</div>' +
                '<div class="sub">' + data[i].content + '</div>' +
                '</div>' +
                '<div class="label">' +
                '<div class="icon"> <i class="fas fa-snowflake"></i>' +
                '</div>' +
                '</div>' +
                '</div>'
            tr += str;
        }
        $(".options").append(tr);
    },
    error: function() {
        alert("no")
    }
});