var body = $response.body;
  var obj = JSON.parse(body);
  obj.data.medalList.forEach((element, index) => {
    if (element.medal.id === 1) {
      obj.data.medalList[index].medal.endTime = "2025-05-20 00:00:00";
    }
  });
  body = JSON.stringify(obj);
$done(body);
