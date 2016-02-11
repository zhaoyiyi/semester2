<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="text" encoding="UTF-16"/>
  
  <xsl:template match="/">
    <xsl:apply-templates select="//product" />
  </xsl:template>
  
  
  <xsl:template match="product">
    <xsl:value-of select="name" />: 
    
    <xsl:call-template name="formatprice" >
      <xsl:with-param name="discount" select="price" ></xsl:with-param>
    </xsl:call-template>
    
    <xsl:text></xsl:text>
    
  </xsl:template>
  
  <xsl:template name="formatprice">
    <xsl:param name="discount" ></xsl:param>
    
    <xsl:value-of select="format-number($discount, '#.00')" />
    
  </xsl:template>
  
  
</xsl:stylesheet>