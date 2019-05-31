const s = (selektor) => document.getElementById(selektor)

$("#date").on("focus", () => {
  $("#lbl-date").hide()
})

$("#date").on("focusout", () => {
  if(s("date").value === "")
  $("#lbl-date").show()
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

s("contact-form").addEventListener("submit", e => {
  e.preventDefault()
})