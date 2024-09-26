const faqData = {
  'before-party': [
      { question: "What is Blendy Before Party?", answer: "Blendy Before Party is a liquid shot supplement designed to help the body prepare for social events and parties. Its formula contains B vitamins, natural extracts, and fruit juices to support well-being before engaging in intense activities." },
      { question: "When should I take Blendy Before Party?", answer: "It is recommended to take Blendy Before Party about 30 minutes before attending parties or events where alcohol consumption or physical effort may be higher." },
      { question: "What are the main ingredients in Blendy Before Party?", answer: "The main ingredients include vitamin B6, thiamine, riboflavin, niacin, folic acid, turmeric extract, and glucose, along with apple, orange, pineapple, and passion fruit juices." },
      { question: "Can I take Blendy Before Party daily?", answer: "Yes, Blendy Before Party can be consumed daily, but it is advisable to consult a healthcare professional before adopting continuous use." },
      { question: "Does Blendy Before Party prevent hangovers?", answer: "While Blendy Before Party contains ingredients that help maintain energy levels and well-being, it does not prevent hangovers. For that purpose, we recommend Blendy After Party." },
      { question: "Can I take Blendy Before Party if I am pregnant or breastfeeding?", answer: "Blendy Before Party contains several vitamins and natural extracts, but if you are pregnant or breastfeeding, it is important to consult your doctor before taking this product." }
  ],
  'after-party': [
      { question: "What is Blendy After Party?", answer: "Blendy After Party is a liquid supplement designed to be consumed after parties and events, helping the body recover. It combines ingredients like potassium, activated charcoal, and B vitamins to assist recovery." },
      { question: "When should I take Blendy After Party?", answer: "It is recommended to take Blendy After Party immediately after events where alcohol consumption or physical exertion occurred, to aid in recovery." },
      { question: "What are the benefits of Blendy After Party?", answer: "Blendy After Party contains ingredients like activated charcoal, ginseng, and magnesium, which help detoxify the body, restore electrolyte levels, and promote a sense of well-being." },
      { question: "Does Blendy After Party cure hangovers?", answer: "Blendy After Party is designed to support recovery after parties, but it is not a hangover cure. Its ingredients may help the body recover more quickly." },
      { question: "Can I take Blendy After Party if I don't drink alcohol?", answer: "Yes! Blendy After Party can also be useful for physical recovery after exertion, even if no alcohol was consumed." },
      { question: "Can I take Blendy After Party if I am pregnant or breastfeeding?", answer: "Blendy After Party contains activated charcoal, herbal extracts, and other ingredients that may not be recommended during pregnancy or breastfeeding. Please consult your healthcare provider before using this product." }
  ],
  'focus': [
      { question: "What is Blendy Focus?", answer: "Blendy Focus is a liquid shot supplement that combines B vitamins, herbal extracts, and caffeine to help improve focus, concentration, and mental performance." },
      { question: "When should I take Blendy Focus?", answer: "Blendy Focus should be taken whenever you need to enhance your concentration, such as before an important meeting, studying, or other mentally intense activities." },
      { question: "What are the key ingredients in Blendy Focus?", answer: "The key ingredients include thiamine, riboflavin, niacin, L-tyrosine, ginseng, L-theanine, green coffee extract, ginkgo extract, and apple juice." },
      { question: "Does Blendy Focus contain caffeine?", answer: "Yes, Blendy Focus contains caffeine from green coffee extract, which helps improve alertness and focus." },
      { question: "Can I take Blendy Focus at night?", answer: "It is recommended to consume Blendy Focus during the day, as the caffeine content may interfere with sleep if taken at night." },
      { question: "Can I take Blendy Focus if I am pregnant or breastfeeding?", answer: "Blendy Focus contains caffeine and herbal extracts that may not be suitable during pregnancy or breastfeeding. It's advisable to consult your doctor before using this supplement." }
  ],
  'collagen': [
      { question: "What is Blendy Collagen?", answer: "Blendy Collagen is a liquid shot containing hydrolyzed fish collagen and vitamin C, designed to support skin, hair, and nail health." },
      { question: "When should I take Blendy Collagen?", answer: "You can take Blendy Collagen daily, at any time of day, to promote skin and joint health." },
      { question: "What are the main ingredients in Blendy Collagen?", answer: "Blendy Collagen contains hydrolyzed fish collagen, acerola extract (rich in vitamin C), and natural juices from apple and cranberry." },
      { question: "Is Blendy Collagen suitable for vegetarian diets?", answer: "No, Blendy Collagen contains hydrolyzed fish collagen, so it is not suitable for vegetarians or vegans." },
      { question: "How long does it take to see results with Blendy Collagen?", answer: "Results may vary, but many people notice improvements in their skin, hair, and nails after 4 to 8 weeks of continuous use." },
      { question: "Can I take Blendy Collagen if I am pregnant or breastfeeding?", answer: "Blendy Collagen contains hydrolyzed fish collagen and vitamin C, which are generally considered safe. However, if you are pregnant or breastfeeding, it's best to seek medical advice before taking it." }
  ],
  'power': [
      { question: "What is Blendy Power?", answer: "Blendy Power is a liquid shot supplement designed to boost energy levels and physical performance, thanks to a combination of ingredients like L-tyrosine, L-carnitine, and guarana extract." },
      { question: "When should I take Blendy Power?", answer: "Take Blendy Power before physical activities, workouts, or whenever you need an extra energy boost." },
      { question: "What are the main ingredients in Blendy Power?", answer: "The main ingredients include L-tyrosine, L-carnitine, guarana extract (containing caffeine), green coffee caffeine, ginseng, and natural juices from apple, orange, and passion fruit." },
      { question: "Is Blendy Power suitable for athletes?", answer: "Yes, Blendy Power is an excellent option for athletes and active individuals who need an energy boost before training or competitions." },
      { question: "Can I combine Blendy Power with other Blendy products?", answer: "Yes, you can combine Blendy Power with other Blendy products, but it's important to respect the recommended daily doses and consult a doctor if needed." },
      { question: "Can I take Blendy Power if I am pregnant or breastfeeding?", answer: "Blendy Power contains caffeine and other stimulating ingredients that may not be suitable during pregnancy or breastfeeding. Please consult your healthcare provider before taking this product." }
  ]
};

