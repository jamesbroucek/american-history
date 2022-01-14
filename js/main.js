
	/**
	 * GridLoaderFx obj.
	 */
    let grid = document.querySelector('.grid');

    function GridLoaderFx(el) {
		this.el.querySelectorAll('.div') = el
	};
	
	/**
	 * Effects.
	 */
	GridLoaderFx.prototype.effects = {

		'Osiris': {
			perspective: 3000,
			animeOpts: {
				duration: function() {
					return anime.random(500,1000)
				},
				easing: [0.2,1,0.3,1],
				delay: function(t,i) {
					return i*50;
				},
				opacity: {
					value: [0,1],
					duration: 700,
					easing: 'linear'
				},
				translateZ: {
					value: [-3000,0],
					duration: 1000
				},
				rotateY: ['-1turns',0]
			}
		},

		};

        GridLoaderFx();