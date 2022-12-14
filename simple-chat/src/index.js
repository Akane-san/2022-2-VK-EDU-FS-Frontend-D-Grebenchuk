let input = document.querySelector('input')
input.focus()

// находим кнопки
let clearButton = document.querySelector('.clear')

// находим контейнер
let box = document.getElementById('outgoing-chats-elem')

var options = {
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  month: 'long',
  day: 'numeric'
};

if (localStorage.templates) {
  // формируем переписку
  var t = JSON.parse(localStorage.templates)
  t
      //.split('</p>,|</span>,')
      .map(p => box.insertAdjacentHTML('beforeend', p))
}

window.addEventListener('keydown', e => {
  if (e.keyCode == 13)
  {
  // получаем текст сообщения
  let text = document.querySelector('input').value
  // формируем шаблон
  let template = `<p>${text}</p><span class="time">${new Date().toLocaleTimeString('ru-RU', options)}</span>`
  // добавляем шаблон в контейнер
  box.insertAdjacentHTML('beforeend', template)
  // сбрасываем значение инпута
  input.value = ''
  // записываем сообщение в хранилище
  localStorage.message = template

  var arr2 = JSON.parse(localStorage.getItem('templates')) || []
  arr2.push(template)
  localStorage.setItem('templates', JSON.stringify(arr2))
  }
})

// обрабатываем событие "storage"
window.addEventListener('storage', event => {
    // если ключом события является "messages"
    // игнорируем его
    if (event.key == 'messages') return
    // если новое значение события равняется null
    // нажимаем кнопку для очистки хранилища
    // иначе добавляем сообщение в контейнер
    event.newValue == null ? clearButton.click() : box.insertAdjacentHTML('afterbegin', event.newValue)
})

// очищаем хранилище и контейнер
clearButton.addEventListener('click', () => {
  localStorage.clear()
  document.querySelectorAll('p').forEach(p => box.removeChild(p))
  input.focus()
})