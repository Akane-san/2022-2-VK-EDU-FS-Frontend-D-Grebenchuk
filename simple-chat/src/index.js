let input = document.querySelector('input')
input.focus()

// находим кнопки
let sendButton = document.querySelector('.send')


let saveButton = document.querySelector('.save')
let clearButton = document.querySelector('.clear')

// находим контейнер
let box = document.getElementById('outgoing-chats-elem')

// если в хранилище имеется ключ "messages"
if (localStorage.messages) {
    // формируем переписку
    localStorage.messages
        .split('</p>,')
        .map(p => box.insertAdjacentHTML('beforeend', p))
}

// обрабатываем отправку сообщений
sendButton.addEventListener('click', () => {
    // получаем текст сообщения
    let text = document.querySelector('input').value
    // формируем шаблон
    let template = `<div id="outgoing-chats-elem" class="outgoing-chats"><div class="outgoing-chats-msg"><p>${text}</p><span class="time">${new Date().toLocaleTimeString()}</span></div></div>`
    //let template = `<p><time>${new Date().toLocaleTimeString()}</time> ${text}</p>`
    // добавляем шаблон в контейнер
    box.insertAdjacentHTML('beforeend', template)
    // сбрасываем значение инпута
    input.value = ''
    // записываем сообщение в хранилище
    localStorage.message = template
})

// добавляем задачу в список при нажатии "Enter"
window.addEventListener('keydown', e => {
    if (e.keyCode == 13) sendButton.click()
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




// сохраняем переписку
saveButton.addEventListener('click', () => {
  // массив сообщений
  let messages = []
  // заполняем массив
  document.querySelectorAll('p').forEach(p => messages.push(p.outerHTML))
  // записываем данные в хранилище
  localStorage.messages = messages
})

// очищаем хранилище и контейнер
clearButton.addEventListener('click', () => {
  localStorage.clear()
  document.querySelectorAll('p').forEach(p => box.removeChild(p))
  input.focus()
})