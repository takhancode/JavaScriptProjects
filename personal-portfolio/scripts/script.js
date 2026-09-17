const toggle = document.getElementById("menu-toggle");
if (toggle && toggle.checked) {
  document.body.classList.add("noscroll");
} else {
  document.body.classList.remove("noscroll");
}

const words = ["Developer", "Engineer", "Learner", "Student"];

const typingText = document.getElementById("typing-span");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () => {
  const currentWord = words[wordIndex];
  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, nextWordDelay);
    } else {
      setTimeout(type, typingDelay);
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, erasingDelay);
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (words?.length) {
    type();
  }
});

const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

const serviceList = [
  {
    id: 1,
    icon: "ph-code",
    text: "Web Development",
    para: "I build responsive, user-friendly websites using modern web technologies, with a focus on performance and clean design.",
  },
  {
    id: 2,
    icon: "ph-paint-brush",
    text: "UI/UX Design",
    para: "I design clean, intuitive, and engaging user interfaces that provide a smooth and enjoyable experience across different devices.",
  },
  {
    id: 3,
    icon: "ph-trend-up",
    text: "SEO Optimization",
    para: "I improve website visibility and search rankings through optimized structure, relevant keywords, and performance best practices.",
  },
  {
    id: 4,
    icon: "ph-palette",
    text: "Graphic Design",
    para: "I create clean and engaging visual designs that help businesses and projects communicate their ideas effectively.",
  },
  {
    id: 5,
    icon: "ph-chalkboard-teacher",
    text: "Mentorship & Training",
    para: "I provide practical guidance to beginners and aspiring developers through coding support, project guidance, and career advice.",
  },
  {
    id: 6,
    icon: "ph-device-mobile",
    text: "Mobile App Development",
    para: "I build modern and user-friendly mobile applications with a focus on responsive interfaces, smooth performance, and great user experience.",
  },
];

const renderServices = () => {
  const services = document.getElementById("service-list");
  if (!services) return;

  const innercontent = serviceList
    .map((l) => {
      return `
        <div class="box" key=${l?.id}>
          <div class="head-icons">
            <i class="ph ${l?.icon}"></i>
            <span>
              <i class="ph ph-arrow-down-right"></i>
            </span>
          </div>
          <h3>${l?.text}</h3>
          <span class="spacer"></span>
          <p>
            ${l?.para}
          </p>
        </div>
      `;
    })
    .join("");

  services.innerHTML = innercontent;
};

// Render once on load, in case "services" is the active tab on page load
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
});

navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    navlinks.forEach((l) => {
      if (l === link) {
        l.classList.add("active");
      } else {
        l.classList.remove("active");
      }
    });

    const tabName = link.dataset.tab;

    tabs.forEach((tab) => {
      if (tab.id === tabName) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });

    if (tabName === "services") {
      renderServices();
    }
    toggle.checked = false;
  });
});

// EmailJS initialize
emailjs.init({
  publicKey: "bi_qMiWwi_8TkW3JM",
});

// Contact form
const form = document.querySelector("#contact-form");
const sendBtn = document.querySelector("#send-msg");

const originalText = sendBtn.innerHTML;

const originalStyle = {
  backgroundColor: sendBtn.style.backgroundColor,
  color: sendBtn.style.color,
  border: sendBtn.style.border,
  boxShadow: sendBtn.style.boxShadow,
};

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const message = document.querySelector("#message").value.trim();

  // Validation
  if (!name || !email || !phone || !message) {
    Toastify({
      text: "All Fields Are Mandatory",
      duration: 3000,
      gravity: "top",
      position: "center",
      close: true,
      stopOnFocus: true,
      style: {
        background: "rgb(206, 16, 16)",
      },
    }).showToast();

    return;
  }

  // Sending state
  sendBtn.innerHTML = "Sending...";
  sendBtn.style.backgroundColor = "gray";
  sendBtn.style.color = "white";
  sendBtn.style.border = "none";
  sendBtn.style.boxShadow = "none";
  sendBtn.disabled = true;

  // Send email
  emailjs
    .sendForm("service_87l2o4g", "template_85m7s8c", this)
    .then(() => {
      Toastify({
        text: "Message Sent Successfully! ✅",
        duration: 3000,
        gravity: "top",
        position: "center",
        close: true,
        stopOnFocus: true,
        style: {
          background: "rgb(9, 222, 38)",
        },
      }).showToast();

      form.reset();

      setTimeout(() => {
        sendBtn.innerHTML = originalText;
        Object.assign(sendBtn.style, originalStyle);
        sendBtn.disabled = false;
      }, 3000);
    })
    .catch((error) => {
      console.log("EmailJS Error:", error);

      Toastify({
        text: "Message Failed ❌",
        duration: 3000,
        gravity: "top",
        position: "center",
        close: true,
        stopOnFocus: true,
        style: {
          background: "rgb(206, 16, 16)",
        },
      }).showToast();

      sendBtn.innerHTML = originalText;
      Object.assign(sendBtn.style, originalStyle);
      sendBtn.disabled = false;
    });
});
