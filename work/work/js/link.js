const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyPaeser = require('body-parser');
const multer = require('multer');
const consolidate = require('consolidate');
const mysql = require('mysql');
const { ok } = require('assert');

//连接池
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'changxiangsi'
});

var server = express();
server.listen(8080);

//1.解析cookie
server.use(cookieParser(''));

//2.使用session
var arr = [];
for (var i = 0; i < 100000; i++) {
    arr.push('keys_' + Math.random());
}
server.use(cookieSession({
    name: 'zns_sess_id',
    keys: arr,
    maxAge: 20 * 3600 * 1000
}));

//3.post数据
server.unsubscribe(bodyPaeser.urlencoded({ extended: false }));
server.use(multer({ dest: './work/upload' }).any());

//4.配置模板引擎
//输出什么东西
server.set('view engine', 'html');
//模板文件放在哪
server.set('views', './work');
//哪种模板引擎
// server.engine('html', consolidate.ejs);

//接收用户请求
server.get('/', (req, res) => {
    //查询
    connection.query("select * from banner_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.render('homePage.html');
        }
    });
});
server.post('/banner', (req, res) => {
    connection.query("select * from banner_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/recommend', (req, res) => {
    connection.query("select * from recommend_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/messageInfo', (req, res) => {
    connection.query("select * from message_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
//选集
server.post('/tang', (req, res) => {
    connection.query("select * from tang_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/song', (req, res) => {
    connection.query("select * from song_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/yuan', (req, res) => {
    connection.query("select * from yuan_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/shijing', (req, res) => {
    connection.query("select * from shijing_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/qian', (req, res) => {
    connection.query("select * from qian_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
//主题
server.post('/tea', (req, res) => {
    connection.query("select * from tea_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/love', (req, res) => {
    connection.query("select * from love_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/leave', (req, res) => {
    connection.query("select * from leave_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/wine', (req, res) => {
    connection.query("select * from wine_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/think', (req, res) => {
    connection.query("select * from think_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
//写景
server.post('/spring', (req, res) => {
    connection.query("select * from spring_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/summer', (req, res) => {
    connection.query("select * from summer_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/autumn', (req, res) => {
    connection.query("select * from autumn_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/winter', (req, res) => {
    connection.query("select * from winter_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/mountain', (req, res) => {
    connection.query("select * from mountain_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
//节日
server.post('/chunjie', (req, res) => {
    connection.query("select * from chunjie_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/yuanxiao', (req, res) => {
    connection.query("select * from yuanxiao_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/qingming', (req, res) => {
    connection.query("select * from qingming_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/duanwu', (req, res) => {
    connection.query("select * from duanwu_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/zhongqiu', (req, res) => {
    connection.query("select * from zhongqiu_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.use(bodyPaeser.urlencoded({ extend: false }));
server.use(bodyPaeser.json());
server.post('/message', (req, res) => {
    var content = req.body.content;
    var date = req.body.date;
    var name = req.body.name;
    // console.log(name)
    // console.log(content)
    // console.log(date)
    connection.query(`insert into message_table(name,content,date) value('${name}','${content}','${date}')`, (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            //需要清除数据库自增问题事使用下面那条句子
            //connection.query(`truncate table message_table`);
            res.send(data);
        }
    });
});
server.post('/seachLike', (req, res) => {
    var title = JSON.stringify(req.body.title);
    connection.query(`select * from like_table where title=${title}`, (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/like', (req, res) => {
    var title = req.body.title;
    var content = req.body.content;
    var uid = req.body.uid;
    // console.log(title)
    // console.log(content)
    connection.query(`insert into like_table(title,content,uid) value('${title}','${content}','${uid}')`, (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            //需要清除数据库自增问题事使用下面那条句子
            //connection.query(`truncate table like_table`);
            res.send(data);
        }
    });
});
server.post('/likeInfo', (req, res) => {
    var uid = req.body.uid;
    connection.query(`select * from like_table where uid=${uid}`, (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});

server.post('/detail', (req, res) => {
    var id = req.body.id;
    connection.query(`select * from appreciate_table where id=${id}`, (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/text', (req, res) => {
    var title = JSON.stringify(req.body.text);
    connection.query(`select * from appreciate_table where title=${title}`, (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/userNames', (req, res) => {
    var id = req.body.id;
    connection.query(`select * from user_table where id=${id}`, (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
//登录注册
server.post('/user', (req, res) => {
    var password = req.body.password;
    var name = req.body.name;
    connection.query(`insert into user_table(name,password) value('${name}','${password}')`, (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            //需要清除数据库自增问题事使用下面那条句子
            //connection.query(`truncate table user_table`);
            res.send(data);
        }
    });
});
server.post('/searchUser', (req, res) => {
    var name = JSON.stringify(req.body.name);
    connection.query(`select * from user_table where name=${name}`, (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/searchName', (req, res) => {
    var name = JSON.stringify(req.body.name);
    connection.query(`select * from user_table where name=${name}`, (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
server.post('/searchPassword', (req, res) => {
    var password = req.body.password;
    connection.query(`select * from user_table where password=${password}`, (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.send(data);
        }
    });
});
//static数
server.use(static('./work'));