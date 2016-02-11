<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <html>
      <head>
        <title>
          <xsl:value-of select="/Book/Title" />
        </title>
      </head>
      <body>
        <h3>
          <xsl:value-of select="/Book/Title" />
        </h3>
        <p>
          by <xsl:apply-templates select="/Book/Authors/Author" />
        </p>
        <h3>Table of Contents</h3>
        <xsl:apply-templates select="/Book/Chapters/Chapter" mode="TOC" />
        <xsl:apply-templates select="/Book/Chapters/Chapter" mode="fulltext" />
      </body>
    </html>
  </xsl:template>

  <xsl:template match="Author">
    <xsl:value-of select="." />
    <xsl:if test="position() != last()">
      <xsl:text>, </xsl:text>
    </xsl:if>
    <xsl:if test="position() = last()-1">
      <xsl:text>and </xsl:text>
    </xsl:if>
    <xsl:if test="position() = last()">
      <xsl:text>.</xsl:text>
    </xsl:if>
  </xsl:template>

  <xsl:template match="Chapter" mode="TOC">
    <p>
      <b>
        <xsl:value-of select="@number" />:
      </b>
      <xsl:value-of select="@title" />
    </p>
  </xsl:template>

  <xsl:template match="Chapter" mode="fulltext">
    <h3>
      <xsl:value-of select="@number" />. <xsl:value-of select="@title" />
    </h3>
    <p>
      <xsl:value-of select="." />
    </p>
  </xsl:template>

</xsl:stylesheet>

