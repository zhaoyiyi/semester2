<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/customers">
    <html>
      <head>
        <style>
          td{
            padding: 1em;
            border: 1px black solid;
          }
        </style>
      </head>
      <body>
        <table>
          <tr><td>Company name</td><td>Address</td><td>Contact</td></tr>
          <xsl:for-each select="customer">
            <xsl:sort select="address/country"/>
            <tr>
              <td><xsl:value-of select="company"/></td>
              <td><xsl:apply-templates select="address"/></td>
              <td>
                <xsl:for-each select="contact">
                  Name: <xsl:value-of select="name"/><br/>
                  <xsl:choose>
                    <xsl:when test="(title='Sales Representative') or (title='Sales Agent')">
                      Title: <span style="color: red"><xsl:value-of select="title"/></span><br/>
                    </xsl:when>
                    <xsl:otherwise>
                      Title: <xsl:value-of select="title"/><br/>
                    </xsl:otherwise>
                  </xsl:choose>
                  Phone: <xsl:value-of select="phone"/><br/>
                  Fax: <xsl:value-of select="fax"/><br/>
                </xsl:for-each>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="address">
      <xsl:value-of select="street"/>,<br/>
      <xsl:value-of select="city"/>, <xsl:value-of select="zip"/><br/>
      <xsl:value-of select="country"/>
  </xsl:template>

</xsl:stylesheet>