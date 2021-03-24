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
    switch (value) {
        //选集
        case '1':
            $("#photo").attr("src", "img/7.png");
            tang();
            break;
        case '2':
            $("#photo").attr("src", "img/7.png");
            song();
            break;
        case '3':
            $("#photo").attr("src", "img/7.png");
            yuan();
            break;
        case '4':
            $("#photo").attr("src", "img/7.png");
            shijing();
            break;
        case '5':
            $("#photo").attr("src", "img/7.png");
            qian();
            break;
            //主题
        case '6':
            $("#photo").attr("src", "img/8.png");
            tea();
            break;
        case '7':
            $("#photo").attr("src", "img/8.png");
            love();
            break;
        case '8':
            $("#photo").attr("src", "img/8.png");
            leave();
            break;
        case '9':
            $("#photo").attr("src", "img/8.png");
            wine();
            break;
        case '10':
            $("#photo").attr("src", "img/8.png");
            think();
            break;
            //写景
        case '11':
            $("#photo").attr("src", "img/9.png");
            spring();
            break;
        case '12':
            $("#photo").attr("src", "img/9.png");
            summer();
            break;
        case '13':
            $("#photo").attr("src", "img/9.png");
            autumn();
            break;
        case '14':
            $("#photo").attr("src", "img/9.png");
            winter();
            break;
        case '15':
            $("#photo").attr("src", "img/9.png");
            mountain();
            break;
            //节日
        case '16':
            $("#photo").attr("src", "img/10.png");
            chunjie();
            break;
        case '17':
            $("#photo").attr("src", "img/10.png");
            yuanxiao();
            break;
        case '18':
            $("#photo").attr("src", "img/10.png");
            qingming();
            break;
        case '19':
            $("#photo").attr("src", "img/10.png");
            duanwu();
            break;
        case '20':
            $("#photo").attr("src", "img/10.png");
            zhongqiu();
            break;
        default:
            alert("出错了！");
            break;
    }

});
$(document).on('click', '.title', function() {
    var id = $(this).attr("data-id");
    window.location.href = "http://localhost:8080/detail.html?value=" + id;
});
$(document).on('click', '.like', function() {
    var title = $(this).attr("data-title");
    var content = $(this).attr("data-content");
    var likeTitle = likeInfo(title);
    var user_id = document.cookie;
    if (user_id == "") {
        alert("请先登录注册");
    } else if (likeTitle == title) {
        alert("已在我的喜欢列表中")
    } else {
        like(title, content, user_id)
    }
});

function likeInfo(title) {
    $.ajax({
        url: "http://localhost:8080/seachLike", //请求的url地址
        dataType: "json", //返回格式为json
        async: false, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {
            title: title,
        }, //参数值
        type: "post", //请求方式
        success: function(data) {
            if (data == "") {
                likeTitle = ""
            } else {
                likeTitle = data[0].title
            }
        },
        error: function() {
            alert("服务器连接错误！")
        }
    });
    return likeTitle;
}

function like(title, content, user_id) {
    $.ajax({
        url: "http://localhost:8080/like", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {
            title: title,
            content: content,
            uid: user_id
        }, //参数值
        type: "post", //请求方式
        success: function() {
            alert("喜欢成功");
        },
        error: function() {
            alert("服务器连接错误！")
        }
    });
}
// $(".caseBox").click(function() {
//     var id = $(".caseBox").attr("data-id");
//     console.log(id);
// });
// $(".caseBox").on('click', function() {
//     var id = $(".caseBox").attr("data-id");
//     console.log(id);
// });
//选集
function tang() {
    $.ajax({
        url: "http://localhost:8080/tang", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {}, //参数值
        type: "post", //请求方式
        success: function(data) {
            var tr = "";
            for (var i = 0; i < data.length; i++) {
                var str =
                    '<div class="caseBox">' +
                    '<div class="title" data-id=' + data[i].sid + '>' + data[i].title + '</div>' +
                    '<input type="button" value="喜欢" class="like" data-title=' + data[i].title + ' data-content=' + data[i].content + '>' +
                    '<div class="info">' +
                    '<div class="dynasty">[唐]</div>' +
                    '<div class="author">' + data[i].author + '</div>' +
                    '</div>' +
                    '<div class="content">' +
                    '<span>' + data[i].content + '</span>' +
                    '</div>' +
                    '</div>'
                tr += str;
            }
            $(".case").append(tr);
        },
        error: function() {
            alert("服务器错误");
        }
    });

}

