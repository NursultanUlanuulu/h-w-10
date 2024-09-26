// const btn = document.getElementById('btn')
// const content = document.getElementById('content')

// btn.onclick = () => {
// 	const newContent = document.createElement('p')
// 	const del = document.createElement('button')
// 	newContent.textContent = 'Новый текст'
// 	del.textContent = 'удалить'

// 	newContent.appendChild(del)

// 	content.appendChild(newContent)

// 	del.onclick = () => {
// 		content.removeChild(newContent)
// 		// content.remove(newContent)
// 	}
// }

// const zero = document.querySelector('#count')
// const btns = document.querySelectorAll('button')
// console.log(btns)

// let counter = 0

// btns[1].onclick = () => {
// 	counter++
// 	zero.innerText = counter
// 	// zero.style.color = 'red'
// }
// btns[2].onclick = () => {
// 	if (counter > 0) {
// 		counter--
// 	}
// 	zero.innerText = counter
// }
// btns[3].onclick = () => {
// 	zero.innerText = counter = 0
// }

const h1 = document.querySelector('h1')
const input = document.querySelector('input')
const butt = document.querySelector('button')

h1.innerHTML = '<i>Nurs</i>'

butt.onclick = () => {
	console.log(input.value)
	h1.innerHTML = input.value
}
