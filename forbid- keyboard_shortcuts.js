document.onkeydown = function(e) {
				var currentKey = 0,
					k = e || window.event;
				currentKey = k.keyCode || k.which || k.charCode;
				//				 e.which = e.charCode != null ? e.charCode : e.keyCode;
				//禁止F12
				if(currentKey == 123) {
					window.event.cancelBubble = true;
					window.event.returnValue = false;
				}
				//禁止Ctrl+U
				if(currentKey == 85) {
					window.event.cancelBubble = true;
					window.event.returnValue = false;
				}

				//禁止Ctrl+W。没有效果
				if(currentKey == 87) {
					window.event.cancelBubble = true;
					window.event.returnValue = false;
				}

				//禁止保存网页(Ctrl+S)
				if(currentKey == 83) {
					window.event.cancelBubble = true;
					window.event.returnValue = false;
				}
        }
