(function ($) {
  "use strict";
  $(".sakura-falling").sakura();
})(jQuery);

$(document).ready(function () {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  console.log(params);
  if (params.name) {
    document.getElementById("dear").innerHTML = "Dear,";
    document.getElementById("name").innerHTML = params.name + " & Family";
  }

  document.getElementById("second_name").innerHTML =
    "<h1>Sushmita</h1><p>(Daughter of Sundar Lal Saini & Sunita Saini)</p>";
  document.getElementById("first_name").innerHTML =
    "<h1>Lokesh </h1><p>(Son of BrahmaNand Saini & Meena Saini)</p>";
  document.getElementById("invitation_card").innerHTML =
    '<a href="https://raw.githubusercontent.com/lokeshs1010/wedding/main/invitation/My_Invitation.jpeg" target="_blank" download="Invitation | 18th Feb | Hope to see you there!"><div class="venue">DOWNLOAD INVITATION CARD</div>';
  document.getElementById("mobile_number").innerHTML =
    "<a href=”tel:7876877477>+91 7876877477</a>";
});

$(document).on("scroll, click", function () {
  document.getElementById("my_audio").play();
});

// being a bit cool :p
var styles = [
  "background: linear-gradient(#D33106, #571402)",
  "border: 4px solid #3E0E02",
  "color: white",
  "display: block",
  "text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)",
  "box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset",
  "line-height: 40px",
  "text-align: center",
  "font-weight: bold",
  "font-size: 32px",
].join(";");

var styles1 = [
  "color: #FF6C37",
  "display: block",
  "text-shadow: 0 2px 0 rgba(0, 0, 0, 1)",
  "line-height: 40px",
  "font-weight: bold",
  "font-size: 32px",
].join(";");

var styles2 = [
  "color: teal",
  "display: block",
  "text-shadow: 0 2px 0 rgba(0, 0, 0, 1)",
  "line-height: 40px",
  "font-weight: bold",
  "font-size: 32px",
].join(";");
