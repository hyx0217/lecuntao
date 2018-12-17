define(['config'], function() {
    require(['jquery','jqcookie'],function(){
        function goodslist(id,count){
            $.ajax({
                type:"post",
                url:"http://10.31.155.138/projectname/php/cart.php",
                dataType:"json"
            }).done(function(data){
                $.each(data,function(index,ele){
                    if(id==ele.sid){
                        var $clonecart=$('.cart_bot:hidden').clone(true,true);
                        $clonecart.find('.cart_details_img ').find('img').attr('src',ele.goods_url);
                        $clonecart.find('.cart_details_img ').find('img').attr('sid',ele.sid);
                        $clonecart.find('.cart_details_title ').find('a').html(ele.goods_title);
                        $clonecart.find('.cart_price').html(ele.goods_price);
                        $clonecart.find('.calculate').val(count);
                        $clonecart.find('.cart_total').find('span').html((ele.goods_price*count).toFixed(2));
                        $clonecart.show();
                        $('tbody').append($clonecart);
                        calprice();
                    }
                });
           
            })
        }
        //购物车数量改变
        cartnum()
        function cartnum(){
            var $timer=setInterval(function(){
                if($.cookie('cookiesid') && $.cookie('cookienum')){
                    var sid=$.cookie('cookiesid').split(',');
                    var num=$.cookie('cookienum').split(',');
                    var sum=0;
                    $.each(num,function(i,ele){
                        sum+=parseInt(ele);
                    })
                    if(sum>99){
                        $('.n_shopcar b').html(99);
                    }else{
                        $('.n_shopcar b').html(sum);
                    }
                }
            },100)

        }
        
        //cookie存在 渲染购物车页面
            if($.cookie('cookiesid') && $.cookie('cookienum')){
                var sid=$.cookie('cookiesid').split(',');
                var num=$.cookie('cookienum').split(',');
                var sum=0;
                $.each(sid, function(index,ele){
                    goodslist(sid[index],num[index]);
                })
            }
    
       

        //计算总价
        function calprice(){
            var $sum=0;
            var $talprice=0;
           
            $('.cart_bot:visible').each(function(index,ele){
          
                if($(ele).find('.cart_btn:visible input').prop('checked')){
                    $sum+=parseInt($(ele).find('.cart_num input').val());
                    $talprice+=parseFloat($(ele).find('.cart_total span').html());
                }
            });

            $('.sure_many').find('strong').html($sum);
            $('.sure_price').find('strong').html($talprice.toFixed(2));
        }

        //全选
        $(".allsel").on('change',function(){
            $('.cart_btn:visible input').prop('checked',$(this).prop('checked'));
            $('.allsel:visible').prop('checked',$(this).prop('checked'));
            calprice();
        })
        $('.cart_bot').on('change',$('.cart_btn:visible input'),function(){
            if($('.cart_btn:visible input').length==$('.cart_btn:visible input:checked').size()){
                $('.allsel').prop('checked',true);
            }else{
                $('.allsel').prop('checked',false);
            }
            calprice();
        })

        //改变数量
        $('.up').on('click',function(){
            var $num=$(this).prev('input').val();
            $num++;
            if($num>=99){
                $num=99
            }
            $(this).prev('input').val($num)
            $(this).parents('.cart_bot').find('.cart_total').find('span').html(countprice($(this)));
            setcookie($(this));            
            calprice();
        })

        $('.down').on('click',function(){
            var $num=$(this).next('input').val();
            $num--;
            if($num<=1){
                $num=1
            }
            $(this).next('input').val($num)
            $(this).parents('.cart_bot').find('.cart_total').find('span').html(countprice($(this)));
            setcookie($(this));
            calprice();
        })

        //输入改变数量
        $('.calculate').on('input',function(){
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
            $(this).parents('.cart_bot').find('.cart_total').find('span').html(countprice($(this)));
            setcookie($(this));
            calprice();
        })

        //计算单个商品的总价格
        function countprice(obj){
            var $price= parseFloat(obj.parents('.cart_bot').find('.cart_price').html());
            var $num=parseInt(obj.parents('.cart_bot').find('.calculate').val());
            return ($price * $num).toFixed(2);
        }

        //改变数量后存入cookie方法
        var arrsid=[];
        var arrnum=[];
        function cookiearray(){
            if($.cookie('cookiesid') && $.cookie('cookienum')){
                arrsid=$.cookie('cookiesid').split(',');
                arrnum=$.cookie('cookienum').split(',');
            }
        }
        function setcookie(obj){
            cookiearray();
            var index=obj.parents('.cart_bot').find('.cart_details_img').find('img').attr('sid');
            arrnum[$.inArray(index,arrsid)]=obj.parents('.cart_bot').find('.calculate').val();
            $.cookie('cookienum',arrnum.toString(),{expires:10});
        }
         
        //删除cookie
        function delcookie(sid,arrsid){
            var i=-1;
            $.each(arrsid,function(index,ele){
                if(sid==ele){
                    i=index;
                }
                arrsid.splice(i,1);
                arrnum.splice(i,1);
                $.cookie('cookiesid',arrsid.toString(),{expires:10});
                $.cookie('cookienum',arrnum.toString(),{expires:10});
            })
        }

        //点击删除
        $('.cart_delete').on('click',function(){
            cookiearray();
            $(this).parents('.cart_bot').remove();
            delcookie($(this).parents('.cart_bot').find('.cart_details_img').attr('sid'),arrsid);
            kong();
            calprice();
            if($('.cart_delete:visible').size()==0){
                window.location.reload();
            }
        })
        //全部删除
        $('.sure_sel span').on('click',function(){
            cookiearray();
            if(confirm('你确定要清除购物车吗')){
                $('.cart_bot:visible').each(function(index,ele){
                    $(ele).remove();
                    delcookie($(ele).find('img').attr('sid'),arrsid);
                });
                calprice();
                kong();
                window.location.reload();
            }
        })
         //隐藏
         kong();
         function kong(){
             if($.cookie('cookiesid') && $.cookie('cookienum')){
                 $('.hidebox').hide();
                 $('.container').show();
             }else{
                 $('.hidebox').show();
                 $('.container').hide();
             }
        
         }
    })
});