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

let slideIndex = 0;

function mostrarSlides() {
  let slides = document.querySelectorAll(".slide");

  slides.forEach((slide) => (slide.style.display = "none"));

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slide");
  if (slides.length > 0) {
    slides.forEach((slide) => (slide.style.display = "none"));
    slides[0].style.display = "block";
  }
});

function mudarSlide(n) {
  slideIndex += n;
  let slides = document.querySelectorAll(".slide");

  if (slideIndex > slides.length) slideIndex = 1;
  if (slideIndex < 1) slideIndex = slides.length;

  slides.forEach((slide) => (slide.style.display = "none"));
  slides[slideIndex - 1].style.display = "block";
}

mostrarSlides();
