fetch(
  "https://script.googleusercontent.com/macros/echo?user_content_key=GSMV6pivhCIRZ5DSfE6edQQ8vQMoGIbdeUgsciFcNXqbIHvvpyekVOo28xW27o791DdtNCwZC5xliB9n88yaIusp4azJ9Sbsm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDpXyXRhkX-vDGZZXzbTuxp-OwSWxEp75rv9ycLPFEs_pgyWV-y3lZQje_TRAM_3j4vJQLypo94OQ4jw1U3y85X_HWPZLl4xKQ&lib=MNkn_Azklh5GJkbOMNbF38XufUDU0HQaA"
)
  .then((response) => response.json())
  .then((data) => {
    var countAre = 0;
    var countLim = 0;
    var countTruj = 0;

    // Agrupar los datos por ciudad y calcular la cantida
    data.forEach((item) => {
      if (item.Sede == "Arequipa") {
        countAre += 1;
      } else if (item.Sede == "Lima") {
        countLim += 1;
      } else if (item.Sede == "Trujillo") {
        countTruj += 1;
      }
    });



    var cEAI = 0;
    var cOM = 0;
    var cOPPM = 0;
    var cARC = 0;
    var cGMMP = 0;
    var cGMMI = 0;
    var cEISEP = 0;
    var cDDS = 0;
    var cGSST = 0;
    var cMA = 0;
    var cMEP = 0;

    data.forEach((item) => {
      if (item.Carrera == "Electrónica y Automatización Industrial") {
        cEAI += 1;
      } else if (item.Carrera == "Operaciones Mineras") {
        cOM += 1;
      } else if (
        item.Carrera == "Operación de Plantas de Procesamiento de Minerales"
      ) {
        cOPPM += 1;
      } else if (item.Carrera == "Administración de Redes y Comunicaciones") {
        cARC += 1;
      } else if (
        item.Carrera == "Gestión y Mantenimiento de Maquinaria Pesada"
      ) {
        cGMMP += 1;
      } else if (
        item.Carrera == "Gestión y Mantenimiento de Maquinaria Industrial"
      ) {
        cGMMI += 1;
      } else if (
        item.Carrera ==
        "Electricidad Industrial con mención en Sistemas Eléctricos de Potencia"
      ) {
        cEISEP += 1;
      } else if (item.Carrera == "Diseño y Desarrollo de Software") {
        cDDS += 1;
      } else if (item.Carrera == "Gestión de Seguridad y Salud en el Trabajo") {
        cGSST += 1;
      } else if (item.Carrera == "Mecánica Automotriz") {
        cMA += 1;
      } else if (item.Carrera == "Mantenimiento de Equipo Pesado") {
        cMEP += 1;
      }
    });

    var porcen10 = 0.0;
    var porcen20 = 0.0;
    var porcen30 = 0.0;
    var porcen40 = 0.0;
    var porcen50 = 0.0;
    var porcen60 = 0.0;
    var porcen70 = 0.0;
    var porcen80 = 0.0;
    var porcen90 = 0.0;
    var porcen100 = 0.0;
    

    // Agrupar los datos por ciudad y calcular la cantida
    data.forEach((item) => {
      if (item.Proceso <= 0.1) {
        porcen10 += 1;
      } else if (item.Proceso >=0.1 && item.Proceso<=0.2) {
        porcen20 += 1;
      } else if (item.Proceso  >=0.2 && item.Proceso <=0.3) {
        porcen30 += 1;
      }else if (item.Proceso >=0.3 && item.Proceso<=0.4) {
        porcen40 += 1;
      } else if (item.Proceso  >=0.4 && item.Proceso <=0.5) {
        porcen50 += 1;
      }else if (item.Proceso >=0.5 && item.Proceso<=0.6) {
        porcen60 += 1;
      } else if (item.Proceso  >=0.6 && item.Proceso <=0.7) {
        porcen70 += 1;
      }else if (item.Proceso >=0.7 && item.Proceso<=0.8) {
        porcen80 += 1;
      } else if (item.Proceso  >=0.8 && item.Proceso <=0.9) {
        porcen90 += 1;
      }else if (item.Proceso  >=0.9 && item.Proceso <=1.0) {
        porcen100 += 1;
      }

    });



    document.getElementById("Total").innerHTML=  countAre + countLim + countTruj;
    
    var ctx = document.getElementById("myChart").getContext("2d");
    var chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Arequipa", "Lima", "Trujillo"],
        datasets: [
          {
            label: "cantidad total de datos",
            data: [countAre, countLim, countTruj],
            backgroundColor: [
              "rgba(255,99,132)",
              "rgba(175,99,132)",
              "rgba(20,99,132)",
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(175, 159, 64)',
              'rgb(20, 99, 86)',
            ],
            borderWith: 1,
          },
        ],
      },
      options: {
        plugins: {
          subtitle: {
              display: true,
              position: 'bottom',
              text: 'Sedes',
              padding: {
                top: 10,
                bottom: 30
              }
          }
      },
        escales: {
          yAxes: [
            {
              ticks: {
                begingAtZero: true,
              },
            },
          ],
        }, 
      },
    });
    var ctx2 = document.getElementById("myChart2").getContext("2d");
    var chart2 = new Chart(ctx2, {
      type: "doughnut",
      data: {
        labels: [
          "Electrónica y Automatización Industrial",
          "Operaciones Mineras",
          "Operación de Plantas de Procesamiento de Minerales",
          "Administración de Redes y Comunicaciones",
          "Gestión y Mantenimiento de Maquinaria Pesada",
          "Gestión y Mantenimiento de Maquinaria Industrial",
          "Electricidad Industrial con mención en Sistemas Eléctricos de Potencia",
          "Diseño y Desarrollo de Software",
          "Gestión de Seguridad y Salud en el Trabajo",
          "Mecánica Automotriz",
          "Mantenimiento de Equipo Pesado",
        ],
        datasets: [
          {
            label: "cantidad total de datos",
            data: [
              cEAI,
              cOM,
              cOPPM,
              cARC,
              cGMMP,
              cGMMI,
              cEISEP,
              cDDS,
              cGSST,
              cMA,
              cMEP,
            ],
            backgroundColor: [
              "rgba(255,99,132)",
              "rgba(252, 186, 3)",
              "rgba(56, 212, 32)",
              "rgba(22, 186, 153)",
              "rgba(18, 69, 179)",
              "rgba(81, 13, 209)",
              "rgba(176, 16, 194)",
              "rgba(219, 15, 145)",
              "rgba(219, 11, 60)",
              "rgba(232, 123, 14)",
              "rgba(0,0,255)",
            ],
            hoverOffset: 20,
          },
        ],
      },
      option: {
        escales: {
          yAxes: [
            {
              ticks: {
                begingAtZero: true,
              },
            },
          ],
        },
      },
    });
    var ctx3 = document.getElementById("myChart3").getContext("2d");
    var chart = new Chart(ctx3, {
      type: "line",
      data: {
        labels: ["0-10", "10-20", "20-30","30-40","40-50","50-60","60-70","70-80","80-90","90-100"],
        datasets: [
          {
            label: "cantidad total de datos",
            data: [porcen10,porcen20,porcen30,porcen40,porcen50,porcen60,porcen70,porcen80,porcen90, porcen100],
            fill: false,
            borderColor:'rgb(75, 192, 192)',
            tension: 0.1
          },
        ],
      },
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
        escales: {
          yAxes: [
            {
              ticks: {
                begingAtZero: true,
              },
            },
          ],
          // y: {
          //   min: 0,
          //   max: 100
          // }
        },
      },
    });
  });
