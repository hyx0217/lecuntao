<?php
    include "conn.php";
    if(isset($_POST['username'])){
        $user=$_POST['username'];
        $query=mysql_query("select * from user where userphone='$user'");
        if(mysql_fetch_array($query)){
            echo 'false';
        }else{
            echo 'true';
        }
    }
    if(isset($_POST['submit'])){
        $userphone=$_POST['username'];
        $psd=$_POST['password'];
        mysql_query("insert user values ('null','$userphone','$psd',NOW())");
        header('location:http://10.31.155.138/projectname/src/login.html');
    }
    
?>