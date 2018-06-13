$(document).ready(function(){

	var loginFormCheck = (function(){

		// Переменные модуля
		var _loginForm = $('#register-add-form');
		var _inputEmailName = $('[name="name"]');
		var _errorMail = $('#errorMail');
		var	_patternEmail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		var _errorMailFormat = $('#errorMailFormat')
		var _errorDescriptionBusy = $('#errorDescriptionBusy');
		var _errorDescriptionDesc = $('#errorDescriptionDesc');
		var	_inputPasswordName = $('[name="password"]');
		var _errorPassword = $('#errorPassword');
		var _error = $('.error');

		// Метод инициализации (запуска) модуля		
		var init = function(){
			_setUpListeners(); // Запускаем прослушку событий
		}


		// Метод прослушки событий
		var _setUpListeners = function() {
			_loginForm.on('submit', function(event) {
				_formValidate(event);
			});
		}

		// Приватные методы
		var _formValidate = function (event) {
				console.log('Hello from _formValidate()');
				event.preventDefault();
				var _emailName = _inputEmailName.val().trim().toLowerCase();
				var _passwordName = _inputPasswordName.val().trim();

				// Проверка email
				if ( _inputEmailName.val() == ''	) {
						_errorMail.fadeIn(1000);
				} else {
						if ( _patternEmail.test( _emailName )) {
								console.log('Hello from  _patternEmail.test');
								if ( _emailName == "mail@mail.com") {
									_errorDescriptionBusy.fadeIn(1000);
									_errorDescriptionDesc.fadeIn(1000);
									event.preventDefault();
									// Проверка пароля
								} else if ( _inputPasswordName.val() == ''	) { 
										_errorPassword.fadeIn(1000);
										event.preventDefault();
										} else {
										_loginForm.unbind('submit').submit();
										}
						} else {
							_errorMailFormat.fadeIn(1000)
						}
					}

				$('#inputEmailName').on('focus', function(){
							_error.fadeOut();
							_errorDescriptionDesc.fadeOut();												
						});	
				$('#inputPasswordName').on('focus', function(){
							_error.fadeOut();
							_errorDescriptionDesc.fadeOut();	
						});	
			}
		
		
		
		// Возвращаем публичные медоты, которые будут доступны снаружи		
		return {
			init
		}
	
	}());

	// Запускаем модуль
	loginFormCheck.init();

});