<%--
  Created by IntelliJ IDEA.
  User: pingnote
  Date: 8/4/16
  Time: 9:06 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>$Title$</title>
    <script type='text/javascript' src='/IBP/dwr/engine.js'></script>
    <script type='text/javascript' src='/IBP/dwr/util.js'></script>
    <script type='text/javascript' src='/IBP/dwr/interface/DataSource.js'></script>
    <script>
      DataSource.getCountSum(function(bigDecimal){
        alert(bigDecimal);
      });
    </script>
  </head>
  <body>
  $END$
  </body>
</html>
