$(document).ready(function() {
    var array = [];
    var employeeArray = [];
    var totalSalary = 0;
    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();

      // initialize a new variable as an empty object
      var values = {};

      // convert the form inputs into an array
      var fields = $('#employeeinfo').serializeArray();

      // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
      fields.forEach(function(element, index, array) {
        // review index notation vs. dot notation on objects
        // here, dot notation wouldn't work
        values[element.name] = element.value;
      });

      employeeArray.push(values);
      console.log(employeeArray);

      totalSalary = 0;

      for(var i = 0; i < employeeArray.length; i++){
        totalSalary += Number(employeeArray[i].employeeSalary);
      }

      var monthlySalary = totalSalary / 12;

      $('#monthlySalary').text(monthlySalary);

      // clear out inputs
      $('#employeeinfo').find('input[type=text], input[type=number]').val('');

      // append to DOM
      appendDom(values);
    });

    function appendDom(empInfo) {
      $('#container').append('<tr class="person"></tr>');
      var $el = $('tbody').children().last();

      $el.append('<td>' + empInfo.employeeFirstName + '</td><td>' +
      empInfo.employeeLastName + '</td><td>' +
      empInfo.employeeIdNumber + '</td><td>' +
      empInfo.employeeJobTitle + '</td><td>' +
      empInfo.employeeSalary + '</td><td>' +
      '<button class="deleteButton">Delete</button></td>');
    }

    $('#container').on('click', '.deleteButton', function(){
      console.log($(this));
      $(this).parent().parent().remove();
    });

});
