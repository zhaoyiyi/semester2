<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/catalog">
    <table>
      <tr>
        <td>Category</td><td>Name</td><td>Price</td>
      </tr>
        <xsl:apply-templates select="row"/>

    </table>
  </xsl:template>

  <xsl:template match="row">
    <tr>
      <td><xsl:value-of select="category"/></td>
      <td><xsl:value-of select="product/name"/></td>
      <td><xsl:value-of select='format-number(product/price, "#.00")'/></td>
    </tr>
  </xsl:template>

</xsl:stylesheet>