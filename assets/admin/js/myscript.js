
function PreviewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview").src = oFREvent.target.result;
    };
}

function PreviewEditImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("uploadEditImage").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("uploadEditPreview").src = oFREvent.target.result;
    };
}

