/*--------------- VALIDACIÓN--------------------------------------------------------------*/

document.querySelector('input[name="apellidos"]').addEventListener("keypress",function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="nombres"]').addEventListener("keypress",function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="trabajo"]').addEventListener("keypress",function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="unidad"]').addEventListener("keypress",function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="cargo"]').addEventListener("keypress",function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="distrito2"]').addEventListener("keypress",function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="provincia2"]').addEventListener("keypress",function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="ciudad2"]').addEventListener("keypress",function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="deposito"]').addEventListener("keypress",function(event){
    var ascii=event.keyCode || event.which;
    if((ascii>=48 && ascii<=57) || (ascii==46)){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="doc"]').addEventListener("keypress",function(event){
    if(longitud>=8){
        window.event.preventDefault();
        return;
    }
});

function registrar(frm){
    let test=/^\d{8}$/;
    if(!test.test(frm.doc.value)){
        window.event.preventDefault();
        alert("DNI incorrecto"); return;
    }


    test=/^\s*$/;
    if(test.test(frm.nombres.value)){
        window.event.preventDefault();
        alert("Ingrese el nombre"); return;
    }

    if(test.test(frm.apellidos.value)){
        window.event.preventDefault();
        alert("Ingrese sus apellidos"); return;
    }

    if(test.test(frm.trabajo.value)){
        window.event.preventDefault();
        alert("Ingrese el trabajo"); return;
    }

    if(test.test(frm.unidad.value)){
        window.event.preventDefault();
        alert("Ingrese el area"); return;
    }

    if(test.test(frm.cargo.value)){
        window.event.preventDefault();
        alert("Ingrese el cargo"); return;
    }

    if(test.test(frm.direccion2.value)){
        window.event.preventDefault();
        alert("Ingrese la dirección"); return;
    }

    if(test.test(frm.distrito2.value)){
        window.event.preventDefault();
        alert("Ingrese el distrito"); return;
    }

    if(test.test(frm.provincia2.value)){
        window.event.preventDefault();
        alert("Ingrese la provincia"); return;
    }

    if(test.test(frm.ciudad2.value)){
        window.event.preventDefault();
        alert("Ingrese la ciudad"); return;
    }

    if(test.test(frm.deposito.value)){
        window.event.preventDefault();
        alert("Ingrese si deposito o transfirió"); return;
    }

    test=/^\[9][0-9]{8}$/;
    if(!test.test(frm.celular.value)){
        window.event.preventDefault();
        alert("Celular debe tener 9 digitos"); return;
    }

    test=/^([a-zA-Z0-9])+[@]([a-zA-Z])+[.][a-zA-Z]{2,3}$/;
    if(!test.test(frm.correo.value)){
        window.event.preventDefault();
        alert("formato de email incorrecto"); return;
    }

    test=/^([0-3][0-9])+[/]+([0-1][0-9])+[/]+([1-2][0-9][0-9][0-9])$/;
    if(!test.test(frm.fecha_dep.value)){
        window.event.preventDefault();
        alert("Ingrese la fecha correcta"); return;
    }
    alert("Datos ingresados");
}

//LLAMADO A LAS FUNCIONES PARA SU EJECUCION (aqui tambien cargo la funcion cargarDefectoAviso)
document.body.setAttribute("onload","fecha()","registrar()");

//****************CALENDARIO******************/

var dsemanas = new Array("Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab");
//                         0      1      2      3      4      5      6
var meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto",
"Setiembre","Octubre","Noviembre","Diciembre");

function fecha(){
    var f = new Date(); //devuelve la fecha del sistema (actual)
    var dia = f.getDate(); //número de dia en el mes
    var mes = meses[f.getMonth()]; //devuelve el nombre ddel mes
    var year = f.getFullYear();

    var ndias = new Date(f.getFullYear(), f.getMonth()+1, 0).getDate(); //se ubica en el ultimo dia del mes
    var dsemana = new Date(f.getFullYear(), f.getMonth(), 1).getDay();
    var nmes = new Date(f.getMonth()+1);
    nmes;

    var dias = new Array(); //dias = []; arreglo vacio

    for(let i=0; i<dsemana; i++){
        dias.push(" "); //rellena espacios( ) en el arreglo
    }

    for(let i=0; i<ndias; i++){
            dias.push(i+1); // rellena el numero de dias en el arreglo
    }//dias = ["","","","",1,2,3....30]
    

    var tabla = document.createElement("table");  //crea un elemento <table>
    document.getElementById('aside_cal').appendChild(tabla)
    
    var fila = document.createElement("tr");  //crea un elemento <tr>
    tabla.appendChild(fila)

    dsemanas.forEach(function(d){ //bloque anonimo a ejecutar al recorrer el arreglo
        let celda = document.createElement("th"); //crea un elemento <th> o columna
        celda.innerHTML = d; //en cada celda coloca el elemento o texto del arreglo
        fila.appendChild(celda); //agrega la celda a la fila
    });

    
    let i=0;
    dias.forEach(function(d){ //bloque anonimo a ejecutar al recorrer el arreglo
        if(i%7 == 0){
            fila = document.createElement("tr");//crea una nueva fila
            tabla.appendChild(fila);            //agrega la fila a la tabla
        }
        i++;
        let celda = document.createElement("td"); //crea un elemento <td> o columna
        celda.innerHTML = d; //en cada celda coloca el elemento o texto del arreglo
        fila.appendChild(celda);  //agrega la celda a la fila
    });

    var borde = document.createAttribute("br");
}

/*--------REDES DE CONTACTANOS--------------------------*/
function gira(e){
    e.style.transform="rotateY(360deg)";
    e.style.transition="all 1s";
}

function retorno(e){
    e.style.transform="rotateY(0deg)";
    e.style.transition="all 1s";
}

let imagenes = document.getElementsByClassName("imgfooter"); //crea un arreglo con las img
//
for (let i=0; i < imagenes.length; i++){
    imagenes[i].setAttribute("onmouseover", "gira(this)");
    imagenes[i].setAttribute("onmouseout", "retorno(this)");
}