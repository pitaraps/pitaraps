$(function() {
    var ap = new APlayer({
        element: document.getElementById('player'),
        narrow: false,
        showlrc: 0,
        mutex: true,
        // theme: '#b7daff',
        preload: 'metadata',
        listmaxheight: '513px',
        music: [
        {
            title: 'Short Dragons',                                      
            author: 'Pita Meanata',
            url: 'sounds/Short Dragons.mp3',
            pic: 'img/album_cover.jpg' 
        },
        {
            title: "EAB",
            author: "Pita Meanata",
            url: "sounds/EAB.mp3",
            pic: 'img/album_cover.jpg' 
        }
        ]
    });

    $('.js-main-logo').delay(500).animate({opacity: 1}, 1000);
});