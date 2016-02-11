<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

  <xsl:template match="/">
    <h3>The following is the assessment of the age data.</h3>
    <!--<xsl:apply-templates select="/Characters/Character"/>-->
    <xsl:for-each select="/Characters/Character">
      <xsl:sort select="@age" data-type="number"/>
      <xsl:value-of select="."/>
      <xsl:value-of select="@age"/>
      <br/>
    </xsl:for-each>
  </xsl:template>

  <!--<xsl:template match="Character">-->
    <!--<xsl:choose>-->
      <!--<xsl:when test="@age &gt; 110 ">-->
        <!--<p>-->
          <!--<b><xsl:value-of select="."/></b> - too high. Please check if this character age,-->
          <!--<b><xsl:value-of select="@age"/></b>, is correct.-->
        <!--</p>-->
      <!--</xsl:when>-->
      <!--<xsl:otherwise>-->
        <!--<p><b> <xsl:value-of select="."/></b> - ok</p>-->
      <!--</xsl:otherwise>-->
    <!--</xsl:choose>-->
  <!--</xsl:template>-->
</xsl:stylesheet>