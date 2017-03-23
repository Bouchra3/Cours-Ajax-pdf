<p>
	<?php
	 $navigateur=$_SERVER['HTTP_USER_AGENT'];
	 $root=$_SERVER['DOCUMENT_ROOT'];
	echo "Vous êtes bien sur ".$navigateur."<br>chemin de votre document : ".$root;
		
	?>
</p>
<pre>
	<?php
	print "<h2>Les variables d'environnement</h2>";
		print_r($_SERVER);
	?>
</pre>