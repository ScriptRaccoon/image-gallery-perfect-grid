const gallery = document.querySelector(".gallery");

const imageHeight = 150;

const imageURLs = [
    "https://thedukesplayground.files.wordpress.com/2012/03/mulholland_drive.jpg",
    "http://www.cinemamondo.fi/wp-content/uploads/2013/05/mulholland_drive.jpg",
    "https://www.slashfilm.com/wp/wp-content/images/mulholland-drive-betty-rita-phone.jpg",
    "https://i.ytimg.com/vi/qfQE0SOGG-g/maxresdefault.jpg",
    "https://i.ytimg.com/vi/UozhOo0Dt4o/maxresdefault.jpg",
    "https://cdn.theculturetrip.com/wp-content/uploads/2016/03/San-Fernando-Valley-at-Night-from-Mulholland-Drive-1024x683.jpg",
    "http://www.gablescinema.com/media/filmassets/slides/Mulholland_0013_mulholland15.jpg.jpg",
    "https://wallpapercave.com/wp/wp4068065.jpg",
    "https://www.burgkino.at/sites/default/files/images/2016/mulholland-drive-419_1.jpg",
    "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-129461-20061102-mulhollanddrive-x1800-1393282815.jpg",
    "https://tse1.mm.bing.net/th?id=OIP.y_Z7Jyif4Lk1J7trcC1O8wHaEK",
];

imageURLs.forEach((url) => {
    const imageContainer = document.createElement("div");
    const image = document.createElement("img");
    image.addEventListener("load", () => {
        const w = image.width;
        const h = image.height;
        imageContainer.style.width = (imageHeight * w) / h + "px";
        imageContainer.style.flexGrow = (imageHeight * w) / h;
        const paddingHelper = document.createElement("i");
        paddingHelper.style.paddingBottom = (h / w) * 100 + "%";
        imageContainer.appendChild(paddingHelper);
        imageContainer.appendChild(image);
    });
    image.src = url;
    gallery.appendChild(imageContainer);
});
