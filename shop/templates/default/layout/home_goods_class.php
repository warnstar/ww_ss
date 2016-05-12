<h2 class="slider_nav_title"><a href="">所有分类</a></h2>
<ul class="slider_nav all-sort-list">

	<?php if (!empty($output['show_goods_class']) && is_array($output['show_goods_class'])) {
		$i = 0; ?>
		<?php foreach ($output['show_goods_class'] as $key => $val) {
			$i++; ?>
			<li class="nav_title item">
				<h3 class="title">
					<span class="nav_ico"></span>
					<span class="nav_wz"><a><?php echo $val['gc_name']; ?></a></span>
					<span class="com_ico"></span>
				</h3>
				<div class="item-list clearfix">
					<div class="subitem">
						<ul class="subitem_left">
							<?php if (!empty($val['class2']) && is_array($val['class2'])) { ?>
								<?php foreach ($val['class2'] as $k => $v) { ?>
									<li class="fore_r">
										<span class="fore1"><a><a><?php echo $v['gc_name']; ?></a></a></span>
										<?php if (!empty($v['class3']) && is_array($v['class3'])) { ?>
											<?php foreach ($v['class3'] as $k3 => $v3) { ?>
												<span><a href="<?php echo urlShop('search','index',array('cate_id'=> $v3['gc_id']));?>"><?php echo $v3['gc_name']; ?></a></span>
											<?php } ?>
										<?php } ?>
									</li>
								<?php } ?>
							<?php } ?>
						</ul>
						<ul class="subitem_right">
							<li><img src="<?php echo SHOP_TEMPLATES_URL; ?>/images/sub1.jpg" width="218" height="180"/>
							</li>
							<li><img src="<?php echo SHOP_TEMPLATES_URL; ?>/images/sub2.jpg" width="218" height="180"/>
							</li>
							<li><img src="<?php echo SHOP_TEMPLATES_URL; ?>/images/sub3.jpg" width="218" height="180"/>
							</li>
						</ul>
					</div>
				</div>
			</li>
		<?php } ?>
	<?php } ?>

</ul>