/* STUDENTS IGNORE THIS FUNCTION
 * All this does is create an initial
 * attendance record if one is not found
 * within localStorage.
 */
(function() {
    if (!localStorage.attendance) {
        console.log('Creating attendance records...');
        function getRandom() {
            return (Math.random() >= 0.5);
        }

        var nameColumns = $('tbody .name-col'),
            attendance = {};

        nameColumns.each(function() {
            var name = this.innerText;
            attendance[name] = [];

            for (var i = 0; i <= 11; i++) {
                attendance[name].push(getRandom());
            }
        });

        localStorage.attendance = JSON.stringify(attendance);
    }
}());

var model = {
    students: [
        {
            name : 'Tabby'
        },
        {
            name : 'Tiger'
        },
        {
            name : 'Scaredy'
        },
        {
            name : 'Shadow'
        },
        {
            name : 'Sleepy'
        }
    ]
};

var octopus = {

    init: function() {
        // tell our views to initialize
        view.init();
    },
    getStudents: function() {
        return model.students;
    }
};

var view = {
    init: function() {

        // store pointers to our DOM elements for easy access later
        this.students = document.getElementById('students');


        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        var student, elem, i;
        var students = octopus.getStudents();
        //this.studentRow.innerHTML = '';

        // loop over the cats
        for (i = 0; i < students.length; i++) {
            // this is the cat we're currently looping over
            student = students[i];
            console.log(student);

            // make a new cat list item and set its text
            elem = document.createElement('tr');
            elem.textContent = student.name;

            // finally, add the element to the list
            this.students.appendChild(elem);
        }
    }
};

// make it go!
octopus.init();

/* STUDENT APPLICATION
$(function() {
    var attendance = JSON.parse(localStorage.attendance),
        $allMissed = $('tbody .missed-col'),
        $allCheckboxes = $('tbody input');

    // Count a student's missed days
    function countMissing() {
        $allMissed.each(function() {
            var studentRow = $(this).parent('tr'),
                dayChecks = $(studentRow).children('td').children('input'),
                numMissed = 0;

            dayChecks.each(function() {
                if (!$(this).prop('checked')) {
                    numMissed++;
                }
            });

            $(this).text(numMissed);
        });
    }

    // Check boxes, based on attendace records
    $.each(attendance, function(name, days) {
        var studentRow = $('tbody .name-col:contains("' + name + '")').parent('tr'),
            dayChecks = $(studentRow).children('.attend-col').children('input');

        dayChecks.each(function(i) {
            $(this).prop('checked', days[i]);
        });
    });

    // When a checkbox is clicked, update localStorage
    $allCheckboxes.on('click', function() {
        var studentRows = $('tbody .student'),
            newAttendance = {};

        studentRows.each(function() {
            var name = $(this).children('.name-col').text(),
                $allCheckboxes = $(this).children('td').children('input');

            newAttendance[name] = [];

            $allCheckboxes.each(function() {
                newAttendance[name].push($(this).prop('checked'));
            });
        });

        countMissing();
        localStorage.attendance = JSON.stringify(newAttendance);
    });

    countMissing();
}());
*/
