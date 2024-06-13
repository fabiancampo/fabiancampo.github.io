document.addEventListener('DOMContentLoaded', function () {
  /* Opciones del botón de opciones */
    var mediaType = document.getElementById('media_type');
    var additionalOptions = document.getElementById('additional_options');

    mediaType.addEventListener('change', function () {
        if (this.value === 'image') {
            additionalOptions.style.display = 'block';
        } else {
            additionalOptions.style.display = 'none';
        }
    });

    var event = new Event('change');
    mediaType.dispatchEvent(event);

    /* Menu seleccion de color */

    var colorSelector = document.getElementById('colorSelector');
    var colorOptions = document.querySelectorAll('.dropdown-item');

    colorOptions.forEach(function (option) {
                option.addEventListener('click', function () {
                    var color = this.getAttribute('data-color');
                    colorSelector.innerText = this.innerText;
                    colorSelector.style.backgroundColor = color;

                });
            });

    /* Seleccion estilo */
  /*con jquery
    $(document).ready(function(){
        $(".style-image").click(function(){
            // Remove active class from all images
            $(".style-image").removeClass("active");
            // Add active class to the clicked image
            $(this).addClass("active");
            // Get the selected estilo value
            var selectedEstilo = $(this).data("estilo");
            console.log("Selected estilo:", selectedEstilo);
        });
         }); */

        var styleImages = document.querySelectorAll('.style-image');

    styleImages.forEach(function (image) {
        image.addEventListener('click', function () {
            // Remove active class from all images
            styleImages.forEach(function (img) {
                img.classList.remove('active');
            });

            // Add active class to the clicked image
            this.classList.add('active');

            // Get the selected estilo value
            var selectedEstilo = this.getAttribute('data-estilo');
            console.log("Selected estilo:", selectedEstilo);
        });
    });
});
