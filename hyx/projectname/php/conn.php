<?php 
    header('content-type:text/html;charset=utf-8');
    define('host','localhost');
    define('username','root');
    define('password','12345678');
    $conn=@mysql_connect(host,username,password);
    if(!$conn){
       die('数据库连接失败'.mysql_error());
    }

    mysql_select_db('lecuntao');
    mysql_query('set names utf8');

    
?>