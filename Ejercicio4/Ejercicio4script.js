num = prompt("Escribe un numero");

if (Number(num))
{
    alert("Es un numero");
}
else if (isNaN(num))
{
    alert("No es un numero");
}