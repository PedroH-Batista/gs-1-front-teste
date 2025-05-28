// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Animação ao aparecer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("ativo");
    }
  });
});

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Gráfico de enchentes
const ctx = document.getElementById("enchenteChart").getContext("2d");

const enchenteChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Casos de enchentes",
        data: [30, 45, 60, 80, 95, 120],
        backgroundColor: "#051357",
        borderRadius: 6,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "white",
        },
        grid: {
          color: "#333",
        },
      },
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "#333",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
  },
});
