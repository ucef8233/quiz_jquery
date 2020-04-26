var conter = 0;
var reponce = [];
var val = 1;
window.onload = () => {
  $("#demarer").click(() => {
    $(".main__inform").css("display", "none");
    $("#precedent").css("display", "none");
    $(".main__questionnaire").css("display", "block");
    $(".questions").html(Question[conter]);
    $("#suivant").attr("disabled", "disabled");
    bar(0);
    recupValue();
  });
  qSuivante();
  qPrecedente();
};

bar = (e) => {
  $("#afficheNum").text(e + 1 + "/" + Question.length);
  $("#file").attr("value", conter + 1);
};
qSuivante = () => {
  $("#suivant").click((e) => {
    $("#suivant").attr("disabled", "disabled");
    if (conter >= 0 && conter < Question.length - 1) {
      conter++;
    }
    if (conter == Question.length - 1) {
    }
    $("#precedent").css("display", "block");
    $(".questions").html(Question[conter]);
    recupValue();
    bar(conter);
    e.preventDefault();
  });
};
qPrecedente = () => {
  $("#precedent").click((e) => {
    if (conter > 0) {
      conter--;
    }
    if (conter == 0) {
      $("#precedent").css("display", "none");
    }
    $(".questions").html(Question[conter]);
    recupValue();
    bar(conter);
    e.preventDefault();
  });
};
recupValue = () => {
  $(".questions div input").change(() => {
    $("#suivant").removeAttr("disabled");
    if ($(".questions div input").length === 1) {
      reponce.splice(conter, 1, $(".questions div input").val());
    } else {
      for (let i = 0; i < $(".questions div input").length; i++) {
        if ($(".questions div input")[i].checked == true) {
          reponce.splice(conter, 1, $(".questions div input")[i].value);
        }
      }
    }
  });
};
