$(document).ready(function() {
    $("#fourth").click(function() {
        var user_id = document.cookie;
        if (user_id == "") {
            window.location.href = "http://localhost:8080/login.html";
        } else {
            window.location.href = "http://localhost:8080/me.html?value=" + user_id;
        }
    });
    //退出登录
    $("#edit").click(function() {
        document.cookie = "";
        window.location.href = "http://localhost:8080/login.html";
    });
    $("#search").click(function() {
        var text = $("#keyWords").val();
        var s_id = title(text)
        console.log(s_id);
        window.location.href = "http://localhost:8080/detail.html?value=" + s_id;
    });
    var value = location.search.replace(/[^\d]/g, "")
    var userName = userNames(value)
    $("#name").text(userName);
    me(value);
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

function userNames(value) {
    $.ajax({
        url: "http://localhost:8080/userNames", //请求的url地址
        dataType: "json", //返回格式为json
        async: false, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {
            id: value
        }, //参数值
        type: "post", //请求方式
        success: function(data) {
            userName = data[0].name
        },
        error: function() {
            alert("no")
        }
    });
    return userName;
}

function me(value) {
    $.ajax({
        url: "http://localhost:8080/likeInfo", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {
            uid: value
        }, //参数值
        type: "post", //请求方式
        success: function(data) {
            var tr = "";
            for (var i = 0; i < data.length; i++) {
                var str =
                    '<div id="loveText" class="loveText">' +
                    '<div id="loveBg" class="loveBg">' +
                    '<p id="headLine">' +
                    '《' + data[i].title + '》' +
                    '</p>' +
                    '<span id="content">' + data[i].content + '</span>' +
                    '</div>' +
                    '</div>'
                tr += str;
            }
            $(".textCase").append(tr);
        },
        error: function() {
            alert("no")
        }
    });
}