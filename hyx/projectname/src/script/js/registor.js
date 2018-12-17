;!function($){
    //注册验证
    $(function(){
        $('#form1').validate({
            rules:{
                username:{
                    required:true,
                    rangelength:[11,11],
                    remote:{
                        type:'post',
                        url:'http://10.31.155.138/projectname/php/registor.php'
                    } 
                },
                password:{
                    required:true,
                    minlength:6
                },
                repassword:{
                    required:true,
                    equalTo:'#password'
                },
            },
            messages:{
                username:{
                    required:'用户名不能为空',
                    rangelength:'手机号不符合',
                    remote:'<em class="error">用户名已存在</em>'
                },
                password:{
                    required:'密码不能为空',
                    minlength:'密码不能小于6位'
                },
                repassword:{
                    required:'密码重复不能为空',
                    equalTo:'密码不匹配'
                },
            }
        });
    });
    $.validator.setDefaults({
        //添加校验成功后的执行函数--修改提示内容，并为正确提示信息添加新的样式(默认是valid)
        success: function(label){
            label.text('√').css('color','green').addClass('valid');
        }
    });
    
    //登录验证
    $('.btn').on('click',function(){
        if($('.user').val() && $('.pass').val()){
            $.ajax({
                type:'post',
                url:'http://10.31.155.138/projectname/php/login.php',
                data:{
                    username:$('.user').val(),
                    password:$('.pass').val(),
                },
                success:function(data){
                    if(data){
                        $.cookie("username",$('.user').val(),{expires:10});
                        $(location).attr('href',"http://10.31.155.138/projectname/src/index.html");
                        $('.loginsb em').hide();
                    }else{
                        $('.loginsb em').show();
                    }
                }
            })
        }else{
            $('.loginsb em').show();
        }
      
    })
    
}(jQuery);