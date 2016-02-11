<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet
xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="html" />

  <xsl:template match="/">
    
        <xsl:apply-templates select="/Objects/Object"  >
          <xsl:sort select="@name"  />
        </xsl:apply-templates>
     
  </xsl:template>
  
  

  <xsl:template match="Object">
    <h3>
      Characteristics of <xsl:value-of select="@name" />
    </h3>
    <ul>
      <xsl:for-each select="Characteristic" >
        <xsl:sort select="." order="descending"  />
        <li>
          <xsl:value-of select="." />
        </li>
      </xsl:for-each>
    </ul>
  </xsl:template>

</xsl:stylesheet>
