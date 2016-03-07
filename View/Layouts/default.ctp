<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Comisión IdEP</title>
	<?php
		echo $this->fetch('meta');
		echo $this->Html->css(array('//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css','estilos'));
		echo $this->fetch('css');
	?>
</head>
<body onLoad="setInterval('contador2()',0) ; setInterval('contador()',100)">
		<div class="navbar navbar-default navbar-fixed-top navbar-inverse">
		    <div class="container-fluid">
		        <div class="navbar-header">
		            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-fixed-top .navbar-collapse">
		                <span class="icon-bar"></span>
		                <span class="icon-bar"></span>
		                <span class="icon-bar"></span>
		            </button>
								<?= $this->Html->link('Idep',array('controller' => 'galerias','action' => 'index'),array('class'=>'navbar-brand'))?>
		        </div>
		        <div class="navbar-collapse collapse">
		            <ul class="nav navbar-nav">
									<li><?= $this->Html->link('Ver comisiones',array('controller' => 'comisiones','action' => 'index'))?></li>
									<li><?= $this->Html->link('Ver usuarios',array('controller' => 'usuarios','action' => 'index'))?></li>
									<li><?= $this->Html->link('Añadir comisión',array('controller' => 'comisiones','action' => 'crear'))?></li>
									<li><?= $this->Html->link('Añadir usuario',array('controller' => 'usuarios','action' => 'crear'))?></li>
									<li><?= $this->Html->link('Orden del día',array('controller' => 'comisiones','action' => 'ordendeldia'))?></li>
								</ul>
		        </div>
		    </div>
		</div>
		<div class="container-fluid">
		<?php echo $this->Session->flash(); ?>
		<?php echo $this->fetch('content'); ?>
		</div>


	<?php echo $this->element('sql_dump'); ?>

<?=	$this->Html->script(array ('//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js','//netdna.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js',
'highslide-full.min','highslide.config.min','analytics','modernizr','highcharts','exporting','funciones')); ?>
	<?php echo $this->fetch('script'); ?>

</body>
</html>
