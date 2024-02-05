let image = document.getElementById("image");
let previewImg = document.getElementById("preview-img");
let preview = document.querySelector(".preview");
let closeBtn = document.querySelector(".close");
let uploadBtn = document.getElementById("upload-image");
let sendBtn = document.getElementById("send-image");

onload = function () {
    closeBtn.style.display = "none";
};
onload();

function handleImageChange() {
    const file = image.files[0];

    if(file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            previewImg.setAttribute("src", e.target.result);
            preview.className = "preview active";
            preview.classList.toggle("animate");
            closeBtn.style.display = "block";
            uploadBtn.style.display = "none";
            sendBtn.style.display = "block";

            setTimeout(() => {
                if(preview.classList.contains("animate")) {
                    preview.classList.toggle("animate");
                }
            }, 3000);
        };

        reader.readAsDataURL(file);
    }
    else {
        previewImg.setAttribute("src", "");
        preview.className = "preview";
    }
}

function closeIt() {
    previewImg.setAttribute("src", "");
    image.value = "";
    preview.className = "preview";
    closeBtn.style.display = "none";
    uploadBtn.style.display = "block";
    sendBtn.style.display = "none";
};

image.addEventListener("change", handleImageChange);

preview.addEventListener("dragover", (e) => {
    e.preventDefault();
});

preview.addEventListener("drop", (e) => {
    e.preventDefault();
    image.files = e.dataTransfer.files;
    handleImageChange()
});