const buttons = document.querySelectorAll('.faq-button');
const faqContainer = document.getElementById('faqContainer');
let currentColor = '#3498db';  // Initial color

buttons.forEach(button => {
  button.addEventListener('click', () => {
      buttons.forEach(btn => {
          btn.classList.remove('active');
          btn.style.border = 'none';
          btn.style.backgroundColor = 'transparent';
      });
      button.classList.add('active');
      currentColor = getRandomColor();
      button.style.backgroundColor = currentColor;
      button.style.border = `2px solid ${currentColor}`;
      const category = button.getAttribute('data-category');
      updateFAQContent(category);
  });
});

function updateFAQContent(category) {
  const faqItems = faqData[category];
  let html = '';
  faqItems.forEach((item, index) => {
      const questionColor = currentColor;
      const answerColor = getLighterColor(questionColor);
      html += `
          <div class="faq-item">
              <div class="faq-question" style="background-color: ${questionColor};" onclick="toggleAnswer(${index})">${item.question}</div>
              <div class="faq-answer" style="background-color: ${answerColor};">${item.answer}</div>
          </div>
      `;
  });
  faqContainer.innerHTML = html;
}

function getRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 50%)`;
}

function getLighterColor(color) {
  const hsl = color.match(/\d+/g);
  return `hsl(${hsl[0]}, ${hsl[1]}%, 90%)`;
}

function toggleAnswer(index) {
  const answers = document.querySelectorAll('.faq-answer');
  const questions = document.querySelectorAll('.faq-question');
  answers[index].classList.toggle('show');
  questions[index].classList.toggle('active');
}

// Initialize with the first category
buttons[0].click();

// Set initial state for other buttons
buttons.forEach((btn, index) => {
  if (index !== 0) {
      btn.style.border = 'none';
      btn.style.backgroundColor = 'transparent';
  }
});