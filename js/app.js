fetch("https://script.googleusercontent.com/macros/echo?user_content_key=GSMV6pivhCIRZ5DSfE6edQQ8vQMoGIbdeUgsciFcNXqbIHvvpyekVOo28xW27o791DdtNCwZC5xliB9n88yaIusp4azJ9Sbsm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDpXyXRhkX-vDGZZXzbTuxp-OwSWxEp75rv9ycLPFEs_pgyWV-y3lZQje_TRAM_3j4vJQLypo94OQ4jw1U3y85X_HWPZLl4xKQ&lib=MNkn_Azklh5GJkbOMNbF38XufUDU0HQaA")
  .then((response) => response.json())
  .then((data) => {
    var countAre =0;
    var countLim =0;
    var countTruj =0;

    // Agrupar los datos por ciudad y calcular la cantida
    data.forEach((item) => {
        if(item.Sede=="Arequipa"){
            countAre += 1;
        }
        else if (item.Sede== "Lima"){
            countLim += 1;
        }
        else if (item.Sede== "Trujillo"){
            countTruj += 1;
        }
      });
    
      

 

    var ctx = document.getElementById("myChart").getContext("2d"); 
    var chart = new Chart(ctx, {
        type: "bar", 
        data:{
            labels: ["Arequipa", "Lima", "Trujillo"],
            datasets: [{
                    label: "cantidad total de datos",
                    data: [countAre,countLim,countTruj],
                    backgroundColor: [
                        "rgba(255,99,132,0.2)",
                        "rgba(175,99,132,0.2)",
                        "rgba(20,99,132,0.2)",],
                    borderWith:1,
            }],  
        },
        option: {
            escales: {
                yAxes:[{
                    ticks:{
                        begingAtZero: true,
                    },
                }],
            },
        },
    });
});


