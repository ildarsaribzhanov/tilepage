$(document).ready(function(){

	// основные параметры
	var count_col = 4;		// количество колонок
	var distance = 10;		// расстояние между ячейками

	var steck_length = [0,0,0,0];
	

	// вычисляемые параметры
	var single_size = ($('.tile_content').width()-distance*(count_col-1))/4;


	start_size_init();
	

	// set position
	// В steck_length запихиваем высоту каждого столбца.
	// Надо определять минимальную высоту и смотеть где соседи не мешают
	$('.b_itemtile').each(function(){

	});


	// // ненужные настройки !!!! УДАЛИТЬ
	// $('.b_itemtile').css({
	// 	'margin-left':distance+'px',
	// 	'margin-bottom':distance+'px'
	// });
	

	// size initialization
	function start_size_init()
	{
		$('.b_itemtile').each(function(){
			var size = get_size_block( $(this) );
			$(this).css({
				'width':single_size*size[0]+distance*(size[0]-1),
				'height':single_size*size[1]+distance*(size[1]-1)
			});
		});
	};


	// get array size block
	function get_size_block( itm_block )
	{
		if( itm_block.hasClass('b_itemtile_1_1') ){
			return [1,1];
		};

		if( itm_block.hasClass('b_itemtile_1_2') ){
			return [1,2];
		};

		if( itm_block.hasClass('b_itemtile_2_1') ){
			return [2,1];
		};

		if( itm_block.hasClass('b_itemtile_2_2') ){
			return [2,2];
		};

		if( itm_block.hasClass('b_itemtile_1_3') ){
			return [1,3];
		};

		if( itm_block.hasClass('b_itemtile_3_1') ){
			return [3,1];
		};

		if( itm_block.hasClass('b_itemtile_1_4') ){
			return [1,4];
		};

		if( itm_block.hasClass('b_itemtile_4_1') ){
			return [4,1];
		};
	};

});