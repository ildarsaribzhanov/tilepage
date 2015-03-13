(function($){
	$.fn.tilePage = function(opt){
		opt = $.extend({
			count_col: 4,           // количество колонок
			distance: 10,           // расстояние между колонками
			itmClass: 'b_item_tile' // Класс единицы
		}, opt);
		
		self = $(this);
		itm = $('.' + opt.itmClass);

		var make = function(){
			// TODO Пустые клетки. Надо как-то решить
			// TODO Set min-width div
			// TODO Set max-width

			var stack_length = [];  // длинна колонок

			// set size stack_length
			// Определим количество колонок
			for (var i = 0; i < opt.count_col; i++) {
				stack_length.push(0);
			}

			// set size div 1x1
			var single_size = ( self.width() - opt.distance * (opt.count_col-1)) / opt.count_col;

			start_size_init();

			self.height( get_max_val(stack_length)*single_size + opt.distance*get_max_val(stack_length) -  opt.distance);

			// on resize window set new position divs
			$(window).resize(function(){
				// reset stack_length
				for (var i = 0; i < opt.count_col; i++) {
					stack_length[i] = 0;
				}

				// set size div 1x1
				single_size = (self.width()-opt.distance*(opt.count_col-1))/opt.count_col;

				start_size_init();

				self.height( get_max_val(stack_length)*single_size + opt.distance*get_max_val(stack_length) -  opt.distance);
			});



			// size initialization divs
			function start_size_init()
			{
				self.find(itm).each(function(){
					var size = get_size_block( $(this) );
					$(this).css({
						'width':single_size*size[0]+opt.distance*(size[0]-1),
						'height':single_size*size[1]+opt.distance*(size[1]-1)
					});

					var pos = get_block_position( $(this) );

					$(this).css({
						'top': pos[0]+'px',
						'left': pos[1]+'px'
					});
				});
			}

			// get item block position
			// itm_block - this div
			function get_block_position( itm_block ){
				var min_index = stack_length.indexOf( get_min_val(stack_length) );
				var size = get_size_block( itm_block );
				var out = [];

				// если в одну колонку влезает
				if( size[0] == 1 )
				{
					out.push( stack_length[min_index] * ( single_size + opt.distance ) );
					out.push( min_index*(single_size + opt.distance) );
					stack_length[min_index] = stack_length[min_index] + size[1];

					// более чем в один блок
				} else {
					var time_steck_length = stack_length.concat(); 		//	временная переменная для хранения длинн
					var sub_max = get_max_val( time_steck_length.slice(min_index,min_index+size[0]) );

					while( out.length == 0 )
					{
						min_index = time_steck_length.indexOf( get_min_val(time_steck_length.slice(0,time_steck_length.length - size[0] + 1)) );
						sub_max = get_max_val( time_steck_length.slice(min_index,min_index+size[0]) );

						if( sub_max != time_steck_length[min_index] ){
							time_steck_length[min_index] = time_steck_length[min_index] + 1;
							min_index = time_steck_length.indexOf( get_min_val(time_steck_length) );
						} else {
							out.push( time_steck_length[min_index] * ( single_size + opt.distance ) );
							out.push( min_index*(single_size + opt.distance) );
						}
					}

					sub_max = size[1] + stack_length[min_index];
					for (var i = min_index; i < min_index + size[0]; i++) {
						stack_length[i] = sub_max;
					}

				}


				return out;
			}


			// get array size block
			function get_size_block( itm_block )
			{
				if( itm_block.hasClass('b_itemtile_1_1') )
				{
					return [1,1];
				}

				if( itm_block.hasClass('b_itemtile_1_2') )
				{
					return [1,2];
				}

				if( itm_block.hasClass('b_itemtile_1_3') )
				{
					return [1,3];
				}

				if( itm_block.hasClass('b_itemtile_1_4') )
				{
					return [1,4];
				}

				if( itm_block.hasClass('b_itemtile_2_1') )
				{
					return [2,1];
				}

				if( itm_block.hasClass('b_itemtile_2_2') )
				{
					return [2,2];
				}

				if( itm_block.hasClass('b_itemtile_2_3') )
				{
					return [2,3];
				}

				if( itm_block.hasClass('b_itemtile_2_4') )
				{
					return [2,4];
				}

				if( itm_block.hasClass('b_itemtile_3_1') ){
					return [3,1];
				}

				if( itm_block.hasClass('b_itemtile_3_2') )
				{
					return [3,2];
				}

				if( itm_block.hasClass('b_itemtile_3_3') )
				{
					return [3,3];
				}

				if( itm_block.hasClass('b_itemtile_3_4') )
				{
					return [3,4];
				}

				if( itm_block.hasClass('b_itemtile_4_1') )
				{
					return [4,1];
				}

				if( itm_block.hasClass('b_itemtile_4_2') )
				{
					return [4,2];
				}

				if( itm_block.hasClass('b_itemtile_4_3') )
				{
					return [4,3];
				}

				if( itm_block.hasClass('b_itemtile_4_4') )
				{
					return [4,4];
				}
			}


			// get min index of array
			function get_min_val( array_val ){
				var min = array_val[0];
				for (var i = 0; i <= array_val.length - 1; i++) {
					if( min > array_val[i] )
					{
						min = array_val[i];
					}
				}
				return min;
			}

			// get max index of array
			function get_max_val( array_val ){
				var max = array_val[0];
				for (var i = 0; i <= array_val.length - 1; i++) {
					if( max < array_val[i] )
					{
						max = array_val[i];
					}
				}
				return max;
			}

		};

		return this.each(make);
	};
})(jQuery);