<?php
    include 'conn.php';
    if(isset($_POST['username'])&&isset($_POST['password'])){
        $user=$_POST['username'];
        $psd=$_POST['password'];
        $query=mysql_query("select * from user where userphone=$user and password=$psd");
        if(mysql_fetch_array($query)){
            echo true;
        }else{
            echo false;
        }
    }
?>