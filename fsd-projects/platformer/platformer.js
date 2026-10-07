$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(250, 650, 100, 200, "blue")
createPlatform(250, 520, 100, 20, "blue" )
createPlatform(250, 390, 100, 20, "blue")
createPlatform(350, 390, 100, 20, "blue")
createBadPlatform(350, 730, 100000, 200, "red")
createFakePlatform(450, 390, 349, 20, "blue")
createPlatform(800, 390, 100, 20, "blue")
createPlatform(100, 300, 100, 20, "blue")
createPlatform(400, 200, 100, 20, "blue")
createBadPlatform(500, 200, 100, 20, "red")
createPlatform(600, 200, 100, 20, "blue")
createPlatform(700, 200, 100, 20, "red")
createBadPlatform(800, 200, 100, 20, "blue")
createPlatform(800, 250, 400, 20, "lightblue")
createPlatform(1300, 500, 100, 20, "lightblue")
createPlatform(600, 700, 500, 20, "lightblue")
createPlatform(500, 600, 100, 20, "lightblue")
createPlatform(700, 550, 300, 20, "lightblue")
createBadPlatform(500, 360, 300, 10, "lightblue")
createPlatform(1000, 450, 100, 20, "lightblue")



    // TODO 3 - Create Collectables
createCollectable("diamond", 850, 350, 0, 0)
createCollectable("diamond", 150, 250, 0, 0)
createCollectable("diamond", 600, 600, 0, 0)



    
    // TODO 4 - Create Cannons
createCannon("right", 200, 2000)
createCannon("right", 650, 2000)
 createCannon("left", 200, 1500, 100, 10, 100, 500)   
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
