document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector('.grid');
    var masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        percentPosition: true
    });

    imagesLoaded(grid).on('progress', function () {
        // layout Masonry after each image loads
        masonry.layout();
    });
});
