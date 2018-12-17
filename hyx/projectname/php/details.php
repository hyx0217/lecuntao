<?php
    include "conn.php";
    $sid=$_POST['dtsid'];
    $result=mysql_query("select * from goods where sid=$sid");
    $goodsarr=array();
    for($i=0;$i<mysql_num_rows($result);$i++){
        $goodsarr[$i]=mysql_fetch_array($result,MYSQLI_ASSOC);
    }
     echo json_encode($goodsarr); 
?>