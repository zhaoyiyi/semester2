<?php

$xsldoc = new DOMDocument();
$xsldoc->load( "catalog.xsl" );
//
$xmldoc = new DOMDocument();
$xmldoc->load( 'catalog.xml' );
//
$xsl = new XSLTProcessor();
$xsl->importStyleSheet( $xsldoc );
$result = $xsl->transformToXML( $xmldoc );


?>


<?php echo $result; ?>

