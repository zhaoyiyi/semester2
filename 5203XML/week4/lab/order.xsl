<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <title>Order Status</title>
      </head>
      <body>
        <h2>Order Status</h2>
        <xsl:for-each select="orders/order">
          <xsl:if test="status='pending'">
            <p>Customer number: <xsl:value-of select="customerid"/></p>
            <p>Status: <xsl:value-of select="status"/></p>
          </xsl:if>
          <ul>
            <xsl:for-each select="item">
              <xsl:if test="@instock='Y'">
                instock:
                <li>
                  <xsl:value-of select="@itemid"/>:
                  <xsl:value-of select="name"/>
                </li>
              </xsl:if>
              <xsl:if test="@instock='N'">
                out of stock:
                <li>
                  <xsl:value-of select="@itemid"/>:
                  <xsl:value-of select="name"/>
                </li>
              </xsl:if>
            </xsl:for-each>
          </ul>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>