document.getElementById('submit').addEventListener('click', function() {
    // Get the number of vehicles for each lane
    var lanes = [];
    for (var i = 1; i <= 4; i++) {
        var twoWheelers = parseInt(document.getElementById('lane${i}-two-wheelers').value, 10) || 0;
        var fourWheelers = parseInt(document.getElementById('lane${i}-four-wheelers').value, 10) || 0;
        lanes.push({
            lane: i,
            density: twoWheelers + fourWheelers * 2, // Assuming four-wheelers contribute twice as much to density
            light: document.getElementById('light${i}')
        });
    }

    // Find the lane with the highest density
    var highestDensityLane = lanes.reduce(function(prev, current) {
        return (prev.density > current.density) ? prev : current;
    });

    // Set all lights to red
    lanes.forEach(function(lane) {
        lane.light.style.backgroundColor = 'red';
    });

    // Set the light of the highest density lane to green
    highestDensityLane.light.style.backgroundColor = 'green';
});