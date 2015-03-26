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
		<link rel="stylesheet" href="/assets/css/app.min.css">
		<link rel="stylesheet" href="/assets/css/single-post.min.css">

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

			<main role="main">
				<div class="content">
				<article role="article" itemscope itemtype="http://schema.org/BlogPosting">
					<header>
						<h1 itemprop="name">Post title</h1>
						<p itemprop="dateCreated">Posted 13th March</p>
						<p itemprop="dateModified">Updated 13th March</p>
						<p>By <span itemprop="author">Author Name</span></p>
					</header>

					<article>
						<h2 itemprop="alternativeHeadline">Subtitle you can put here</h2>
						<p itemprop="text">Content here.</p>
						<p itemprop="keywords">Keywords</p>
					</article>		

					<section>
						<h3>Related Content</h3>
						<nav>
							<ul>
								<li><a href="#">Related Content I</a></li>
								<li><a href="#">Related Content II</a></li>
								<li><a href="#">Related Content III</a></li>
							</ul>
						</nav>
					</section>			
				</article>

				</div>				
			</main>

			<?php include_once('includes/footer.php'); ?>		
		</section>


		<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
		<script src="/assets/js/app.min.js"></script>
	</body>

</html>