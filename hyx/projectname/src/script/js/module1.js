define(['config'], function() {
    require(['jquery','jqcookie'],function(){
       
      
       
        //轮播图
        var $btn=$('.nav_banner ul li');
        var $rbtn=$('.rbtns');
        var $lbtn=$('.lbtns');
        var $banner=$('.banner');
        var $hovbanner=$('.nav_banner');
        var $num=0;
        var $timer=null;
        $hovbanner.hover(function(){
            $lbtn.show();
            $rbtn.show();
            clearInterval($timer);
        },function(){
            $lbtn.hide();
            $rbtn.hide();
            $timer=setInterval(function(){
                $rbtn.click();
            },2000)})
      
        $btn.on('mouseover',function(){
            $num=$(this).index();
            lun();
        })
        $rbtn.on('click',function(){
            $num++;
            if($num>3){
                $num=0;
            }
            lun();
        })
        $lbtn.on('click',function(){
            $num--;
            if($num<0){
                $num=3
            }
            lun();
        })
        $timer=setInterval(function(){
            $rbtn.click();
        },2000)
        function lun(){
            $btn.eq($num).addClass('active').siblings('li').removeClass('active').stop(true);
            $banner.eq($num).stop(true).animate({
                opacity:1
            }).siblings('a').animate({
                opacity:0
            })
        }
        //楼梯
        var $fLi=$('.floor ul li');
        var $flnum=$('.floornum');
        var $flname=$('.floorname');
        $fLi.each(function(index,element){
            $(element).hover(function(){
                $flnum.eq(index).hide();
                $flname.eq(index).show()
            },function(){
                $flnum.eq(index).show();
                $flname.eq(index).hide();
            })
        })
        $fLi.on('click',function(){
            var $num=$(this).index();
            $flnum.eq($num).hide();
            $('html,body').animate({
                scrollTop:$('#main>div').eq($num).offset().top
            })
        })
        $(window).on('scroll',function(){
            var $top=$(window).scrollTop();
            if($top>300&& $top<5000){
                $('.floor').show();
            }else{
                $('.floor').hide();
            }
            $('#main>div').each(function(index,element){
                var $sctop=$(element).offset().top+350;
                if($sctop>$top){
                    $flnum.show();
                    $flnum.eq(index).hide().siblings('a').show();
                    return false;
                }
            })
        })
        $('.back').on('click',function(){
            $('html,body').animate({
                scrollTop:0
            })
        })

        //新闻滚动
        /* var speed=20;
        if(speed<-100){
            clearInterval($sctimer);
            speed=20;
            $('.scnews ul').css('top','0');
        }else{
            var $sctimer=setInterval(function(){
                speed--;
                $('.scnews ul').animate({
                    top:speed
                },50)
                
            },20)    
        } */
        /* scl();
        function scl(){
            var $sctimer=setInterval(function(){
                $('.scnews ul').animate({
                    top:-50
                },500,function(){
                    $('.scnews ul').css('top',0).animate({top:-50},500)
                });
               
            },500)
        } */
        var $sctimer=setInterval(scl,200);
        $('.scnews ul').hover(function(){
            clearInterval($sctimer);
        },function(){
            $sctimer=setInterval(scl,200);
        })
        function scl(){
            var str=$('.scnews ul li').eq(0).clone(true,true);//
            $('.scnews ul li').eq(0).animate({
                marginTop:-47
            },1500,function(){
                $('.scnews ul li').eq(0).remove();
                $('.scnews ul').append(str);
            }); 
        }

        var $sctimer=setInterval(scl2,200);
        $('.scnews2 ul').hover(function(){
            clearInterval($sctimer);
        },function(){
            $sctimer=setInterval(scl2,200);
        })
        function scl2(){
            var str=$('.scnews2 ul li').eq(0).clone(true,true);//
            $('.scnews2 ul li').eq(0).animate({
                marginTop:-47
            },1500,function(){
                $('.scnews2 ul li').eq(0).remove();
                $('.scnews2 ul').append(str);
            }); 
        }
    })
})
