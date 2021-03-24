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
    //选集
    $("#tang").click(function() {
        window.location.href = "http://localhost:8080/poem.html?value=1";
    });
    $("#song").click(function() {
        window.location.href = "http://localhost:8080/poem.html?value=2";
    });
    $("#yuan").click(function() {
        window.location.href = "http://localhost:8080/poem.html?value=3";
    });
    $("#shijing").click(function() {
        window.location.href = "http://localhost:8080/poem.html?value=4";
    });
    $("#qian").click(function() {
        window.location.href = "http://localhost:8080/poem.html?value=5";
    });
    //主题
    $("#tea").click(function() {
        window.location.href = "http://localhost:8080/poem.html?value=6";
    });
    $("#love").click(function() {
        window.location.href = "http://localhost:8080/poem.html?value=7";
    });
    $("#leave").click(function() {
        window.location.href = "http://localhost:8080/poem.html?value=8";
    });
    $("#wine").click(function() {
        window.location.href = "http://localhost:8080/poem.html?value=9";
    });
    $("#think").click(function() {
        window.location.href = "http://localhost:8080/poem.html?value=10";
    });
    //写景
    $("#spring").click(function() {
        window.location.href = "http://localhost:8080/poem.html?value=11";
    });
    $("#summer").click(function() {
        window.location.href = "http://localhost:8080/poem.html?value=12";
    });
    $("#autumn").click(function() {
        window.location.href = "http://localhost:8080/poem.html?value=13";
    });
    $("#winter").click(function() {
        window.location.href = "http://localhost:8080/poem.html?value=14";
    });
    $("#mountain").click(function() {
        window.location.href = "http://localhost:8080/poem.html?value=15";
    });
    //节目
    $("#chunjie").click(function() {
        window.location.href = "http://localhost:8080/poem.html?value=16";
    });
    $("#yuanxiao").click(function() {
        window.location.href = "http://localhost:8080/poem.html?value=17";
    });
    $("#qingming").click(function() {
        window.location.href = "http://localhost:8080/poem.html?value=18";
    });
    $("#duanwu").click(function() {
        window.location.href = "http://localhost:8080/poem.html?value=19";
    });
    $("#zhongqiu").click(function() {
        window.location.href = "http://localhost:8080/poem.html?value=20";
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