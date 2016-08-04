package idv.PN_Wu;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.math.BigDecimal;
import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    public BigDecimal getRowCount() {
        BigDecimal bigDecimal = null;

        try {
            Class.forName("org.mariadb.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, user, password);
            connection.setAutoCommit(false);
            PreparedStatement preparedStatement = connection.prepareStatement(sql_RowCount, ResultSet.TYPE_SCROLL_INSENSITIVE);
            ResultSet resultSet = preparedStatement.executeQuery();
            ResultSetMetaData resultSetMetaData = resultSet.getMetaData();
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

    public List getRankingList(BigDecimal offset, BigDecimal row_count) {
        List list = new ArrayList();

        try {
            Class.forName("org.mariadb.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, user, password);
            connection.setAutoCommit(false);
            PreparedStatement preparedStatement = connection.prepareStatement(sql_RankingList, ResultSet.TYPE_SCROLL_INSENSITIVE);
            preparedStatement.setBigDecimal(1, offset);
            preparedStatement.setBigDecimal(2, row_count);
            ResultSet resultSet = preparedStatement.executeQuery();
            ResultSetMetaData resultSetMetaData = resultSet.getMetaData();
            int colCount = resultSetMetaData.getColumnCount();
            resultSet.first();
            do {
                Map map = new HashMap();
                for (int j = 1; j <= colCount; j++) {
                    map.put(resultSetMetaData.getColumnName(j), resultSet.getObject(j));
                }
                list.add(map);
                if (resultSet.isLast()) {
                    break;
                }
                resultSet.next();
            } while (true);

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

        return list;
    }

    public static void main(String[] args) {
        new DataSource().getRankingList(new BigDecimal(5), new BigDecimal(10));
    }
}
