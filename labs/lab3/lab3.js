function getMaxCount(obj) {
  var a = obj.count1.value;
  var b = obj.count2.value;
  var c = obj.count3.value;
  var d = obj.count4.value;
  var e = obj.count5.value;
  var m = Math.max(Math.max(Math.max(a, b), Math.max(c, d)), e);
  obj.result.value = m;
}

function canBuildTriangle(obj) {
  var a = obj.len1.value;
  var b = obj.len2.value;
  var c = obj.len3.value;

  if (a <= 0 || b <= 0 || c <= 0) {
    obj.question.value = "Нельзя";
  } else {
    obj.question.value = "Можно";
  }
}

const whatKord = document.querySelector(".resultKord");

function whatChetvert(obj) {
  a = obj.kord1.value;
  b = obj.kord2.value;

  let k;
  if (a < 0 && b > 0) {
    k = 1;
  }
  if (a > 0 && b > 0) {
    k = 2;
  }
  if (a < 0 && b < 0) {
    k = 3;
  }
  if (a > 0 && b < 0) {
    k = 4;
  }

  whatKord.value = k;
}
