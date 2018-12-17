define(['config'],function(){
    require(['jquery','jqcookie'],function(){
        $('.tuichu').on('click',function(){
            $.cookie('username',null);
        })
        //cookie
        testcookie();
        function testcookie(){
            if($.cookie('username')!='null' && $.cookie('username')!=undefined){
                $('.tuichu').show();
                $('.getcookie').html($.cookie('username'));  
            }else{
                $('.tuichu').hide();
                $('.getcookie').show();
            }
        }
       

        //渲染数据图片
        $.ajax({
            type:"post",
            dataType:'json',
            url:'http://10.31.155.138/projectname/php/select.php',
            success:function(data){
                // var data=JSON.parse(d);
                var $str='<ul class="s2_r">'
                for(var value of data ){
                    $str+=`<li>
                            <a href='http://10.31.155.138/projectname/src/details.html?sid=${value.sid}' target="_blank" '>
                                <h2>${value.goods_title}</h2>
                                 <p><img class='lazy' data-original="${value.goods_url}"></p>
                                <div>
                                    <h3>￥${value.goods_price}</h3>
                                     <span><img class='lazy' data-original="https://www.lecuntao.com/homenew/templates/default/images/flr_ua_buy.png" alt=""></span>
                                </div>
                            </a>
                            </li> `
                }
                $str+='</ul>';
                $('.s2_l').after($str);
            
                //显示价格
                var $aprice=$('.s2_r li a div');
                var $ali=$('#main').find('.s2_r li');
                var $img=$('.s2_r li a p img');
                $ali.each(function(index,ele){
                    $(ele).hover(function(){
                        $img.eq(index).stop(true,true).animate({
                           top:-5
                        },300);
                        $aprice.eq(index).stop(true,true).animate({
                            bottom:0
                        })
                    },function(){
                        $img.eq(index).stop(true,true).animate({
                            top:0
                         },300);
                        $aprice.eq(index).stop(true,true).animate({
                            bottom:-34
                        },)
                    }) 
                })
            },
                    
            //懒加载
            complete:function(){
                $(function() {
                    require(['jqlazyload'],function(){
                        $("img.lazy").lazyload({
                            effect: "fadeIn"
                        });
                     })
                });
            }
        })

        //渲染详情页
        var $dtsid=document.location.search.substring('1').split('=')
        $.ajax({
            type:'post',
            url:"http://10.31.155.138/projectname/php/details.php",
            dataType:'json',
            data:{
                dtsid:$dtsid[1]
            },
            success:function(data){
                var $imgstr="";
                var $infstr="";
                for(var value of data){
                    console.log(value.urls.split(','));
                    var $urls=value.urls.split(',');
                    $imgstr+=`
                    <div>
                        <img src="${$urls[0]}" id='smpic' sid="${value.sid}">
                        <span></span>
                    </div>
                    <p>
                    <img src="${$urls[0]}" alt="">   
                    </p>
                    <ul>
                        <li>
                                <img src="${$urls[0]}" alt="">
                        </li>
                        <li>
                                <img src="${$urls[1]}" alt="">
                        </li>
                        <li>
                                <img src="${$urls[2]}" alt="">
                        </li>
                        <li>
                                <img src="${$urls[3]}" alt="">
                        </li>
                    </ul>`
                    $infstr+=`
                    <div class="goods_title">
                    <h2>
                        ${value.goods_title}
                    </h2>
                    </div>
                    <div class="goods_price">
                        <dl>
                            <dt>市&nbsp;场&nbsp;价：</dt>
                            <dd>￥68.00</dd>
                        </dl>
                        <dl>
                            <dt>商&nbsp;城&nbsp;价：</dt>
                            <dd><span>${value.goods_price}(起订量2)</span></dd>
                        </dl>
                    <div class="goods_coment">
                        <dl>
                                <dt style="text-align: center">商品评分</dt>
                                <dd style="width:100px">
                                    <img src="http://www.lecuntao.com/data/resource/js/jquery.raty/img/star-on.png" alt="">
                                    <img src="http://www.lecuntao.com/data/resource/js/jquery.raty/img/star-on.png" alt="">
                                    <img src="http://www.lecuntao.com/data/resource/js/jquery.raty/img/star-on.png" alt="">
                                    <img src="http://www.lecuntao.com/data/resource/js/jquery.raty/img/star-on.png" alt="">
                                    <img src"http://www.lecuntao.com/data/resource/js/jquery.raty/img/star-on.png" alt="">
                                </dd>
                        </dl>   
                    </div>
                    `
                }
                $('.goods_send').before($infstr);
                $('.goods_img').append($imgstr);
                 //放大镜
                var $odiv=$('.goods_img div');
                var $spic=$('.goods_img div img');
                var $sf=$('.goods_img div span');
                var $bpic=$('.goods_img p img');
                var $bf=$('.goods_img p');
                $odiv.hover(function(){
                    $sf.show();
                    $bf.show();
                },function(){
                    $sf.hide();
                    $bf.hide();
                }).on('mousemove',function(ev){
                    var $bili=$bpic.width()/$spic.width();
                    var $sfwidth=$bf.width()/$bili;
                    var $sfheight=$bf.height()/$bili;
                    $sf.css({
                        "width":$sfwidth,
                        "height":$sfheight,
                        "left":ev.clientX-$odiv.offset().left-$sf.width()/2,
                        "top":ev.clientY-$odiv.offset().top-$sf.height()/2,
                    })
                    if($sf.position().left<=0){
                        $sf.css('left',0);
                    }else if($sf.position().left>=$odiv.width()-$sf.width()){
                        $sf.css('left',$odiv.width()-$sf.width());
                    }
                    if($sf.position().top<=0){
                        $sf.css('top',0);
                    }else if($sf.position().top>=$odiv.height()-$sf.height()){
                        $sf.css('top',$odiv.height()-$sf.height());
                    }
                    $bpic.css({
                        "left":-$sf.position().left*$bili,
                        "top":-$sf.position().top*$bili
                    })
                })

                //切换图片
                var  $swimg=$('.goods_img li ')
                $swimg.on('click','img',function(ev){
                    var ele=ev.target;
                    console.log(ele.src);
                    $spic.attr('src',ele.src);
                    $bpic.attr('src',ele.src);
                })
            }
        })
        var arrsid=[];
        var arrnum=[];
        //存cookie
        function cookietoarray(){
            if($.cookie('cookiesid') && $.cookie('cookienum')){
                arrsid=$.cookie('cookiesid').split(',');
                arrnum=$.cookie('cookienum').split(',');
            }
        }

        //点击添加购物车
        $('.goods_shop a').on('click',function(){
            var $sid=$(this).parents('.goods').find('#smpic').attr('sid');
            cookietoarray();
            if($.inArray($sid,arrsid)!=-1){
                var num= parseInt(arrnum[$.inArray($sid,arrsid)])+parseInt($('.buynum').val());
                arrnum[$.inArray($sid,arrsid)]=num;
                $.cookie('cookienum',arrnum.toString(),{expires:10});
            }else{
                arrsid.push($sid);
                $.cookie('cookiesid',arrsid.toString(),{expires:10});
                arrnum.push($('.buynum').val());
                $.cookie('cookienum',arrnum.toString(),{expires:10})
            }
            alert('添加成功')
        })
        $('.btnrt').on('click',function(){
            var $num=$(this).prev('input').val();
            $num++;
            if($num>=99){
                $num=99
            }
            $(this).prev('input').val($num)
        })

        $('.btnlt').on('click',function(){
            var $num=$(this).next('input').val();
            $num--;
            if($num<=1){
                $num=1
            }
            $(this).next('input').val($num)
        })

        //输入改变数量
        $('.buynum').on('input',function(){
            var $reg= /^\d+$/g;
            var $value=parseInt($(this).val());
            if($reg.test($value)){
                if ($value >= 99){
                    $(this).val(99);
                }else if($value<=0){
                    $(this).val(1);
                }else{
                    $(this).val($value);
                }
            }else{
                $(this).val(1);
            }
        })

       

    })
})