var dataList = [
	{id: 1,
  text: "lfajj'kjg'ja",
  presence: 33,
  marginal: 2,},
  {id: 2,
  text: "lfkljkjljklkl",
  presence: 32,
  marginal: 1,
  },
  {id: 3,
  text: "lfajj'kjg'ja",
  presence: 30,
  marginal: 2,
  },
  {
  id:4,
  text: "dfzfgfdgfg",
  presence:  28,
  marginal: 4
  },
  {
  id:5,
  text: "dfz565456fg",
  presence:  24,
  marginal: 8
  },
  {
  id:6,
  text: "dfzf45464dgfg",
  presence:  20,
  marginal: 12
  },
  {
  id:7,
  text: "fzfdg9911fg",
  presence: 15,
  marginal: 18
  },
  {id: 8,
  text: "lfajj'kjg'ja",
  presence: 33,
  marginal: 2,},
  {id: 9,
  text: "lfkljkjljklkl",
  presence: 32,
  marginal: 1,
  },
  {id: 10,
  text: "lfajj'kjg'ja",
  presence: 30,
  marginal: 2,
  },
  {
  id:11,
  text: "dfzfgfdgfg",
  presence:  28,
  marginal: 4
  },
  {
  id:12,
  text: "dfz565456fg",
  presence:  24,
  marginal: 8
  },
  {
  id:13,
  text: "dfzf45464dgfg",
  presence:  20,
  marginal: 12
  },
  {
  id:14,
  text: "fzfdg9911fg",
  presence: 15,
  marginal: 18
  }
 ]; 
function appendData(dataList,firstId){
  $("#passData").html("");
	var html = "";
	for(var i = firstId; i < firstId + 10; i++){
    if (dataList.length > i){
    	html += "<tr>";
    	html += "<td>" + dataList[i-1].id + "</td>";
      html += "<td>" + dataList[i-1].text + "</td>";
      html += "<td>" + dataList[i-1].presence + "</td>";
      html += "<td>" + dataList[i-1].marginal + "</td>";
      html += "</tr>";
    } 
  }
  $("#passData").append(html);
} 
  
$(document).ready(function(){
	appendData(dataList,1);

  $("#id-submit").on("click",function(e){
    if($.isNumeric($("#id-input").val()) ){
      appendData(dataList, $("#id-input").val());
    }
    return false;
  });
});

// $(document).ready(function() {
//         $("code_submit").on("click", function(e) {
//             e.preventDefault();
//             $(".result-black").fadeIn();
//         })
//     });

// var express = require('express');
// var bodyParser = require('body-parser');
 
// var app = express()
 
// // parse application/x-www-form-urlencoded 
// app.use(bodyParser.urlencoded({ extended: false }))
 
// // parse application/json 
// app.use(bodyParser.json())
 
// // app.use(function (req, res) {
// //   res.setHeader('Content-Type', 'text/plain')
// //   res.write('you posted:\n')
// //   res.end(JSON.stringify(req.body, null, 2))
// // })

// app.post('/text',function(req, res){
// 	console.log(req.body.haha);
// 	// $("code_submit").on("click", function(e) {
//  //            e.preventDefault();
//  //            $(".result-black").fadeIn();
//  //        })
// 	res.end();
// })

// app.get('#home',function(req, res){
// 	res.sendFile(__dirname + '/index.html#statistics');
// })

// app.get('/',function(req, res){
// 	res.sendFile(__dirname + '/index.html');
// })



// app.listen(1296);