function song() {
    $.ajax({
        url: "http://localhost:8080/song", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {}, //参数值
        type: "post", //请求方式
        success: function(data) {
            var tr = "";
            for (var i = 0; i < data.length; i++) {
                var str =
                    '<div class="caseBox">' +
                    '<div class="title" data-id=' + data[i].sid + '>' + data[i].title + '</div>' +
                    '<input type="button" value="喜欢" class="like" data-title=' + data[i].title + ' data-content=' + data[i].content + '>' +
                    '<div class="info">' +
                    '<div class="dynasty">[宋]</div>' +
                    '<div class="author">' + data[i].author + '</div>' +
                    '</div>' +
                    '<div class="content">' +
                    '<span>' + data[i].content + '</span>' +
                    '</div>' +
                    '</div>'
                tr += str;
            }
            $(".case").append(tr);
        },
        error: function() {
            alert("服务器错误");
        }
    });
}

function yuan() {
    $.ajax({
        url: "http://localhost:8080/yuan", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {}, //参数值
        type: "post", //请求方式
        success: function(data) {
            var tr = "";
            for (var i = 0; i < data.length; i++) {
                var str =
                    '<div class="caseBox">' +
                    '<div class="title" data-id=' + data[i].sid + '>' + data[i].title + '</div>' +
                    '<input type="button" value="喜欢" class="like" data-title=' + data[i].title + ' data-content=' + data[i].content + '>' +
                    '<div class="info">' +
                    '<div class="dynasty">[元]</div>' +
                    '<div class="author">' + data[i].author + '</div>' +
                    '</div>' +
                    '<div class="content">' +
                    '<span>' + data[i].content + '</span>' +
                    '</div>' +
                    '</div>'
                tr += str;
            }
            $(".case").append(tr);
        },
        error: function() {
            alert("服务器错误");
        }
    });
}

function shijing() {
    $.ajax({
        url: "http://localhost:8080/shijing", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {}, //参数值
        type: "post", //请求方式
        success: function(data) {
            var tr = "";
            for (var i = 0; i < data.length; i++) {
                var str =
                    '<div class="caseBox">' +
                    '<div class="title" data-id=' + data[i].sid + '>' + data[i].title + '</div>' +
                    '<input type="button" value="喜欢" class="like" data-title=' + data[i].title + ' data-content=' + data[i].content + '>' +
                    '<div class="info">' +
                    '<div class="dynasty">[周]</div>' +
                    '<div class="author">' + data[i].author + '</div>' +
                    '</div>' +
                    '<div class="content">' +
                    '<span>' + data[i].content + '</span>' +
                    '</div>' +
                    '</div>'
                tr += str;
            }
            $(".case").append(tr);
        },
        error: function() {
            alert("服务器错误");
        }
    });
}

function qian() {
    $.ajax({
        url: "http://localhost:8080/qian", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {}, //参数值
        type: "post", //请求方式
        success: function(data) {
            var tr = "";
            for (var i = 0; i < data.length; i++) {
                var str =
                    '<div class="caseBox">' +
                    '<div class="title" data-id=' + data[i].sid + '>' + data[i].title + '</div>' +
                    '<input type="button" value="喜欢" class="like" data-title=' + data[i].title + ' data-content=' + data[i].content + '>' +
                    '<div class="info">' +
                    '<div class="dynasty">' + '[' + data[i].dynasty + ']' + '</div>' +
                    '<div class="author">' + data[i].author + '</div>' +
                    '</div>' +
                    '<div class="content">' +
                    '<span>' + data[i].content + '</span>' +
                    '</div>' +
                    '</div>'
                tr += str;
            }
            $(".case").append(tr);
        },
        error: function() {
            alert("服务器错误");
        }
    });
}
//主题
function tea() {
    $.ajax({
        url: "http://localhost:8080/tea", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {}, //参数值
        type: "post", //请求方式
        success: function(data) {
            var tr = "";
            for (var i = 0; i < data.length; i++) {
                var str =
                    '<div class="caseBox">' +
                    '<div class="title" data-id=' + data[i].sid + '>' + data[i].title + '</div>' +
                    '<input type="button" value="喜欢" class="like" data-title=' + data[i].title + ' data-content=' + data[i].content + '>' +
                    '<div class="info">' +
                    '<div class="dynasty">' + '[' + data[i].dynasty + ']' + '</div>' +
                    '<div class="author">' + data[i].author + '</div>' +
                    '</div>' +
                    '<div class="content">' +
                    '<span>' + data[i].content + '</span>' +
                    '</div>' +
                    '</div>'
                tr += str;
            }
            $(".case").append(tr);
        },
        error: function() {
            alert("服务器错误");
        }
    });
}

