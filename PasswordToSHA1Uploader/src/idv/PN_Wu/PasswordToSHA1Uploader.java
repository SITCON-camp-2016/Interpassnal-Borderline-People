package idv.PN_Wu;

import org.apache.commons.codec.digest.DigestUtils;

import java.io.*;
import java.math.BigDecimal;
import java.nio.charset.Charset;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import static idv.PN_Wu.DatabaseConfig.*;

/**
 * Created by pingnote on 8/4/16.
 */
public class PasswordToSHA1Uploader {

    public static void main(String[] args) {
        UploadFile_PasswordToSHA1("dbdump.csv");
    }

    static void UploadFile_PasswordToSHA1(String FileName) {
        try {
            Connection connection = DriverManager.getConnection(url, user, password);
            connection.setAutoCommit(false);
            PreparedStatement preparedStatement = connection.prepareStatement(sql_insertRow);
            InputStream fis = new FileInputStream(FileName);
            InputStreamReader isr = new InputStreamReader(fis, Charset.forName("UTF-8"));
            BufferedReader br = new BufferedReader(isr);
            String line;
            while ((line = br.readLine()) != null) {
                if (line.equals(DumpFileConfig)) continue;
                String[] line_split = line.split(",");
                preparedStatement.setString(1, DigestUtils.sha1Hex(line_split[0]).toUpperCase());
                preparedStatement.setString(2, line_split[0]);
                preparedStatement.setBigDecimal(3, new BigDecimal(line_split[1]));
                preparedStatement.addBatch();
            }
            preparedStatement.executeBatch();
            connection.commit();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
