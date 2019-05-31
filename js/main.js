$("#date").on("focus", () => {
  $("#lbl-date").hide()
})

$("#date").on("focusout", () => {
  if(document.getElementById("date").value === "")
  $("#lbl-date").show()
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})