function love() {
    $.ajax({
        url: "http://localhost:8080/love", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {}, //参数值
        type: "post", //请求方式
        success: function(data) {
            var tr = "";
            for (var i = 0; i < data.length; i++) {
                var str =
                    '<div class="caseBox">' +
                    '<div class="title" data-id=' + data[i].sid + '>' + data[i].title + '</div>' +
                    '<input type="button" value="喜欢" class="like" data-title=' + data[i].title + ' data-content=' + data[i].content + '>' +
                    '<div class="info">' +
                    '<div class="dynasty">' + '[' + data[i].dynasty + ']' + '</div>' +
                    '<div class="author">' + data[i].author + '</div>' +
                    '</div>' +
                    '<div class="content">' +
                    '<span>' + data[i].content + '</span>' +
                    '</div>' +
                    '</div>'
                tr += str;
            }
            $(".case").append(tr);
        },
        error: function() {
            alert("服务器错误");
        }
    });
}

function leave() {
    $.ajax({
        url: "http://localhost:8080/leave", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {}, //参数值
        type: "post", //请求方式
        success: function(data) {
            var tr = "";
            for (var i = 0; i < data.length; i++) {
                var str =
                    '<div class="caseBox">' +
                    '<div class="title" data-id=' + data[i].sid + '>' + data[i].title + '</div>' +
                    '<input type="button" value="喜欢" class="like" data-title=' + data[i].title + ' data-content=' + data[i].content + '>' +
                    '<div class="info">' +
                    '<div class="dynasty">' + '[' + data[i].dynasty + ']' + '</div>' +
                    '<div class="author">' + data[i].author + '</div>' +
                    '</div>' +
                    '<div class="content">' +
                    '<span>' + data[i].content + '</span>' +
                    '</div>' +
                    '</div>'
                tr += str;
            }
            $(".case").append(tr);
        },
        error: function() {
            alert("服务器错误");
        }
    });
}

function wine() {
    $.ajax({
        url: "http://localhost:8080/wine", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {}, //参数值
        type: "post", //请求方式
        success: function(data) {
            var tr = "";
            for (var i = 0; i < data.length; i++) {
                var str =
                    '<div class="caseBox">' +
                    '<div class="title" data-id=' + data[i].sid + '>' + data[i].title + '</div>' +
                    '<input type="button" value="喜欢" class="like" data-title=' + data[i].title + ' data-content=' + data[i].content + '>' +
                    '<div class="info">' +
                    '<div class="dynasty">' + '[' + data[i].dynasty + ']' + '</div>' +
                    '<div class="author">' + data[i].author + '</div>' +
                    '</div>' +
                    '<div class="content">' +
                    '<span>' + data[i].content + '</span>' +
                    '</div>' +
                    '</div>'
                tr += str;
            }
            $(".case").append(tr);
        },
        error: function() {
            alert("服务器错误");
        }
    });
}

function think() {
    $.ajax({
        url: "http://localhost:8080/think", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {}, //参数值
        type: "post", //请求方式
        success: function(data) {
            var tr = "";
            for (var i = 0; i < data.length; i++) {
                var str =
                    '<div class="caseBox">' +
                    '<div class="title" data-id=' + data[i].sid + '>' + data[i].title + '</div>' +
                    '<input type="button" value="喜欢" class="like" data-title=' + data[i].title + ' data-content=' + data[i].content + '>' +
                    '<div class="info">' +
                    '<div class="dynasty">' + '[' + data[i].dynasty + ']' + '</div>' +
                    '<div class="author">' + data[i].author + '</div>' +
                    '</div>' +
                    '<div class="content">' +
                    '<span>' + data[i].content + '</span>' +
                    '</div>' +
                    '</div>'
                tr += str;
            }
            $(".case").append(tr);
        },
        error: function() {
            alert("服务器错误");
        }
    });
}
//写景
function spring() {
    $.ajax({
        url: "http://localhost:8080/spring", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {}, //参数值
        type: "post", //请求方式
        success: function(data) {
            var tr = "";
            for (var i = 0; i < data.length; i++) {
                var str =
                    '<div class="caseBox">' +
                    '<div class="title" data-id=' + data[i].sid + '>' + data[i].title + '</div>' +
                    '<input type="button" value="喜欢" class="like" data-title=' + data[i].title + ' data-content=' + data[i].content + '>' +
                    '<div class="info">' +
                    '<div class="dynasty">' + '[' + data[i].dynasty + ']' + '</div>' +
                    '<div class="author">' + data[i].author + '</div>' +
                    '</div>' +
                    '<div class="content">' +
                    '<span>' + data[i].content + '</span>' +
                    '</div>' +
                    '</div>'
                tr += str;
            }
            $(".case").append(tr);
        },
        error: function() {
            alert("服务器错误");
        }
    });
}

