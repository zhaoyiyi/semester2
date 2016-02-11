<?php

$xsldoc = new DOMDocument();
$xsldoc->load('Characters.xslt');

$xmldoc = new DOMDocument();
$xmldoc->load('Characters.xml');

$xsl = new XSLTProcessor();
//$xsl->setParameter('', 'discount', ".5");
$xsl->importStyleSheet($xsldoc);
$result = $xsl->transformToXML($xmldoc);


?>



<?php echo $result; ?>


