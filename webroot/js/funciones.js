var axel=0;
var aux=0;
var run=1;
var time=0;
var aum=0;

/*var rutaLadrido = './latido_cerdo.mp3';
var sonido = new Audio();
sonido.src = rutaLadrido; */


(function($){ // encapsulate jQuery
	$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: true
            }
        });

        $('#container').highcharts({
            chart: {
                type: 'spline',
                marginRight: 10,
				alignTicks: false,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = time // current time
							var fechaHora = new Date();
							var segundos = fechaHora.getSeconds();
                            //aux = Math.trunc(((new Date()).getTime()*0.01)%10);
							//aux = Math.round((Date.now()*0.001))%20;

							var none;

								if (aux == 2)
									none=2;
								if (aux == 3)
									none=0;
								if (aux == 4)
								{
									none=-1;
									//sonido.play();
								}
								if (aux == 5)
									none=7+axel;
								if (aux == 6)
									none=-5;
								if (aux == 1 || aux == 0 || aux >=7)
									none= 0;

							var y = none;
							if (run==1)
								series.addPoint([x, y], true, true);
                        }, 100);
                    }
                }
            },
            title: {
                text: 'Gráfica tiempo real'
            },
			credits: {
                enabled: false,
            },

            xAxis: {
                type: 'datetime',
                tickPixelInterval: 0,
				alignTicks: false,
				visible: false,
            },
            yAxis: {

                title: {
                    text: 'Valor',
					lineWidth: 4,

                },
                plotLines: [{
                    value: null,
                    width: null,
                    color: '#FF0040',
					showEmpty: false,
					alignTicks: false
                }]
            },

			plotOptions: {
				series: {
					enableMouseTracking: false
					},
				},
            tooltip: {
			navigator:{
				enabled:false,
			},
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: true
            },
            series: [{
                name: 'Latidos',
				    marker: {
						enabled: false,
					},
                data: (function () {
                    var data = [],
					//time = (new Date()).getTime(),
                        i;
						aux = time;
						if (aux == 10)
							aux=0;
						if (aux == -1)
							aux =0;
						if (aux == 2)
							none=2;
						if (aux == 3)
							none=0;
						if (aux == 4)
							none=-1;
						if (aux == 5)
							none=7+axel;
						if (aux == 6)
							none=-5;
						if (aux == 1 || aux==7 || aux == 8 || aux == 9 || aux == 0)
							none= 0;

                    for (i = -35-aum; i <= 0; i += 1) {
                        data.push({
                            x: time,
                            y: none
                        });
                    }
                    return data;
                }())
            }]
        });
    });
});
})(jQuery);

    function hacer_click()
    {
        axel++;
    }
	function stop()
	{
		run=0;
	}
	function notstop()
	{
		run=1;
	}
	function contador()
	{
		if (run==1)
		{
			aux++;
			aux=aux%20;
		}
	}
	function contador2()
	{
		if (run==1)
			time++;
	}
	function aumentar()
	{
		aum=10+aum;
		document.getElementById("nada").innerHTML=container.load;
	}
	function reset()
	{
		axel=0;
		aum=0;
	}
	function cargar(div, desde)
	{
		(div).reload(desde);
	}
	function cargar(div, destino)
	{
		$(div).load(destino);
	}
	$(document).ready(function(){
    $("button").click(function(){
        $("#div1").load("demo_test.txt");
    });
});
