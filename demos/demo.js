
$(function () {


    var arView1, arView2;

    arView1 = new ARView.Player('#view1', {
        hideFullscreenButton: true,
        image: './images/taj-mahal.jpg'
    })

    arView1.onLoad()
})
// arView2 = new ARView.Player('#view2', {
//     hideFullscreenButton: true
// })