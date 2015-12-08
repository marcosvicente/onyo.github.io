var environment = function () {
	var env    = new Object();
		env['format'] = $('body').data('format');
		env['lang']   = $('html').attr('lang');
		
	if (env.lang === 'en') {
		if (env.format === 'consumer') {
			env['title'] = [
				{
					'title': 'WE BELIEVE THE EATING OUT EXPERIENCE',
					'description': 'should be pure pleasure'
				},{
					'title': 'TECHNOLOGY CAN ENHANCE',
					'description': 'that pleasure',
				},{
					'title': 'AND SAVE',
					'description': 'you time'
				}
			];
			env['about'] = [
        		'<h4>INTERACT WITH YOUR FAVORITE RESTAURANT</h4><p>through your smartphone</p>',
        		'<h4>ONYO PROVIDES YOU A PERSONALIZED EXPERIENCE</h4><p>even in restaurants where you\'ve never been before</p> ^5000',
        		'<h4>And have no worries besides enjoying the food</h4><p>and the best the locale has to offer</p> ^5000'
        	];
		}
		else if (env.format === 'restaurant') {
			env['title'] = [
				{
					'title': 'WE BELIEVE THE EATING OUT EXPERIENCE',
					'description': 'should be pure pleasure'
				},{
					'title': 'Use the technology to provide',
					'description': 'an amazing, personalized customer experience',
				},{
					'title': 'Keep your customers engaged with your brand',
					'description': 'through an integrated digital experience'
				}					
			];
			env['about'] = [
        		'<h4>The mobile brand experience</h4><p>you want to provide to your consumers</p>',
        		'<h4>Complete, with no need</h4><p>of downloading many apps</p> ^5000',
        		'<h4>Capture value from the information flow</h4><p>between consumer and store</p> ^5000',
        		'<h4>And make satisfied consumers</h4><p>your main business lever</p> ^5000',
        	];
		}
	} 

	if (env.lang === 'pt-br') {
		if (env.format === 'consumer') {
			env['title'] = [
				{
					'title': 'Acreditamos que comer fora',
					'description': 'deve ser uma experiência apenas prazerosa'
				},{
					'title': 'A tecnologia pode diminuir esperas',
					'description': 'e eliminar aborrecimentos',
				},{
					'title': 'Receba um tratamento pessoal',
					'description': 'e ganhe tempo'
				}
			];
			env['about'] = [
        		'<h4>Interaja com seu estabelecimento favorito</h4><p>usando seu smartphone</p>',
        		'<h4>A Onyo personaliza sua experiência</h4><p>mesmo em estabelecimentos onde nunca esteve</p> ^5000',
        		'<h4>E você só se preocupa em saborear a comida</h4><p>e o que há de melhor do local</p> ^5000'
        	];
		}
		else if (env.format === 'restaurant') {
			env['title'] = [
				{
					'title': 'Acreditamos que comer fora',
					'description': 'deve ser uma experiência apenas prazerosa'
				},{
					'title': 'Use tecnologia para oferecer uma experiência incrível',
					'description': 'e personalizada para o consumidor',
				},{
					'title': 'Mantenha o consumidor engajado com a sua marca',
					'description': 'através de uma experiência digital integrada'
				}
			];
			env['about'] = [
        		'<h4>A experiência de marca mobile</h4><p>que você quer oferecer aos seus consumidores</p>',
        		'<h4>Completa, sem que o consumidor precise</h4><p>baixar vários aplicativos diferentes</p> ^5000',
        		'<h4>Extraia real valor do fluxo de informação</h4><p>com seus consumidores</p> ^5000',
        		'<h4>E transforme consumidores satisfeitos</h4><p>em seu principal alavancador do negócio</p> ^5000'
        	];
		}
	}

	return env;
};