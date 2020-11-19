<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:variable name="lowercase" select="'abcdefghijklmnopqrstuvwxyz'" />
<xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />
<xsl:template match="/">

<html>
 <head>
 <title> Hospital </title></head>
 <body>
 	<h1>About Doctors</h1>
 <table border="1" bgcolor="#4D1E04 " >
 <tr style="color:#D9D9D9 "><th>Med Reg No</th>
 <th> Name </th>
 <th> Department </th>
 <th>Designation</th>
 <th> Cabin No </th>
 <th>Languages</th>
 <th> Contact </th>
 <th>Years of Experience</th>
 
 </tr>
<xsl:for-each select="/hospital/doctors">
<tr>
<td bgcolor="#BA55D3"><xsl:value-of select="id"/></td>
<td bgcolor="#0000AO" ><b><xsl:value-of select="name"/></b></td>
<td bgcolor="#8273BA" ><xsl:value-of select="field"/></td>
<td bgcolor="#90EE90"><xsl:value-of select="designation" /></td>

<td bgcolor="#ADD8EF"><xsl:value-of select="cabin"/></td>
<td bgcolor="#90EE90"><xsl:value-of select="languages" /></td>

<td bgcolor="#90EE90"><xsl:value-of select="contact" /></td>
<td bgcolor="#90EE90"><xsl:value-of select="years" /></td>

</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet> 