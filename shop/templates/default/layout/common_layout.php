<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf8"/>
	<title>首页</title>
	<link href="<?php echo SHOP_TEMPLATES_URL;?>/css/index.css" rel="stylesheet" type="text/css"/>
	<link href="<?php echo SHOP_TEMPLATES_URL;?>/css/style.css" rel="stylesheet" type="text/css"/>

	<script src="<?php echo SHOP_TEMPLATES_URL;?>/js/jquery-1.8.3.min.js" type="text/javascript"></script>
	<!--左侧菜单-->
	<script src="<?php echo SHOP_TEMPLATES_URL;?>/js/sider.js" type="text/javascript"></script>
	<!--banner滚动-->
	<script src="<?php echo SHOP_TEMPLATES_URL;?>/js/jquery.superslide.2.1.1.js" type="text/javascript"></script>
	<!--动画-->
	<script src="<?php echo SHOP_TEMPLATES_URL;?>/js/lrscroll.js" type="text/javascript"></script>
	<!--公告-->
	<script src="<?php echo SHOP_TEMPLATES_URL;?>/js/tabs.js" type="text/javascript"></script>
	<!--求购-->
	<script src="<?php echo SHOP_TEMPLATES_URL;?>/js/qiugou.js" type="text/javascript"></script>
	<!--店铺，商品选择切换-->
	<script src="<?php echo SHOP_TEMPLATES_URL;?>/js/jquery/index_tab.js" type="text/javascript"></script>
	<!--动态新闻-->
	<script src="<?php echo SHOP_TEMPLATES_URL;?>/js/news1.js" type="text/javascript"></script>
	<!--左侧菜单栏
	<script src="<?php echo SHOP_TEMPLATES_URL;?>/js/tables.js" type="text/javascript"></script>-->
	<script src="<?php echo SHOP_TEMPLATES_URL;?>/js/left_shop.js" type="text/javascript"></script>
	<!--资讯banner-->
	<script src="<?php echo SHOP_TEMPLATES_URL;?>/js/jquery.luara.0.0.1.min.js" type="text/javascript"></script>
	<script>
		$(document).ready(function(){
			<!--图片切换骨架end-->
			$(function(){
				<!--调用Luara示例-->
				$(".zx_banner").luara({width:"460",height:"240",interval:6500,selected:"seleted",deriction:"left"});

			});
			/*鼠标移过，左右按钮显示*/
			$(".top_banner").hover(function(){
				$(this).find(".prev,.next").fadeTo("show",0.5);
			},function(){
				$(this).find(".prev,.next").hide();
			});
			/*鼠标移过某个按钮 高亮显示*/
			$(".prev,.next").hover(function(){
				$(this).fadeTo("show",0.7);
			},function(){
				$(this).fadeTo("show",0.5);
			});
			$(".top_banner").slide({ titCell:".num ul" , mainCell:".top_slide" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });

		});
	</script>
	
</head>
<body>
<!--top-->
<div class="public_top">
	<div class="wrapper_top">
		<div class="user">
			<span><a>手机五维商城</a></span>
			<span><a>[登陆]</a></span>
			<span><a>新用户？</a></span>
			<span><a>[免费注册]</a></span>
		</div>
		<div class="menu_right">
			<ul class="menu_top">
				<li class="menu_1"><a>五维商城首页</a></li>
				<span class="icon_y">|</span>
				<li class="menu_2"><a>个人中心</a></li>
				<span class="icon_y">|</span>
				<li class="menu_3"><a>进货单</a></li>
				<span class="icon_y">|</span>
				<li class="menu_4"><a>收藏夹<span class="sl">0</span></a></li>
				<span class="icon_y">|</span>
				<li class="menu_5"><a>客服中心</a></li>
			</ul>
		</div>
	</div>
</div>
<!--/top-->
<!--header-->
<div class="header_wrap">
	<div class="public_header">
		<div class="logo"><img src="<?php echo SHOP_TEMPLATES_URL;?>/images/logo.png"/></div>
		<div class="sc_biaoyu"><img src="<?php echo SHOP_TEMPLATES_URL;?>/images/biaoyu.png"/>
		</div>
		<div class="header_search">
			<div class="tab_main_search">
				<div class="tab_search">
					<ul>
						<li class="selected">商品</li>
						<li>店铺</li>
					</ul>
				</div>
				<div class="tab_search_find">
					<div>
						<div class="search search_1">
							<input type="text" name="s" class="textbox" value="请您输入商品关键字" onFocus="this.value = '';"
							       onBlur="if (this.value == '') {this.value = '请您输入商品关键字';}">
							<input type="submit" value="Subscribe" id="submit" name="submit"><a class="sh">搜索</a>
							<div class="response"></div>
						</div>
					</div>
					<div class="hide">
						<div class="search search_1">
							<input type="text" name="s" class="textbox" value="请您输入店铺关键字" onFocus="this.value = '';"
							       onBlur="if (this.value == '') {this.value = '请您输入商品关键字';}">
							<input type="submit" value="Subscribe" id="submit" name="submit"><a class="sh">搜索</a>
							<div class="response"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="fabu">发布询价单</div>
		<div class="erwm">
			<p><img src="<?php echo SHOP_TEMPLATES_URL;?>/images/erweim.png" width="59" height="58"></p>
			<p>扫一扫，下载APP</p>
		</div>
	</div>
</div>
<!--导航-->
<div class="public_nav">
	<div class="nav">
		<div class="all-sort">
			<?php require template('layout/home_goods_class');?>
		</div>
		<div class="nav_right">
			<ul class="clearfix">
				<li><a href="index.html">地区卖场</a></li>
				<li><a href="maichang.html">风指标</a></li>
				<li><a href="javascript:void(0);">库存尾货</a></li>
				<li><a href="javascript:void(0);">五维资讯</a></li>
			</ul>
		</div>
	</div>
</div><!--/导航-->

