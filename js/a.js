$(document).ready(function(){

	// основные параметры
	var count_col = 4;		// количество колонок
	var distance = 10;		// расстояние между ячейками
	

	// вычисляемые параметры
	var single_size = ($('.tile_content').width()-distance*(count_col-1))/4;


	// начальные настройки
	$('.b_itemtile_1_1').css({
		'width':single_size,
		'height':single_size
	});

	$('.b_itemtile_1_2').css({
		'width':single_size,
		'height':single_size*2+distance
	});

	$('.b_itemtile_2_1').css({
		'width':single_size*2+distance,
		'height':single_size
	});

	$('.b_itemtile_2_2').css({
		'width':single_size*2+distance,
		'height':single_size*2+distance
	});

	$('.b_itemtile_1_3').css({
		'width':single_size,
		'height':single_size*3+distance*2
	});

	$('.b_itemtile_3_1').css({
		'width':single_size*3+distance*2,
		'height':single_size
	});

	$('.b_itemtile_1_4').css({
		'width':single_size,
		'height':single_size*4+distance*3
	});

	$('.b_itemtile_4_1').css({
		'width':single_size*4+distance*3,
		'height':single_size
	});



	// ненужные настройки !!!! УДАЛИТЬ
	$('.b_itemtile').css({
		'margin-left':distance+'px',
		'margin-bottom':distance+'px'
	});
	
	



	console.log(single_size);

});