$(document).ready(function(){

	var commentFormCheck = (function(){

		// Переменные модуля
		var _form = $('#comment-add-form');
		var _commentTextarea = $('#commentText');
		var _commentErrorEmpty = $('#commentErrorEmpty');

		// Метод инициализации (запуска) модуля
		var init = function(){
			_setUpListeners(); // Запускаем прослушку событий
		}

		// Метод прослушки событий
		
		var _setUpListeners = function() {
			_form.on('submit', function(event) {
				_formValidate(event);
			});
		}

		// Приватные методы
    
		var _formValidate = function (event) {
    		console.log('Hello from _formValidate()');

			if ( _commentTextarea.val() == '' ) {
					_commentErrorEmpty.fadeIn(1000);
					event.preventDefault();
			} else {
					_commentErrorEmpty.fadeOut();
			}

		}

		// Возвращаем публичные медоты, которые будут доступны снаружи
		return {
			init
		}
	
	}());
  
	// Запускаем модуль
	commentFormCheck.init();

});