<!doctype html>

<html lang="pt-br">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />

		<title></title>
		<meta name="description" content="">
		<meta name="author" content="">
		<meta name="robots" content="index, nofollow">

		<link rel="shortcut icon" href="/favicon.ico">

		<!-- FACEBOOK
		<meta property="og:locale" content="pt_BR">
		<meta property="og:url" content="">
		<meta property="og:title" content="">
		<meta property="og:site_name" content="">
		<meta property="og:description" content="">
		<meta property="og:image" content="">
		<meta property="og:image:type" content="image/png">
		<meta property="og:image:width" content="=">
		<meta property="og:image:height" content="=">
		<meta property="og:type" content="website">
		-->

		<link rel="stylesheet" src="//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.2/normalize.min.css" />
		<link rel="stylesheet" href="/frontend/assets/css/app.min.css">
		<link rel="stylesheet" href="/frontend/assets/css/home.min.css">

		<script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>

		<!--[if lt IE 9]>
			<script src="//cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
			<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js"></script>
			<script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->
	</head>

	<body class="index" itemscope itemtype="http://schema.org/WebPage">

		<section class="all">
			<?php include_once('includes/header.php'); ?>

			<div class="content">
				<h1>Bootstrap - HTML</h1>
			</div>

			<ul class="bxslider" role="banner">
				<?php for($i = 0; $i < 2; $i++) : ?>
					<li>
						<article role="article" itemscope itemtype="http://schema.org/Article">
							<a itemprop="url" href="#" title="">
								<img src="http://dummyimage.com/1000x400" alt="" />
							</a>
							<h1 role="complementary" itemprop="name">Lorem Ipsum Dolor Sit Amet</h1>
						</article>
					</li>
				<?php endfor; ?>
			</ul>

			<div class="supports" role="banner">
				<div class="normal-box">
					<h3>Apoios:</h3>
					<ul>
						<?php for($i = 0; $i < 2; $i++) : ?>
							<li>
								<a href="http://dindigital.com" title="" target="_blank">
									<img src="http://dummyimage.com/200x100" alt="" />
								</a>
							</li>
						<?php endfor; ?>
					</ul>
				</div>
			</div>

			<button aria-describeby="idclasse" role="button">Diga olá</button>
			<p id="idclasse">Descrição do que o botão acima faz.</p>

			<?php include_once('includes/footer.php'); ?>
		</section>


		<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
		<script src="/frontend/assets/js/app.min.js"></script>
		<script src="/frontend/assets/js/home.min.js"></script>

	</body>

</html>