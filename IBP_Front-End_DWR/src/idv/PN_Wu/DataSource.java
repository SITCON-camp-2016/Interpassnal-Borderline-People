package idv.PN_Wu;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.math.BigDecimal;
import java.sql.*;

import static idv.PN_Wu.DatabaseConfig.*;

/**
 * Created by pingnote on 8/4/16.
 */
public class DataSource {

    public BigDecimal getCountSum() {
        BigDecimal bigDecimal = null;

        try {
            Class.forName("org.mariadb.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, user, password);
            connection.setAutoCommit(false);
            PreparedStatement preparedStatement = connection.prepareStatement(sql_CountSum, ResultSet.TYPE_SCROLL_INSENSITIVE);
            ResultSet resultSet = preparedStatement.executeQuery();
            ResultSetMetaData resultSetMetaData = resultSet.getMetaData();
            int colCount = resultSetMetaData.getColumnCount();
            resultSet.first();
            bigDecimal = resultSet.getBigDecimal(1);
        } catch (SQLException e) {
            StringWriter stringWriter = new StringWriter();
            e.printStackTrace(new PrintWriter(stringWriter));
            String toString = stringWriter.toString();
            System.err.println(toString);
        } catch (ClassNotFoundException e) {
            StringWriter stringWriter = new StringWriter();
            e.printStackTrace(new PrintWriter(stringWriter));
            String toString = stringWriter.toString();
            System.err.println(toString);
        }

        return bigDecimal;
    }

    public static void main(String[] args) {
        new DataSource().getCountSum();
    }
}
