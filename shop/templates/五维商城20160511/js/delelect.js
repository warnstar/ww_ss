
        window.onload = function () {
            // 获取元素
            var table = document.getElementById('table');
            var tr = table.getElementsByTagName('tr');
            var deleteAll = document.getElementById('deleteAll');
			var checkAllInputs = document.getElementsByClassName('check-all');
            //绑定点击删除全部按钮回调函数
				deleteAll.onclick = function () {
				       if(confirm("确认要删除？")){ 
							for (var i = 0; i < tr.length; i++) {
								var input = tr[i].getElementsByTagName('input')[0];
								if (input.checked) {
									tr[i].parentNode.removeChild(tr[i]);
									i--;
								}
							}
							
							
						} 
						else{
							return false;
							}
				}

			var del = document.querySelectorAll('.del');
			var i = 0,len = del.length;
            //绑定点击删除按钮回调函数
			for( ;i < len ;i++  ){
				(function(index){
					del[index].onclick = function(){
						if(confirm("确认要删除？")){ 
						this.parentNode.parentNode.removeChild(this.parentNode);
						}
						else{
							return false;
							}
					}
				})(i)
				
			}
        }
