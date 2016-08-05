
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

function getSumData(bigDecimal){
  sumOfData = bigDecimal;
}

function appendData(firstId, len, dataList) {
    $("#passData").html("");
    var html = "";
    for (var i = firstId; i < firstId + len; i++) {
        if (dataList.length > i) {
            html += "<tr>";
            html += "<td>" + i + "</td>";

            if(i>10){
              html += "<td>" + dataList[i - 1].SHA1 + "</td>"; 
            }else{
              html += "<td>" + dataList[i - 1].SHA1ToPassword + "</td>";
            }
            
            html += "<td>" + dataList[i - 1].Count + "</td>";
            html += "<td>" + sumOfData * 1.0 / (dataList[i - 1].Count * 100.0)   + "</td>";
            html += "</tr>";
        }
    }
    $("#passData").append(html);
}

var light_pwd;

$(document).ready(function() {
    appendData(dataList, 1);

    $("#id-submit").on("click", function(e) {
        // if ($.isNumeric($("#id-input").val())) {
        //     appendData(dataList, $("#id-input").val());
        // }

        var input = $('#id-input').val().split(',');
        if (input.length == 1) appendData(dataList, input[0], 10);
        else appendData(Number(input[0]), Number(input[1]), dataList);
        return false;
    });

    $("#code_submit").on("click", function(e) {
        // e.preventDefault();
        if ($("#code_input").val().length != 0) {
            light_pwd = $("#code_input").val();
            $(".result-black").fadeIn();
        }

    })
    $("#code_close").click(function() {
        $(".result-black").fadeOut(20);
    })
});

function tranToData(bigDecimal) {
    bigDecimal = new String(new Crypt().HASH.sha1(light_pwd)).toUpperCase();
}