function summer() {
    $.ajax({
        url: "http://localhost:8080/summer", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {}, //参数值
        type: "post", //请求方式
        success: function(data) {
            var tr = "";
            for (var i = 0; i < data.length; i++) {
                var str =
                    '<div class="caseBox">' +
                    '<div class="title" data-id=' + data[i].sid + '>' + data[i].title + '</div>' +
                    '<input type="button" value="喜欢" class="like" data-title=' + data[i].title + ' data-content=' + data[i].content + '>' +
                    '<div class="info">' +
                    '<div class="dynasty">' + '[' + data[i].dynasty + ']' + '</div>' +
                    '<div class="author">' + data[i].author + '</div>' +
                    '</div>' +
                    '<div class="content">' +
                    '<span>' + data[i].content + '</span>' +
                    '</div>' +
                    '</div>'
                tr += str;
            }
            $(".case").append(tr);
        },
        error: function() {
            alert("服务器错误");
        }
    });
}

function autumn() {
    $.ajax({
        url: "http://localhost:8080/autumn", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {}, //参数值
        type: "post", //请求方式
        success: function(data) {
            var tr = "";
            for (var i = 0; i < data.length; i++) {
                var str =
                    '<div class="caseBox">' +
                    '<div class="title" data-id=' + data[i].sid + '>' + data[i].title + '</div>' +
                    '<input type="button" value="喜欢" class="like" data-title=' + data[i].title + ' data-content=' + data[i].content + '>' +
                    '<div class="info">' +
                    '<div class="dynasty">' + '[' + data[i].dynasty + ']' + '</div>' +
                    '<div class="author">' + data[i].author + '</div>' +
                    '</div>' +
                    '<div class="content">' +
                    '<span>' + data[i].content + '</span>' +
                    '</div>' +
                    '</div>'
                tr += str;
            }
            $(".case").append(tr);
        },
        error: function() {
            alert("服务器错误");
        }
    });
}

function winter() {
    $.ajax({
        url: "http://localhost:8080/winter", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {}, //参数值
        type: "post", //请求方式
        success: function(data) {
            var tr = "";
            for (var i = 0; i < data.length; i++) {
                var str =
                    '<div class="caseBox">' +
                    '<div class="title" data-id=' + data[i].sid + '>' + data[i].title + '</div>' +
                    '<input type="button" value="喜欢" class="like" data-title=' + data[i].title + ' data-content=' + data[i].content + '>' +
                    '<div class="info">' +
                    '<div class="dynasty">' + '[' + data[i].dynasty + ']' + '</div>' +
                    '<div class="author">' + data[i].author + '</div>' +
                    '</div>' +
                    '<div class="content">' +
                    '<span>' + data[i].content + '</span>' +
                    '</div>' +
                    '</div>'
                tr += str;
            }
            $(".case").append(tr);
        },
        error: function() {
            alert("服务器错误");
        }
    });
}

function mountain() {
    $.ajax({
        url: "http://localhost:8080/mountain", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {}, //参数值
        type: "post", //请求方式
        success: function(data) {
            var tr = "";
            for (var i = 0; i < data.length; i++) {
                var str =
                    '<div class="caseBox">' +
                    '<div class="title" data-id=' + data[i].sid + '>' + data[i].title + '</div>' +
                    '<input type="button" value="喜欢" class="like" data-title=' + data[i].title + ' data-content=' + data[i].content + '>' +
                    '<div class="info">' +
                    '<div class="dynasty">' + '[' + data[i].dynasty + ']' + '</div>' +
                    '<div class="author">' + data[i].author + '</div>' +
                    '</div>' +
                    '<div class="content">' +
                    '<span>' + data[i].content + '</span>' +
                    '</div>' +
                    '</div>'
                tr += str;
            }
            $(".case").append(tr);
        },
        error: function() {
            alert("服务器错误");
        }
    });
}
//节日
function chunjie() {
    $.ajax({
        url: "http://localhost:8080/chunjie", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {}, //参数值
        type: "post", //请求方式
        success: function(data) {
            var tr = "";
            for (var i = 0; i < data.length; i++) {
                var str =
                    '<div class="caseBox">' +
                    '<div class="title" data-id=' + data[i].sid + '>' + data[i].title + '</div>' +
                    '<input type="button" value="喜欢" class="like" data-title=' + data[i].title + ' data-content=' + data[i].content + '>' +
                    '<div class="info">' +
                    '<div class="dynasty">' + '[' + data[i].dynasty + ']' + '</div>' +
                    '<div class="author">' + data[i].author + '</div>' +
                    '</div>' +
                    '<div class="content">' +
                    '<span>' + data[i].content + '</span>' +
                    '</div>' +
                    '</div>'
                tr += str;
            }
            $(".case").append(tr);
        },
        error: function() {
            alert("服务器错误");
        }
    });
}

