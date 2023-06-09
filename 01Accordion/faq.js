const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function showFaq() {
  faqData.forEach((faq) => {
    createFaq(faq.question, faq.answer);
  });
}

showFaq();

function createFaq(ques, ans) {
  const faq = document.createElement("div");
  faq.classList.add("faq");
  accordianBody.appendChild(faq);

  const faq_header = document.createElement("div");
  faq_header.classList.add("faq_header");
  faq.appendChild(faq_header);

  const h3 = document.createElement("h3");
  h3.innerText = ques;
  faq_header.appendChild(h3);

  const button = document.createElement("button");
  button.innerText = "+";
  button.classList.add("show_btn");
  faq_header.appendChild(button);

  const p = document.createElement("p");
  p.innerText = ans;
  p.classList.add("hidden");
  faq.appendChild(p);
}

function btnStatusUpdate(event) {
  const button = event.target;
  // console.log(event.target)
  const p = button.parentElement.nextElementSibling;

  if (p.classList.contains("hidden")) {
    p.classList.remove("hidden");
    button.innerText = "-";
  } else {
    p.classList.add("hidden");
    button.innerText = "+";
  }
}

const showButtons = document.querySelectorAll(".show_btn");
showButtons.forEach((button) => {
  button.addEventListener("click", btnStatusUpdate);
});




