function submitForm() {
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
    var image = document.getElementById('image').files[0];
    var video = document.getElementById('video').files[0];

    var dataSection = document.getElementById('dataSection');

    var newData = "<div class='card'>" +
        "<div class='card-header'>" +
        "<h1 class='card-title' style='color: black;'>" + title + "</h1>" +
        "</div>" +
        "<div class='card-body'>" +
        "<p style='color: black;'>" + content + "</p>";

    if (image) {
    var imagePreview = document.createElement('img');
    imagePreview.src = URL.createObjectURL(image);
    var desiredWidth = '100%'; // Set your desired width here
    var desiredHeight = 300; // Set your desired height here
    imagePreview.style.maxWidth = desiredWidth + 'px';
    imagePreview.style.maxHeight = desiredHeight + 'px';
    newData += "<div class='card-body-image'>" +
        "<img class='preview' src='" + imagePreview.src + "' alt='Selected Image' style='max-width: " + desiredWidth + "px; max-height: " + desiredHeight + "px;'>" +
        "</div>";
}



    if (video) {
        var videoPreview = document.createElement('video');
        videoPreview.src = URL.createObjectURL(video);
        videoPreview.controls = true;
        videoPreview.autoplay = false;
        videoPreview.style.maxWidth = '100%';
        videoPreview.style.height = 'auto';
        videoPreview.style.marginTop = '20px';
        newData += "<div class='card-body-video'>" +
            "<video class='video-preview' src='" + videoPreview.src + "' controls autoplay></video>" +
            "</div>";
    }

    newData += "</div></div>";

    dataSection.innerHTML += newData;

    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    document.getElementById('image').value = '';
    document.getElementById('video').value = '';
}
