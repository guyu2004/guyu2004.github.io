$(document).ready(function() {
    $("#fourth").click(function() {
        var user_id = document.cookie;
        if (user_id == "") {
            window.location.href = "http://localhost:8080/login.html";
        } else {
            window.location.href = "http://localhost:8080/me.html?value=" + user_id;
        }
    });
    //加载数据  
    messageInfo();
    //提交评论
    $("#textComment").click(function() {
        var text = $("#textcontent").val();
        var name = $("#niName").val();
        message(text, name);
        $("#textcontent").val("");
        window.location.reload();
    });
    $("#search").click(function() {
        var title = $("#keyWords").val();
        var s_id = search(title)
        window.location.href = "http://localhost:8080/detail.html?value=" + s_id;
    });
});

function search(title) {
    $.ajax({
        url: "http://localhost:8080/text", //请求的url地址
        dataType: "json", //返回格式为json
        async: false, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {
            "text": title
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

function message(text, name) {
    var date = new Date();
    const current_date = date.getDate();
    const current_month = date.getMonth() + 1;
    const current_year = date.getFullYear();
    var now = current_year + '-' + current_month + '-' + current_date;
    $.ajax({
        url: "http://localhost:8080/message", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {
            name: name,
            content: text,
            date: now
        }, //参数值
        type: "post", //请求方式
        success: function() {
            alert("发布成功！");
        },
        error: function() {
            alert("服务器连接错误！")
        }
    });
}

function messageInfo() {
    $.ajax({
        url: "http://localhost:8080/messageInfo", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {}, //参数值
        type: "post", //请求方式
        success: function(data) {
            var tr = "";
            for (var i = 0; i < data.length; i++) {
                var str =
                    '<div id="" class="content">' +
                    '<p class="name">' + data[i].name + '</p>' +
                    '<p class="time">' + data[i].date + '</p>' +
                    '<div class="comment">' +
                    '<span>' + data[i].content + '</span>' +
                    '</div>' +
                    '<hr>' +
                    '</div>'
                tr += str;
            }
            $(".chatCase").append(tr);
        },
        error: function() {
            alert("no")
        }
    });
}