function yuanxiao() {
    $.ajax({
        url: "http://localhost:8080/yuanxiao", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {}, //参数值
        type: "post", //请求方式
        success: function(data) {
            var tr = "";
            for (var i = 0; i < data.length; i++) {
                var str =
                    '<div class="caseBox">' +
                    '<div class="title" data-id=' + data[i].sid + '>' + data[i].title + '</div>' +
                    '<input type="button" value="喜欢" class="like" data-title=' + data[i].title + ' data-content=' + data[i].content + '>' +
                    '<div class="info">' +
                    '<div class="dynasty">' + '[' + data[i].dynasty + ']' + '</div>' +
                    '<div class="author">' + data[i].author + '</div>' +
                    '</div>' +
                    '<div class="content">' +
                    '<span>' + data[i].content + '</span>' +
                    '</div>' +
                    '</div>'
                tr += str;
            }
            $(".case").append(tr);
        },
        error: function() {
            alert("服务器错误");
        }
    });
}

function qingming() {
    $.ajax({
        url: "http://localhost:8080/qingming", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {}, //参数值
        type: "post", //请求方式
        success: function(data) {
            var tr = "";
            for (var i = 0; i < data.length; i++) {
                var str =
                    '<div class="caseBox">' +
                    '<div class="title" data-id=' + data[i].sid + '>' + data[i].title + '</div>' +
                    '<input type="button" value="喜欢" class="like" data-title=' + data[i].title + ' data-content=' + data[i].content + '>' +
                    '<div class="info">' +
                    '<div class="dynasty">' + '[' + data[i].dynasty + ']' + '</div>' +
                    '<div class="author">' + data[i].author + '</div>' +
                    '</div>' +
                    '<div class="content">' +
                    '<span>' + data[i].content + '</span>' +
                    '</div>' +
                    '</div>'
                tr += str;
            }
            $(".case").append(tr);
        },
        error: function() {
            alert("服务器错误");
        }
    });
}

function duanwu() {
    $.ajax({
        url: "http://localhost:8080/duanwu", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {}, //参数值
        type: "post", //请求方式
        success: function(data) {
            var tr = "";
            for (var i = 0; i < data.length; i++) {
                var str =
                    '<div class="caseBox">' +
                    '<div class="title" data-id=' + data[i].sid + '>' + data[i].title + '</div>' +
                    '<input type="button" value="喜欢" class="like" data-title=' + data[i].title + ' data-content=' + data[i].content + '>' +
                    '<div class="info">' +
                    '<div class="dynasty">' + '[' + data[i].dynasty + ']' + '</div>' +
                    '<div class="author">' + data[i].author + '</div>' +
                    '</div>' +
                    '<div class="content">' +
                    '<span>' + data[i].content + '</span>' +
                    '</div>' +
                    '</div>'
                tr += str;
            }
            $(".case").append(tr);
        },
        error: function() {
            alert("服务器错误");
        }
    });
}

function zhongqiu() {
    $.ajax({
        url: "http://localhost:8080/zhongqiu", //请求的url地址
        dataType: "json", //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {}, //参数值
        type: "post", //请求方式
        success: function(data) {
            var tr = "";
            for (var i = 0; i < data.length; i++) {
                var str =
                    '<div class="caseBox">' +
                    '<div class="title" data-id=' + data[i].sid + '>' + data[i].title + '</div>' +
                    '<input type="button" value="喜欢" class="like" data-title=' + data[i].title + ' data-content=' + data[i].content + '>' +
                    '<div class="info">' +
                    '<div class="dynasty">' + '[' + data[i].dynasty + ']' + '</div>' +
                    '<div class="author">' + data[i].author + '</div>' +
                    '</div>' +
                    '<div class="content">' +
                    '<span>' + data[i].content + '</span>' +
                    '</div>' +
                    '</div>'
                tr += str;
            }
            $(".case").append(tr);
        },
        error: function() {
            alert("服务器错误");
        }
    });
}