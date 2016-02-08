<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/order">
    <html>
      <head>
        <title>order details</title>
      </head>
      <body>
        <h1 style="color: red">order details</h1>
        <p>Company Name: <xsl:value-of select="companyName" /> </p>
        <p>salesperson: <xsl:value-of select="ourSalesperson" /> </p>
        <p>item: <xsl:value-of select="item" /> </p>
        <p>quantity: <xsl:value-of select="quantity" /> </p>
        <p>date: <xsl:value-of select="date" /> </p>
        <p>customerRep: <xsl:value-of select="customerRep" /> </p>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>