var emptyRow = `<tr><td colspan = '4' class='text-center'> No Records Available</td></tr>`;
var emptyNewRow = `<tr class='trNewRow'><td class='tdName'>
    <input type='text' class='txtName' placeholder = 'Enter Student Name'/>
    </td>
    <td class='tdDegree'>
    <input type='text' class='txtDegree' placeholder = 'Enter Student Degree'/>
    </td>
    <td class='tdMark'>
    <input type='text' class='txtMark' placeholder = 'Enter Student Mark'/>
    </td>
    <td class='tdAction'>
    <button class='btn btn-success btn-sm btnSave'> Save </button>
    <button class = 'btn btn-danger btn-sm btnDelete'>Cancel</button>
    </td></tr>`;

var rowButtons = `<button class = 'btn btn-success btn-sm btnEdit'>Edit</button> <button class = 'btn btn-danger btn-sm btnDelete'> Delete </button> `;
var updateButton = `<button class = 'btn btn-success btn-sm btnSave'> Update </button>
<button class = 'btn btn-danger btn-sm btnCancel'> Cancel </button>`;

$(document).ready(function () {
  $("#list tbody").append($.parseHTML(emptyRow));
  $("#btnAdd").click(() => {
    if ($("#list tbody").children().children().length == 1) {
      $("#list tbody").html("");
    }
    $("#list tbody").append($.parseHTML(emptyNewRow));
  });

  $("#list").on("click", ".btnSave", function () {
    const name = $(this).parent().parent().find(".txtName").val();
    $(this)
      .parent()
      .parent()
      .find(".tdName")
      .html("" + name + "");

    const degree = $(this).parent().parent().find(".txtDegree").val();
    $(this)
      .parent()
      .parent()
      .find(".tdDegree")
      .html("" + degree + "");

    const mark = $(this).parent().parent().find(".txtMark").val();
    $(this)
      .parent()
      .parent()
      .find(".tdMark")
      .html("" + mark + "");

    $(this).parent().parent().find(".tdAction").html(rowButtons);
  });

  $("#list").on("click", ".btnDelete", function () {
    console.log("this:", this);
    $(this).parent().parent().remove();
    if ($("#list tbody").children().children().length == 0) {
      $("#list tbody").append(emptyRow);
    }
  });

  $("#list").on("click", ".btnCancel", function () {
    $(this).parent().parent().remove();
  });

  $("#list").on("click", ".btnEdit", function () {
    const name = $(this).parent().parent().find(".tdName").html();
    $(this)
      .parent()
      .parent()
      .find(".tdName")
      .html(
        "<input type='text' value='" +
          name +
          "' class='txtName' placeholder='Enter Student Name'/>"
      );

    const degree = $(this).parent().parent().find(".tdDegree").html();
    $(this)
      .parent()
      .parent()
      .find(".tdDegree")
      .html(
        "<input type='text' value='" +
          degree +
          "' class='txtDegree' placeholder='Enter Student Degree'/>"
      );

    const mark = $(this).parent().parent().find(".tdMark").html();
    $(this)
      .parent()
      .parent()
      .find(".tdMark")
      .html(
        "<input type='text' value='" +
          mark +
          "' class='txtMark' placeholder='Enter Student Mark'/>"
      );
    $(this).parent().parent().find(".tdAction").html(updateButton);
  });
});
