let tg = window.Telegram.WebApp;

tg.expand()

let mapWidget = document.getElementById('map')
let shopChoice = document.getElementById('selectshop')


tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let timeChoise = document.getElementById('getorder-time')
timeChoise.min = new Date().toISOString().slice(0, -8)

let shops = {
	'АМИ': [[55.82862, 49.13423], 'ул. Ф. Амирхана, 10', 'Казань, Ново-Савиновский район'],
	'БАУ': [[55.7926, 49.110168], 'ул. Баумана, 38/17', 'Казань, Вахитовский район'],
	'БЕЛ': [[55.7926, 49.110168], 'адрес', 'район'],
	'БИГ': [[55.7926, 49.110168], 'адрес', 'район'],
	'ВИШ': [[55.7926, 49.110168], 'адрес', 'район'],
	'ВОС': [[55.7926, 49.110168], 'адрес', 'район'],
	'ГАГ': [[55.7926, 49.110168], 'адрес', 'район'],
	'ГВА': [[55.7926, 49.110168], 'адрес', 'район'],
	'ГОР': [[55.7926, 49.110168], 'адрес', 'район'],
	'ГУБ': [[55.7926, 49.110168], 'адрес', 'район'],
	'Д40': [[55.7926, 49.110168], 'адрес', 'район'],
	'ДЕК': [[55.7926, 49.110168], 'адрес', 'район'],
	'ДОС': [[55.7926, 49.110168], 'адрес', 'район'],
	'ЕРШ': [[55.7926, 49.110168], 'адрес', 'район'],
	'ЗОР': [[55.7926, 49.110168], 'адрес', 'район'],
	'КЛН': [[55.7926, 49.110168], 'адрес', 'район'],
	'КОС': [[55.7926, 49.110168], 'адрес', 'район'],
	'ЛЕН': [[55.7926, 49.110168], 'адрес', 'район'],
	'ЛОМ': [[55.7926, 49.110168], 'адрес', 'район'],
	'ЛУК': [[55.7926, 49.110168], 'адрес', 'район'],
	'МАК': [[55.7926, 49.110168], 'адрес', 'район'],
	'МРС': [[55.7926, 49.110168], 'адрес', 'район'],
	'МСК': [[55.7926, 49.110168], 'адрес', 'район'],
	'ПАВ': [[55.7926, 49.110168], 'адрес', 'район'],
	'ПАР': [[55.7926, 49.110168], 'адрес', 'район'],
	'ПИО': [[55.7926, 49.110168], 'адрес', 'район'],
	'ПОБ': [[55.7926, 49.110168], 'адрес', 'район'],
	'ПШК': [[55.786776, 49.121034], 'ул. Пушкина, 5', 'Казань, Вахитовский район'],
	'САВ': [[55.826703, 49.147909], 'просп. Ямашева, 93, корп. 1', 'Казань, Ново-Савиновский район'],
	'САХ': [[55.7926, 49.110168], 'адрес', 'район'],
	'СИБ': [[55.7926, 49.110168], 'адрес', 'район'],
	'СЛВ': [[55.854902, 48.899283], 'ул. Наиля Юсупова, 9','Казань, Кировский район'],
	'ТАТ': [[55.7926, 49.110168], 'адрес', 'район'],
	'УНИ': [[55.7926, 49.110168], 'адрес', 'район'],
	'Ф106': [[55.7926, 49.110168], 'адрес', 'район'],
	'ФУЧ': [[55.7926, 49.110168], 'адрес', 'район'],
	'Ч15': [[55.7926, 49.110168], 'адрес', 'район'],
	'ЧЕХ': [[55.7926, 49.110168], 'адрес', 'район'],
	'ЧИС': [[55.7926, 49.110168], 'адрес', 'район'],
	'ЯПЕ': [[55.7926, 49.110168], 'адрес', 'район']
}

let area = []
let optgr =  []
let shopList = []
for (key in shops){
	shopInfo = shops[key]

	let findNumber = area.indexOf(shopInfo[2])
	if (findNumber == -1) {
		groupName = shopInfo[2]
		groupName = document.createElement("optgroup")
		groupName.label = shopInfo[2]
		area.push(shopInfo[2])
		optgr.push(groupName)
	} else {
		groupName = optgr[findNumber]
	}
	
	shopName = key
	shopList.push(shopName)
	key = document.createElement("option")
	key.value = shopName
	key.text = shopInfo[1]
	groupName.appendChild(key)
	shopChoice.appendChild(groupName)
}	



DG.then(function () {
   let map, myLocation
   map = DG.map('map', {
   center: [55.83, 49.05],
   zoom: 10,
   minZoom: 10,
   fullscreenControl: false
   })

	shopChoice.onchange = function changeShop () {
		map.setView(center=shops[shopChoice.value][0], zoom=16)
	tg.MainButton.show()
}




	DG.marker(shops['ПШК'][0])
		.on('click', function() {
			shopChoice.value = 'ПШК'
		})
		.addTo(map)
		.bindLabel(shops['ПШК'][1])

	DG.marker(shops['САВ'][0])
		.on('click', function() {
			shopChoice.value = 'САВ'
		})
		.addTo(map)
		.bindLabel(shops['САВ'][1])

	DG.marker(shops['АМИ'][0])
		.on('click', function() {
			shopChoice.value = 'АМИ'
		})
		.addTo(map)
		.bindLabel(shops['АМИ'][1])

	DG.marker(shops['БАУ'][0])
		.on('click', function() {
			shopChoice.value = 'БАУ'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['БАУ'][1])

	DG.marker(shops['СЛВ'][0])
		.on('click', function() {
			shopChoice.value = 'СЛВ'
		})
		.addTo(map)
		.bindLabel(shops['СЛВ'][1])

})








Telegram.WebApp.onEvent('mainButtonClicked', function () { //тут сообщение отправляется в тг
	shop_code = shopChoice.value
	time = timeChoise.value
 	comment = document.getElementById('comment').value
	if (!time) {
		alert('Выберите желаемое время получения заказа"')
		return
	}
	if (!comment) {comment = 'Без комментариев'}
	tg.sendData(`${shop_code}|${time}|${comment}|${shop_code}`)
	
})
