 window.onLoad = function() {
    init();
};

function legend(parent, data) {
    parent.className = 'legend';
    var datas = data.hasOwnProperty('datasets') ? data.datasets : data;

    // remove possible children of the parent
    while(parent.hasChildNodes()) {
        parent.removeChild(parent.lastChild);
    }

    datas.forEach(function(d) {
        var title = document.createElement('span');
        title.className = 'title';
        title.style.borderColor = d.hasOwnProperty('strokeColor') ? d.strokeColor : d.color;
        title.style.borderStyle = 'solid';
        parent.appendChild(title);

        var text = document.createTextNode(d.title);
        title.appendChild(text);
    });
}
function init() {
    var ctx = $("#myChart").get(0).getContext("2d");

    var data = {
        labels: ["Size", "Age", "Enjoyment" ,"Distance", "Passengers", "No. of Stops", "Maintenence"],
        datasets: [
            {
	            label: "Student 1",
	            fillColor: "rgba(172,235,173,0.1)",
	            strokeColor: "rgba(172,235,173,1)",
	            pointColor: "rgba(172,235,173,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(172,235,173,1)",
	            data: [70, 18, 30, 10, 30, 20, 10]
	        },
            {
	            label: "Student 2",
	            fillColor: "rgba(16,232,19,0.1)",
	            strokeColor: "rgba(16,232,19,1)",
	            pointColor: "rgba(16,232,19,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(16,232,19,1)",
	            data: [80, 21, 40, 10, 30, 10, 30]
	        },
	        {
	            label: "Student 3",
	            fillColor: "rgba(0,148,2,0.1)",
	            strokeColor: "rgba(0,148,2,1)",
	            pointColor: "rgba(0,148,2,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(0,148,2,1)",
	            data: [40, 20, 30, 10, 30, 10, 10]
	        },
	        {
	            label: "Student 4",
	            fillColor: "rgba(0,56,27,0.1)",
	            strokeColor: "rgba(0,56,27,1)",
	            pointColor: "rgba(0,56,27,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(0,56,27,1)",
	            data: [40, 19, 40, 30, 40, 10, 20]
	        },
            {
	            label: "Commuter 1",
	            fillColor: "rgba(193,121,219,0.1)",
	            strokeColor: "rgba(193,121,219,1)",
	            pointColor: "rgba(193,121,219,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(193,121,219,1)",
	            data: [40, 53, 30, 90, 0, 10, 30]
	        },
	        {
	            label: "Commuter 2",
	            fillColor: "rgba(164,4,222,0.1)",
	            strokeColor: "rgba(164,4,222,1)",
	            pointColor: "rgba(164,4,222,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(164,4,222,1)",
	            data: [40, 56, 60, 100, 10, 40, 30]
	        },
	        {
	            label: "Commuter 3",
	            fillColor: "rgba(69,0,94,0.1)",
	            strokeColor: "rgba(69,0,94,1)",
	            pointColor: "rgba(69,0,94,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(69,0,94,1)",
	            data: [40, 57, 40, 100, 20, 40, 50]
	        },
            {
	            label: "Modifier 1",
	            fillColor: "rgba(59,169,173,0.1)",
	            strokeColor: "rgba(59,169,173,1)",
	            pointColor: "rgba(59,169,173,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(59,169,173,1)",
	            data: [28, 57, 90, 40, 20, 10, 70]
	        },
	        {
	            label: "Modifier 2",
	            fillColor: "rgba(0,111,115,0.1)",
	            strokeColor: "rgba(0,111,115,1)",
	            pointColor: "rgba(0,111,115,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(0,111,115,1)",
	            data: [80, 28, 60, 50, 10, 20, 80]
	        },
	        {
	            label: "Modifier 2 second car",
	            fillColor: "rgba(0,111,115,0.1)",
	            strokeColor: "rgba(0,111,115,1)",
	            pointColor: "rgba(0,111,115,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(0,111,115,1)",
	            data: [40, 28, 80, 20, 30, 20, 90]
	        },
            {
	            label: "Parent 1",
	            fillColor: "rgba(232,151,149,0.1)",
	            strokeColor: "rgba(232,151,149,1)",
	            pointColor: "rgba(232,151,149,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(232,151,149,1)",
	            data: [40, 46, 60, 30, 70, 30, 30]
	        },
	        {
	            label: "Parent 2",
	            fillColor: "rgba(240,34,26,0.1)",
	            strokeColor: "rgba(240,34,26,1)",
	            pointColor: "rgba(240,34,26,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(240,34,26,1)",
	            data: [70, 42, 30, 20, 40, 50, 30]
	        },
	        {
	            label: "Parent 3",
	            fillColor: "rgba(145,16,12,0.1)",
	            strokeColor: "rgba(145,16,12,1)",
	            pointColor: "rgba(145,16,12,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(145,16,12,1)",
	            data: [90, 58, 70, 10, 70, 50, 60]
	        },
            {
	            label: "Small Car",
	            fillColor: "rgba(173,237,76,0.1)",
	            strokeColor: "rgba(173,237,76,1)",
	            pointColor: "rgba(173,237,76,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(173,237,76,1)",
	            data: [40, 48, 50, 10, 10, 10, 20]
	        },
            {
	            label: "Motorcycle",
	            fillColor: "rgba(237,205,76,0.1)",
	            strokeColor: "rgba(237,205,76,1)",
	            pointColor: "rgba(237,205,76,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(237,205,76,1)",
	            data: [10, 52, 70, 15, 0, 10, 80]
	        },
	        {
	            label: "Passenger",
	            fillColor: "rgba(255,3,234,0.1)",
	            strokeColor: "rgba(255,3,234,1)",
	            pointColor: "rgba(255,3,234,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(255,3,234,1)",
	            data: [80, 20, 40, 19, 0, 27, 0]
	        },
	        {
	            label: "Fancy Car",
	            fillColor: "rgba(255,145,0,0.1)",
	            strokeColor: "rgba(255,145,0,1)",
	            pointColor: "rgba(255,145,0,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(255,145,0,1)",
	            data: [30, 42, 80, 20, 20, 10, 40]
	        },
            {
	            label: "Old",
	            fillColor: "rgba(151,187,205,0.1)",
	            strokeColor: "rgba(151,187,205,1)",
	            pointColor: "rgba(151,187,205,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(151,187,205,1)",
	            data: [60, 77, 10, 10, 2, 20, 10]
	        }
        ]
    }

    var myNewChart = new Chart(ctx).Radar(data);
    legend(document.getElementById("myChart"), data);
}
