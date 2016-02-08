<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <body>
        <xsl:for-each select="catalog/cd">
          <h1>catalog</h1>
          <p>title <xsl:value-of select="title"/></p>
          <p>artist <xsl:value-of select="artist"/></p>
          <p>country <xsl:value-of select="country"/></p>
          <p>price <xsl:value-of select="price"/></p>
          <p>year <xsl:value-of select="year"/></p>
          <xsl:variable name="url" select="website"/>
          <a href="{$url}"><xsl:value-of select="website"/></a>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>