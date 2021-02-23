var idade = 67
if(idade < 16){
    console.log("Não vota")
} else if (idade < 18 || idade > 65) //sabendo q ja está incluido o maior q 116, pq ele é o falso do acima
{
        console.log("Voto opcional")
 } else {
        console.log("Voto obrigatório")
}
