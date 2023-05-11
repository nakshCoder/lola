$(".modal-dialog")
  .parent()
  .on("show.bs.modal", function (e) {
    $(e.relatedTarget.attributes["data-target"].value).appendTo("body");
  });
