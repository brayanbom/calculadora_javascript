function agregar(valor)
{   
    document.getElementById("pantalla").value += valor 
}


function calcular() 
{
    const pantalla = document.getElementById("pantalla").value
    //eval toma una cadena (string) y la interpreta como código JavaScript en tiempo de ejecución
    const resultado = eval(pantalla)
    document.getElementById("pantalla").value = resultado
}

function borrar() 
{  
    document.getElementById("pantalla").value = ""
}

