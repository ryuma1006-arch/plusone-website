const methodInputs = document.querySelectorAll('input[name="reply_method"]');
const contactInputs = document.querySelectorAll('.contact-input');
const fileInput = document.querySelector('#photos');
const fileStatus = document.querySelector('#file-status');
const form = document.querySelector('#estimate-form');

function updateContactField() {
  const selected = document.querySelector('input[name="reply_method"]:checked')?.value;

  contactInputs.forEach((field) => {
    const active = field.dataset.method === selected;
    const input = field.querySelector('input');

    field.hidden = !active;
    input.required = active;
    input.disabled = !active;
  });
}

methodInputs.forEach((input) => input.addEventListener('change', updateContactField));

fileInput?.addEventListener('change', () => {
  const count = fileInput.files.length;
  fileStatus.textContent = count ? `${count}枚の写真を選択中` : '複数枚選択できます';
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
});

updateContactField();
