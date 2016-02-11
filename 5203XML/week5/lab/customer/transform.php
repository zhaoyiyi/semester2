<?php

$xsldoc = new DOMDocument();
$xsldoc->load('products.xslt');

$xmldoc = new DOMDocument();
$xmldoc->load('products.xml');

$xsl = new XSLTProcessor();
//$xsl->setParameter('', 'discount', ".5");
$xsl->importStyleSheet($xsldoc);
$result = $xsl->transformToXML($xmldoc);


?>



<?php echo $result; ?>


