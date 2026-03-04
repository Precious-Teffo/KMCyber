// ── KMCyber — Main JavaScript ──

// ── Module tabs ──
function switchTab(index) {
  document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.toggle('active', i === index));
  document.querySelectorAll('.module-panel').forEach((p, i) => p.classList.toggle('active', i === index));
}

// ── Accordion lessons ──
function toggleLesson(el) {
  const wasOpen = el.classList.contains('open');
  // Close all open lessons in the same list
  el.closest('.lessons').querySelectorAll('.lesson.open').forEach(l => l.classList.remove('open'));
  if (!wasOpen) el.classList.add('open');
}

// ── Quiz answers ──
const feedback = {
  correct: "✅ Correct! Great instinct — you're already thinking like a security-conscious person.",
  wrong: "❌ Not quite. The correct answer shows how scammers exploit trust and urgency. Review the lesson above."
};

function answer(btn, result, qid) {
  const container = document.getElementById(qid);
  if (container.dataset.answered) return;
  container.dataset.answered = '1';
  container.querySelectorAll('.quiz-opt').forEach(b => {
    b.style.pointerEvents = 'none';
    b.style.cursor = 'default';
  });
  btn.classList.add(result);
  const num = qid.replace('q', '');
  const fb = document.getElementById('fb' + num);
  fb.textContent = result === 'correct' ? feedback.correct : feedback.wrong;
  fb.className = 'quiz-feedback show ' + (result === 'correct' ? 'good' : 'bad');
}

// ── Interactive checklist ──
function toggleCheck(el) {
  // el could be the checkbox square OR the text span — handle both
  let checkEl, textEl;
  if (el.classList.contains('cl-check')) {
    checkEl = el;
    textEl = el.nextElementSibling;
  } else {
    checkEl = el.previousElementSibling;
    textEl = el;
  }
  checkEl.classList.toggle('checked');
  if (textEl) textEl.classList.toggle('checked', checkEl.classList.contains('checked'));
}

// ── Sticky nav shrink on scroll ──
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 40) {
    nav.style.padding = '12px 48px';
    nav.style.boxShadow = '0 4px 24px rgba(21,101,192,.12)';
  } else {
    nav.style.padding = '18px 48px';
    nav.style.boxShadow = '0 2px 20px rgba(21,101,192,.08)';
  }
});

// ── Contact Form (Formspree) ──
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const btn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnLoader = document.getElementById('btnLoader');
    const successEl = document.getElementById('formSuccess');
    const errorEl = document.getElementById('formError');

    // Loading state
    btn.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline';
    errorEl.style.display = 'none';

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        // Show success, hide form
        contactForm.style.display = 'none';
        successEl.style.display = 'block';
      } else {
        throw new Error('Server error');
      }
    } catch (err) {
      // Show error message
      errorEl.style.display = 'block';
      btn.disabled = false;
      btnText.style.display = 'inline';
      btnLoader.style.display = 'none';
    }
  });
}
