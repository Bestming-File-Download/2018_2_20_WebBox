# 2018_2_20_src_link_Box
use to Link Web File 

## usage method:  Automatically add provenance when copying(当复制文字的时候，自动在添加文字出处)
>	
		<script type="text/javascript" src="https://bestming-file-download.github.io/2018_2_20_src_link_Box/CopyPrintDerivation&jquery-3.3.1.min.js">
		</script>
		<script>
			$(function() {
				copyAppend();
			});
		</script>

***
	<body oncopy="return false;" oncut="return false;"> 防止复制和禁止快捷键 配合forbid- keyboard_shortcuts.js 文件

	</body>
