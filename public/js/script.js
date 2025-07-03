try {
    const ddlt = document.querySelector(".delete");
    const box = document.querySelector(".dlt");
    const cancel = document.querySelector(".cancel");
    const overlay = document.querySelector(".overlay");

    ddlt?.addEventListener("click", () => {
        box.setAttribute("style", "display: flex !important;");
        overlay.setAttribute("style", "display: block !important;");
    });

    cancel?.addEventListener("click", () => {
        box.setAttribute("style", "display: none !important;");
        overlay.setAttribute("style", "display: none !important;");
    });
} catch (e) {
    console.log(e.name);
}


//form validation

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()