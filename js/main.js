$("#date").on("focus", () => {
  // console.log("radi")
  $("#lbl-date").hide()
})

$("#date").on("focusout", () => {
  // console.log("ne radi")
  if(document.getElementById("date").value === "")
  $("#lbl-date").show()
})