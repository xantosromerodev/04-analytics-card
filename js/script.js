// grafico javascript
const ctx = document.getElementById("donutChart").getContext("2d");
const myDonutChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: ["Channel pages", "Direct or unknow", "Search", "External"],
        datasets: [
            {
                label: "Colores",
                data: [130, 80, 150, 50],
                backgroundColor: ["#6792FF", "#4473EA", "#1A52E1", "#96B3FF"],
                borderRadius: 5,
                borderColor: "white", // Color del borde
                borderWidth: 2, // Ancho del borde
                hoverOffset: 3 // Separación al pasar el mouse
            }
        ]
    },
    options: {
        cutout: "80%", // Para hacer el gráfico tipo donut
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        // return tooltipItem.label + ": " + tooltipItem.raw;
                        const label = tooltipItem.label;
                        const value = tooltipItem.raw;
                        return `${label}: ${value} unidades`;
                    }
                }
            }
        }
    }
});