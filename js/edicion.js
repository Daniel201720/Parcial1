$(document).ready(function(){
  $(".selc_ok").hide();
  $(".form-control").hide();
  $(".text-secondary").hide();

  var calorias;
  var grasas;
  var proteina;
  var carboidratos;
  var row;

  $("#row .1tx_edit").click(function () { 
    $("#row .row_data").hide();
    $("#row i").hide();
    $("#rrow_1").hide();
    $("#row .form-control").show();
    $("#selc_ok").show();
    $("#slc1").show();
    $("#row .text-secondary").show();

    row="1"

   
    
  });
  $("#row1 .1tx_edit").click(function () { 
    $("#row1 .row_data").hide();
    $("#row1 i").hide();
    $("#rrow_2").hide();
    $("#row1 .form-control").show();
    $("#selc_ok").show();
    $("#slc2").show();
    $("#row1 .text-secondary").show();
    row="2"
   
    
  });
  $("#row2 .1tx_edit").click(function () { 
    $("#row2 .row_data").hide();
    $("#row2 i").hide();
    $("#rrow_3").hide();
    $("#row2 .form-control").show();
    $("#selc_ok").show();
    $("#slc3").show();
    $("#row2 .text-secondary").show();
    row="3"

   
    
  });
  $("#row3 .1tx_edit").click(function () { 
    $("#row3 .row_data").hide();
    $("#row3 i").hide();
    $("#rrow_4").hide();
    $("#row3 .form-control").show();
    $("#selc_ok").show();
    $("#slc4").show();
    $("#row3 .text-secondary").show();
    row="4"

   
    
  });
  
  $("#reset").click(function () { 
    location. reload();
    
  });

  $("#save").click(function () { 
    function enviar(){
      var alimento= $("selector").val();
      var calorias= $(selector).val();
      var proteina= $(selector).val();
      var carboidratos= $(selector).val();
      var ok= $(selector).val();

      var ruta="alt="+alimento+"&clr="+calorias+"&prt="+proteina+"&crb="+carboidratos+"&ok="+ok;

      $.ajax({
        type: "post",
        url: "sen.php",
        data: ruta,
        success: function (response) {
          
        }
      });
    
    }
   
    
  });

    
   
  });