
<div class="sd_content">
    <div class="content_main">
        <div class="login_content_left">
            <p><img src="<?php echo SHOP_TEMPLATES_URL;?>/images/login_logo.png" width="540" height="460"/></p>
        </div>
        <div class="login_content_right">
            <p class="login_zhanghao">136323...,<span>欢迎回来！请登录</span></p>
            <form name="form1" method="post" action="">
                <p>
                    <input type="text" name="userName" class="userName" value="邮箱/手机号" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '手机号';}">
                </p>
                <p>
                    <input type="text" name="passWord" class="userName" value="密码" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '密码';}">
                </p>
                <p><input name="Button" type="button" value="登录" id="login"></p>
                <p class="keeplogin">
                    <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" />
                    <label for="loginkeeping">记住用户名</label>
                    <span class="login_mm">忘记密码？<span style="color:#3e79d7;"><a href="gerenzhsz.html">免费注册</a></span></span>
                </p>
            </form>
        </div>
    </div>
</div>
<!--   引入jQuery -->
<script src="<?php echo SHOP_TEMPLATES_URL;?>/js/jquery/jquery-1.3.1.js" type="text/javascript"></script>
<script src="<?php echo SHOP_TEMPLATES_URL;?>/js/form.js" type="text/javascript"></script>
<script src="<?php echo SHOP_TEMPLATES_URL;?>/js/yanzhengma.js" type="text/javascript"></script>

</body>
</html>