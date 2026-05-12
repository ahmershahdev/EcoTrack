const words = ["Hyderabad", "Pakistan", "Our City"];
let wi = 0,
  ci = 0,
  deleting = false;
const typedEl = document.querySelector(".typed-text");

function type() {
  const word = words[wi];
  typedEl.textContent = deleting
    ? word.substring(0, ci--)
    : word.substring(0, ci++);
  let delay = deleting ? 60 : 100;
  if (!deleting && ci > word.length) {
    delay = 1800;
    deleting = true;
  } else if (deleting && ci < 0) {
    deleting = false;
    wi = (wi + 1) % words.length;
    ci = 0;
    delay = 400;
  }
  setTimeout(type, delay);
}
type();

$(window).scroll(function () {
  if ($(this).scrollTop() > 40) $("#mainNav").addClass("scrolled");
  else $("#mainNav").removeClass("scrolled");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const canTilt =
  window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (canTilt) {
  const tiltCards = document.querySelectorAll(".tilt-card");
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;
      const tiltX = clamp(((y - midY) / midY) * -6, -8, 8);
      const tiltY = clamp(((x - midX) / midX) * 6, -8, 8);

      card.classList.add("tilting");
      card.style.transform =
        "perspective(900px) rotateX(" +
        tiltX +
        "deg) rotateY(" +
        tiltY +
        "deg)";
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("tilting");
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    });
  });
}

Chart.defaults.font.family = "Inter";
Chart.defaults.color = "#888";
const G = "#2e7d32",
  GL = "#4caf50",
  GM = "#81c784",
  GP = "#c8e6c9";

new Chart(document.getElementById("chart1"), {
  type: "bar",
  data: {
    labels: ["City Taluka", "Latifabad"],
    datasets: [
      {
        label: "Generated (tons/day)",
        data: [660, 300],
        backgroundColor: "rgba(229,57,53,0.8)",
        borderRadius: 6,
      },
      {
        label: "Lifting Capacity",
        data: [400, 200],
        backgroundColor: GL,
        borderRadius: 6,
      },
    ],
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true, grid: { color: "rgba(0,0,0,0.05)" } } },
    plugins: {
      legend: {
        position: "bottom",
        labels: { boxWidth: 12, font: { size: 11 } },
      },
    },
  },
});

new Chart(document.getElementById("chart2"), {
  type: "doughnut",
  data: {
    labels: ["Collected (65%)", "Open Dumped / Burned (35%)"],
    datasets: [
      {
        data: [65, 35],
        backgroundColor: [GL, "#e53935"],
        borderWidth: 0,
        hoverOffset: 8,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: { boxWidth: 12, font: { size: 11 } },
      },
    },
    cutout: "65%",
  },
});

new Chart(document.getElementById("chart3"), {
  type: "line",
  data: {
    labels: ["2015", "2021", "2025"],
    datasets: [
      {
        label: "Daily Waste (tons)",
        data: [960, 1100, 1750],
        borderColor: GL,
        backgroundColor: "rgba(76,175,80,0.08)",
        tension: 0.45,
        fill: true,
        pointRadius: 7,
        pointBackgroundColor: G,
        pointBorderColor: "white",
        pointBorderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    scales: { y: { min: 800, grid: { color: "rgba(0,0,0,0.05)" } } },
    plugins: { legend: { display: false } },
  },
});

new Chart(document.getElementById("chart4"), {
  type: "bar",
  data: {
    labels: [
      "Respiratory symptoms\n(workers)",
      "Persistent cough\n(workers)",
      "Diarrhoea in 2 wks\n(residents)",
    ],
    datasets: [
      {
        label: "%",
        data: [58.5, 46.8, 36.8],
        backgroundColor: [
          "rgba(229,57,53,0.8)",
          "rgba(239,154,154,0.8)",
          "rgba(255,205,210,0.9)",
        ],
        borderRadius: 6,
      },
    ],
  },
  options: {
    indexAxis: "y",
    responsive: true,
    scales: {
      x: { max: 75, beginAtZero: true, grid: { color: "rgba(0,0,0,0.05)" } },
    },
    plugins: { legend: { display: false } },
  },
});

new Chart(document.getElementById("chart5"), {
  type: "bar",
  data: {
    labels: ["HMC Hyderabad"],
    datasets: [
      {
        label: "Required",
        data: [2000],
        backgroundColor: "rgba(229,57,53,0.8)",
        borderRadius: 6,
      },
      {
        label: "Available",
        data: [1440],
        backgroundColor: GL,
        borderRadius: 6,
      },
    ],
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true, grid: { color: "rgba(0,0,0,0.05)" } } },
    plugins: {
      legend: {
        position: "bottom",
        labels: { boxWidth: 12, font: { size: 11 } },
      },
    },
  },
});

new Chart(document.getElementById("chart6"), {
  type: "pie",
  data: {
    labels: ["Karachi (3)", "Lahore (1)", "Rest of Pakistan (0)"],
    datasets: [
      {
        data: [3, 1, 30],
        backgroundColor: [GL, G, "#e0e0e0"],
        borderWidth: 0,
        hoverOffset: 8,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: { boxWidth: 12, font: { size: 11 } },
      },
    },
  },
});

const scrollTop = document.getElementById("scrollTop");
const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

scrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  const scrollPercent =
    window.scrollY /
    (document.documentElement.scrollHeight - window.innerHeight);
  const offset = circumference - scrollPercent * circumference;

  circle.style.strokeDashoffset = offset;

  if (window.scrollY > 300) {
    scrollTop.classList.add("active");
  } else {
    scrollTop.classList.remove("active");
  }
});
