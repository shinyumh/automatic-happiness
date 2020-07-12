(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);

//first
var i = 0;
var t = true;
var prog = 0;
function move(obj) {
  if (i == 0 && t == true) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 1000);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else if (t==true){
				width++;
				prog = width;
        elem.style.width = width + "%";
				elem.innerHTML = width + "%";
      }
    }
  }
};

var num = 0;
function sos(obj) {
	if (t==true){
		t=false;
		obj.innerHTML = "resume"
	} else if (t==false){
		t=true;
		obj.innerHTML = "pause"
	}
};

function send(){
	var counselor = prompt("enter your counselor's name: ")
	if (counselor != null){
		alert("progress being sent to " + counselor + ": " + prog + "%");
	}
}

//second
var i1 = 0;
var t1 = true;
var prog1 = 0;
function move1(obj) {
  if (i1 == 0 && t1 == true) {
    i1 = 1;
    var elem1 = document.getElementById("myBar1");
    var width1 = 1;
    var id1 = setInterval(frame1, 1000);
    function frame1() {
      if (width1 >= 100) {
        clearInterval(id1);
        i1 = 0;
      } else if (t1==true){
				width1++;
				prog1 = width1;
        elem1.style.width = width1 + "%";
				elem1.innerHTML = width1 + "%";
      }
    }
  }
};

var num1 = 0;
function sos1(obj) {
	if (t1==true){
		t1=false;
		obj.innerHTML = "resume"
	} else if (t1==false){
		t1=true;
		obj.innerHTML = "pause"
	}
};

function send1(){
	var counselor1 = prompt("enter your counselor's name: ")
	if (counselor1 != null){
		alert("progress being sent to " + counselor1 + ": " + prog1 + "%");
	}
}

//third
var i2 = 0;
var t2 = true;
var prog2 = 0;
function move2(obj) {
  if (i2 == 0 && t2 == true) {
    i2 = 1;
    var elem2 = document.getElementById("myBar2");
    var width2 = 1;
    var id2 = setInterval(frame2, 1000);
    function frame2() {
      if (width2 >= 100) {
        clearInterval(id2);
        i2 = 0;
      } else if (t2==true){
				width2++;
				prog2 = width2;
        elem2.style.width = width2 + "%";
				elem2.innerHTML = width2 + "%";
      }
    }
  }
};

var num2 = 0;
function sos2(obj) {
	if (t2==true){
		t2=false;
		obj.innerHTML = "resume"
	} else if (t2==false){
		t2=true;
		obj.innerHTML = "pause"
	}
};

function send2(){
	var counselor2 = prompt("enter your counselor's name: ")
	if (counselor2 != null){
		alert("progress being sent to " + counselor2 + ": " + prog2 + "%");
	}
}

//fourth
var i3 = 0;
var t3 = true;
var prog3 = 0;
function move3(obj) {
  if (i3 == 0 && t3 == true) {
    i3 = 1;
    var elem3 = document.getElementById("myBar3");
    var width3 = 1;
    var id3 = setInterval(frame3, 1000);
    function frame3() {
      if (width3 >= 100) {
        clearInterval(id3);
        i3 = 0;
      } else if (t3==true){
				width3++;
				prog3 = width3;
        elem3.style.width = width3 + "%";
				elem3.innerHTML = width3 + "%";
      }
    }
  }
};

var num3 = 0;
function sos3(obj) {
	if (t3==true){
		t3=false;
		obj.innerHTML = "resume"
	} else if (t3==false){
		t3=true;
		obj.innerHTML = "pause"
	}
};

function send3(){
	var counselor3 = prompt("enter your counselor's name: ")
	if (counselor3 != null){
		alert("progress being sent to " + counselor3 + ": " + prog3 + "%");
	}
}

//fifth
var i4 = 0;
var t4 = true;
var prog4 = 0;
function move4(obj) {
  if (i4 == 0 && t4 == true) {
    i4 = 1;
    var elem4 = document.getElementById("myBar4");
    var width4 = 1;
    var id4 = setInterval(frame4, 1000);
    function frame4() {
      if (width4 >= 100) {
        clearInterval(id4);
        i4 = 0;
      } else if (t4==true){
				width4++;
				prog4 = width4;
        elem4.style.width = width4 + "%";
				elem4.innerHTML = width4 + "%";
      }
    }
  }
};

var num4 = 0;
function sos4(obj) {
	if (t4==true){
		t4=false;
		obj.innerHTML = "resume"
	} else if (t4==false){
		t4=true;
		obj.innerHTML = "pause"
	}
};

function send4(){
	var counselor4 = prompt("enter your counselor's name: ")
	if (counselor4 != null){
		alert("progress being sent to " + counselor4 + ": " + prog4 + "%");
	}
}

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

	var data = google.visualization.arrayToDataTable([
	          ['Day', 'Hour(s)'],
	          ['Mon',  1],
	          ['Tue',  3],
	          ['Wed',  2],
	          ['Thur',  5],
						['Fri',  2],
						['Sat',  1],
						['Sun',  3],
	        ]);
      var options = {
				vAxis: {
          title: 'Hours'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
	var data = google.visualization.arrayToDataTable([
		['Task', 'Hours per Day'],
		['Completed',     11],
		['Not Yet Completed',      2],
	]);

	var options = {
		pieHole: 0.4,
	};

	var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
	chart.draw(data, options);
}

