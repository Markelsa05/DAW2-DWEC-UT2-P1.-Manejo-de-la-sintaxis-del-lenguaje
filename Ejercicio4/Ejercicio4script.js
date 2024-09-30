num = prompt("Escribe un numero").trim();

if (Number(num))
{
    alert("Es un numero");
}
else if (isNaN(num) || num === "")
{
    alert("No es un numero");
}