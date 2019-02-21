$(document).ready(function() {
  $("form#quiz").submit(function() {
    event.preventDefault();
    var home = $("input:radio[name=home]:checked").val();
    var hair_color = $("input:radio[name=hair_color]:checked").val();
    var work = $("input:radio[name=work]:checked").val();
    console.log("0"  + hair_color);

    if (home === "No" && (hair_color == undefined || work == undefined || (hair_color === "Red" || work == undefined) || hair_color === "Red" || work === "Lawyer")) {
      $("img#miranda").show();
      console.log("1");
    }
    else if (home === "Yes") {
      $("#question2").show();
      if (hair_color === "Brown" || work === "Gallery Director") {
        $("img#charlotte").show();
        console.log("2");
      }
      else if (hair_color === "Blonde") {
          $("#question3").show();
          if (hair_color === "Blonde" && work === "Marketing Director") {
            $("img#samantha").show();
            console.log("3");

          }
          else if(hair_color === "Blonde" && work === "Writer") {
            $("img#carrie").show();
            console.log("4");
          }
        }
      }
      else {
        $("p#anyone").show();
        console.log("5");
      }
  });
});
