
var arView1, arView2;
function loadDemo() {

    // var arView1, arView2;

    arView1 = new ARView.Player('#view1', {
        // hide_fullscreen_button: true,
        image: './images/taj-mahal.jpg',
        // is_vr_off: false,
        // is_debug: false,
        // is_autopan_off: false,
    })

    setTimeout(() => {
        arView1.onLoad()
    }, 0);


    arView2 = new ARView.Player('#view2', {

        image: './images/taj-mahal.jpg',

    })

    setTimeout(() => {

        arView2.onLoad()
    }, 0);
}

window.onload = loadDemo
