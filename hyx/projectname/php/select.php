<?php
    include 'conn.php';
    //定义个结果集
    $result=mysql_query('select * from goods');
    //echo mysql_fetch_array($result);
    //print_r(mysql_fetch_array($result,MYSQLI_ASSOC));
    //print_r(mysql_fetch_array($result,MYSQLI_ASSOC));

    //echo mysql_num_rows($result);//获取记录的条数
    $goodsarr=array();
    for($i=0;$i<mysql_num_rows($result);$i++){
        $goodsarr[$i]=mysql_fetch_array($result,MYSQLI_ASSOC);
    }
     echo json_encode($goodsarr); 
?>