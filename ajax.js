$("#click").click(function() {
	var stopId = $("#stopId").val();
  $.ajax({
    type: "GET",
    url: "https://developer.trimet.org/ws/V1/arrivals?locIDs=" + stopId + "&appID=3B5160342487A47D436E90CD9",
    dataType: "xml",
    success: processXML
  });

  function processXML(xml) {


     // var scheduledTime = $(xml).find("arrival").attr('scheduled');
     // var estimatedTime = $(xml).find("arrival").attr('estimated');
      var shortSign = $(xml).find("arrival").attr('shortSign');
      var status = $(xml).find("arrival").attr('status');
      var estimatedArrivalTime = parseInt($(xml).find("arrival").attr('estimated'));
      var estimated = new Date(estimatedArrivalTime);
      alert(estimated);
      $("#shortSign").text(shortSign);
     	$("#status").text(status);
      $("#estimated").text(estimated);
  }
});
