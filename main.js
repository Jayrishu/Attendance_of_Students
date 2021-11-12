name_of_students = [];
function submit(){
    var display_name_of_students = [];
    for (var i = 1;i <= 4;i++) {
        var name = document.getElementById("name_of_the_student_" + i).value;
        console.log(name);
        name_of_students.push(name);
        console.log(name_of_students)
    }
    console.log(name_of_students);
    var length_of_array = name_of_students.length;
    console.log(length_of_array);
    for (var j = 0; j < length_of_array; j++) {
        display_name_of_students.push("<h4>Name - " + name_of_students[j] +"</h4>");
        console.log(display_name_of_students);
        
    }
    console.log(display_name_of_students);
    document.getElementById("display_name_with_commas").innerHTML = display_name_of_students;
    var no_commas = display_name_of_students.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = no_commas;
    console.log(no_commas);
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline";
}
function sorting(){
    var sorted =[];
     name_of_students.sort();
    console.log(name_of_students);
    var length_of_array = name_of_students.length;
    console.log(length_of_array);
    for (var j = 0; j < length_of_array; j++) {
        sorted.push("<h4>Name - " + name_of_students[j] +"</h4>");
        console.log(sorted);
        
    }
    console.log(sorted);
    document.getElementById("display_name_with_commas").innerHTML = sorted;
    var no_commas = sorted.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = no_commas;
    console.log(no_commas);
}
