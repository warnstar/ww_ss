<!DOCTYPE HTML>
<html>
<?php
	function get_target($page_name_index){
		switch ($page_name_index){
			case 'login':
				return "登陆";
			default:
				return "五维商城";
		}
	}
?>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf8" />
	<title><?=get_target($page_name)?></title>
	<link href="<?php echo SHOP_TEMPLATES_URL;?>/css/mima.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<!--header-->
<div class="header_wrap headdle">
	<div class="public_header">
		<div class="logo logo_from logo_login"><img src="<?php echo SHOP_TEMPLATES_URL;?>/images/logo.png"/></div>
		<div class="find_mm"><?=get_target($page_name)?></div>
	</div>
</div>

<?php require_once($tpl_file);?>