// function appendData(dataList,firstId){
//   $("#passData").html("");
//  var html = "";
//  for(var i = firstId; i < firstId + 10; i++){
//     if (dataList.length > i){
//      html += "<tr>";
//      html += "<td>" + dataList[i-1].id + "</td>";
//       html += "<td>" + dataList[i-1].text + "</td>";
//       html += "<td>" + dataList[i-1].presence + "</td>";
//       html += "<td>" + dataList[i-1].marginal + "</td>";
//       html += "</tr>";
//     } 
//   }
//   $("#passData").append(html);
// }
var sumOfData;

function getSumData(bigDecimal) {
    sumOfData = bigDecimal;
}


var dataList_init;

function appendData(firstId, len, dataList) {
    dataList_init = dataList;

    $("#passData").html("");
    var html = "";
    for (var i = 0; i < dataList.length; i++) {
        html += "<tr>";
        html += "<td>" + (i + 1 + firstId) + "</td>";

        if ((firstId + i + 1) > 10) {
            html += "<td>'" + dataList[i].SHA1 + "'</td>";
        } else {
            html += "<td>" + dataList[i].SHA1toPassword + "</td>";
        }

        html += "<td>" + dataList[i].Count + "</td>";
        html += "<td>" + sumOfData * 1.0 / (dataList[i].Count * 100.0) + "</td>";
        html += "</tr>";
    }
    $("#passData").append(html);
}

var light_pwd;


$(document).ready(function () {

    $("#rank").on("submit", function (e) {
        // if ($.isNumeric($("#id-input").val())) {
        //     appendData(dataList, $("#id-input").val());
        // }

        var input = $('#id-input').val().split(',');
        if (input.length == 1) {
            DataSource.getCountSum(function (bigDecimal) {
                sumOfData = bigDecimal;
                DataSource.getRankingList(Number(input[0]), Number(10), function (rankingList) {
                    appendData(Number(input[0]), Number(10), rankingList);
                });
            });
        } else {
            DataSource.getCountSum(function (bigDecimal) {
                sumOfData = bigDecimal;
                DataSource.getRankingList(Number(input[0]), Number(input[1]), function (rankingList) {
                    appendData(Number(input[0]), Number(input[1]), rankingList);
                });
            });
        }
        return false;
    });

    $("#code_submit").on("click", function (e) {
        // e.preventDefault();
        if ($("#code_input").val().length != 0) {
            light_pwd = $("#code_input").val();
            $(".result-black").fadeIn();
        }

    })
    $("#code_close").click(function () {
        $(".result-black").fadeOut(20);
    })
});

function tranToData(bigDecimal) {
    bigDecimal = new String(new Crypt().HASH.sha1(light_pwd)).toUpperCase();
}
