const lengthInput = $("#length");
const rangeInput = $("#range");
const submitButton = $("#submit");
const copyButton = $(".copy");
const outputParagraph = $("#output-paragraph");

let len = 0;
let range = 0;
let arrayToCopy = undefined;

function validateInput(obj) {
  if (isNaN(obj.value) || obj.value % 1 != 0) {
    $(obj).addClass("invalid-input");
    $(submitButton).attr("disabled", "disabled");
  } else {
    $(obj).removeClass("invalid-input");
    $(submitButton).removeAttr("disabled");
  }
}

$(lengthInput).on("input", function () {
  validateInput(this);
  len = this.value;
});
$(rangeInput).on("input", function () {
  validateInput(this);
  range = this.value;
});
$(submitButton).on("click", function () {
  createArray();
});
$(copyButton).on("click", function () {
  navigator.clipboard.writeText(arrayToCopy);
});

function createArray() {
  arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(Math.floor(Math.random() * range));
  }
  $(copyButton).addClass("copy-show");
  arrayToCopy = "[" + arr + "]";
  $(outputParagraph).text(arrayToCopy);
}
