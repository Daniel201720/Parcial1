$(document).ready(function(){
  $(".selc_ok").hide();
  $(".form-control").hide();

  var calorias;
  var grasas;
  var proteina;
  var carboidratos;

  $("#row .1tx_edit").click(function () { 
    $("#row .row_data").hide();
    $("#row i").hide();
    $("#row .form-control").show();
    $("#selc_ok").show();
    $("#slc1").show();

   
    
  });
  $("#row1 .1tx_edit").click(function () { 
    $("#row1 .row_data").hide();
    $("#row1 i").hide();
    $("#row1 .form-control").show();
    $("#selc_ok").show();
    $("#slc2").show();
   
    
  });
  $("#row2 .1tx_edit").click(function () { 
    $("#row2 .row_data").hide();
    $("#row2 i").hide();
    $("#row2 .form-control").show();
    $("#selc_ok").show();
    $("#slc3").show();

   
    
  });
  $("#row3 .1tx_edit").click(function () { 
    $("#row3 .row_data").hide();
    $("#row3 i").hide();
    $("#row3 .form-control").show();
    $("#selc_ok").show();
    $("#slc4").show();

   
    
  });
  
  $("#reset").click(function () { 
    location. reload();
    
  });

  $("#save").click(function () { 
    $.post("demo_test.asp", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
    
  });

    
   
  });