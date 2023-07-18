let tg = window.Telegram.WebApp;

tg.expand()

let mapWidget = document.getElementById('map')
let shopChoise = document.getElementById('selectshop')
let commentChoise = document.getElementById('comment')


tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let timeChoise = document.getElementById('getorder-time')
timeChoise.min = new Date().toISOString().slice(0, -8)

let shops = {
	'АМИ': [[55.82862, 49.13423], 'ул. Ф. Амирхана, 10', 'Казань, Ново-Савиновский район'],
	'БАУ': [[55.7926, 49.110168], 'ул. Баумана, 38/17', 'Казань, Вахитовский район'],
	'БЕЛ': [[55.853796, 49.081886], 'ул. Белинского, 5А', 'Казань, Авиастроительный район'],
	'БИГ': [[55.783176, 49.223059], 'ул. Бигичева,3', 'Казань, Советский район'],
	'ВИШ': [[55.784503, 49.14964], 'ул. Вишневского, 14', 'Казань, Вахитовский район'],
	'ВОС': [[55.832655, 49.062536], 'ул. ​Восстания, 83а', 'Казань, Московский район'],
	'ГАГ': [[55.837599, 49.087749], 'ул. Гагарина, 83', 'Казань, Московский район'],
	'ГВА': [[55.788734, 49.170843], 'ул. Гвардейская, 20', 'Казань, Советский район'],
	'ГОР': [[55.793769, 49.13827], 'ул. Горького, 29/19', 'Казань, Вахитовский район'],
	'ГУБ': [[55.805458, 49.190471], 'ул. Губкина, 13', 'Казань, Советский район'],
	'Д40': [[55.764494, 49.177422], 'ул. Даурская, 40', 'Казань, Советский район'],
	'ДЕК': [[55.819725, 49.089485], 'ул. Декабристов, 85Б', 'Казань, Московский район'],
	'ДОС': [[55.787674, 49.153271], 'ул. Достоевского, 50', 'Казань, Вахитовский район'],
	'ЕРШ': [[55.800535, 49.182331], 'ул. Николая Ершова', 'Казань, Советский район'],
	'ЗОР': [[55.743438, 49.221473], 'ул. Рихарда Зорге', 'Казань, Приволжский район'],
	'КЛН': [[55.782583, 49.145888], 'ул. Калинина, 52', 'Казань, Вахитовский район'],
	'КОС': [[55.801849, 49.187171], 'ул. Космонавтов, 1А', 'Казань, Советский район'],
	'ЛЕН': [[55.86196, 49.085052], 'ул. Ленинградская, 23', 'Казань, Авиастроительный район'],
	'ЛОМ': [[55.767152, 49.230466], 'ул. Ломжинская, 17/1', 'Казань, Советский район'],
	'ЛУК': [[55.861824, 49.090169], 'ул. Лукина, 11Б', 'Казань, Авиастроительный район'],
	'МАК': [[55.863415, 49.078302], 'ул. Максимова, 50', 'Казань, Авиастроительный район'],
	'МРС': [[55.795344, 49.137072], 'ул. Карла Маркса, 59', 'Казань, Вахитовский район'],
	'МСК': [[55.829777, 49.081568], 'ул. Декабристов, 150А', 'Казань, Московский район'],
	'ПАВ': [[55.765922, 49.148654], 'ул. Павлюхина, 99', 'Казань, Приволжский район'],
	'ПАР': [[55.745782, 49.190249], 'Парина, 6', 'Казань, Приволжский район'],
	'ПИО': [[55.805613, 49.187073], 'ул. Пионерская, 5/9', 'Казань, Советский район'],
	'ПОБ': [[55.767635, 49.22062], 'просп. Победы, 100', 'Казань, Советский район'],
	'ПШК': [[55.786776, 49.121034], 'ул. Пушкина, 5', 'Казань, Вахитовский район'],
	'САВ': [[55.826703, 49.147909], 'просп. Ямашева, 93, корп. 1', 'Казань, Ново-Савиновский район'],
	'САХ': [[55.780063, 49.23056], 'ул. Академика Сахарова, 12', 'Казань, Советский район'],
	'СИБ': [[55.810061, 49.18247], 'ул. Сибирский Тракт, 16', 'Казань, Советский район'],
	'СЛВ': [[55.854902, 48.899283], 'ул. Наиля Юсупова, 9','Казань, Кировский район'],
	'ТАТ': [[55.782495, 49.115108], 'ул. Татарстан, 16', 'Казань, Вахитовский район'],
	'УНИ': [[55.790152, 49.123379], 'ул. Университетская, 22', 'Казань, Вахитовский район'],
	'Ф106': [[55.769664, 49.232271], 'ул. Юлиуса Фучика, 106А', 'Казань, Советский район'],
	'ФУЧ': [[55.756727, 49.232172], 'ул. Юлиуса Фучика, 72', 'Казань, Приволжский район'],
	'Ч15': [[55.819767, 49.113033], 'ул. Чистопольская, 15', 'Казань, Ново-Савиновский район'],
	'ЧЕХ': [[55.789771, 49.147665], 'ул. Чехова, 2', 'Казань, Вахитовский район'],
	'ЧЕТ': [[55.824506, 49.12133], 'ул. Четаева, 35', 'Казань, Ново-Савиновский район'],
	'ЧИС': [[55.819121, 49.098895], 'ул. Чистопольская, 3', 'Казань, Московский район'],
	'ЯПЕ': [[55.798572, 49.115571], 'ул. Япеева, 9/7', 'Казань, Вахитовский район'],
	'Д11': [[55.764745, 49.166586], 'ул. Даурская, 11', 'Казань, Советский район'],
	'ЧЕТ20': [[55.823464, 49.132391], 'ул. Четаева, 20а', 'Казань, Ново-Савиновский район']
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
	shopChoise.appendChild(groupName)
}	



DG.then(function () {
   let map, myLocation
   map = DG.map('map', {
   center: [55.83, 49.05],
   zoom: 10,
   minZoom: 10,
   fullscreenControl: false
   })

	shopChoise.onchange = function changeShop () {
		map.setView(center=shops[shopChoise.value][0], zoom=16)
		timeChoise.style.backgroundColor = "#FDFF47"
	}


	DG.marker(shops['АМИ'][0])
		.on('click', function() {
			shopChoise.value = 'АМИ'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['АМИ'][1])

	DG.marker(shops['БАУ'][0])
		.on('click', function() {
			shopChoise.value = 'БАУ'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['БАУ'][1])

	DG.marker(shops['БЕЛ'][0])
		.on('click', function() {
			shopChoise.value = 'БЕЛ'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['БЕЛ'][1])

	DG.marker(shops['БИГ'][0])
		.on('click', function() {
			shopChoise.value = 'БИГ'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['БИГ'][1])

	DG.marker(shops['ВИШ'][0])
		.on('click', function() {
			shopChoise.value = 'ВИШ'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ВИШ'][1])

	DG.marker(shops['ВОС'][0])
		.on('click', function() {
			shopChoise.value = 'ВОС'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ВОС'][1])

	DG.marker(shops['ГАГ'][0])
		.on('click', function() {
			shopChoise.value = 'ГАГ'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ГАГ'][1])

	DG.marker(shops['ГВА'][0])
		.on('click', function() {
			shopChoise.value = 'ГВА'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ГВА'][1])

	DG.marker(shops['ГОР'][0])
		.on('click', function() {
			shopChoise.value = 'ГОР'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ГОР'][1])

	DG.marker(shops['ГУБ'][0])
		.on('click', function() {
			shopChoise.value = 'ГУБ'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ГУБ'][1])

	DG.marker(shops['Д40'][0])
		.on('click', function() {
			shopChoise.value = 'Д40'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['Д40'][1])
		
	DG.marker(shops['ДЕК'][0])
		.on('click', function() {
			shopChoise.value = 'ДЕК'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ДЕК'][1])
	
	DG.marker(shops['ДОС'][0])
		.on('click', function() {
			shopChoise.value = 'ДОС'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ДОС'][1])
	
	DG.marker(shops['ЕРШ'][0])
		.on('click', function() {
			shopChoise.value = 'ЕРШ'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ЕРШ'][1])

	DG.marker(shops['ЗОР'][0])
		.on('click', function() {
			shopChoise.value = 'ЗОР'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ЗОР'][1])

	DG.marker(shops['КЛН'][0])
		.on('click', function() {
			shopChoise.value = 'КЛН'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['КЛН'][1])

	DG.marker(shops['КОС'][0])
		.on('click', function() {
			shopChoise.value = 'КОС'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['КОС'][1])
	
	DG.marker(shops['ЛЕН'][0])
		.on('click', function() {
			shopChoise.value = 'ЛЕН'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ЛЕН'][1])

	DG.marker(shops['ЛОМ'][0])
		.on('click', function() {
			shopChoise.value = 'ЛОМ'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ЛОМ'][1])

	DG.marker(shops['ЛУК'][0])
		.on('click', function() {
			shopChoise.value = 'ЛУК'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ЛУК'][1])

	DG.marker(shops['МАК'][0])
		.on('click', function() {
			shopChoise.value = 'МАК'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['МАК'][1])
	
	DG.marker(shops['МРС'][0])
		.on('click', function() {
			shopChoise.value = 'МРС'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['МРС'][1])

	DG.marker(shops['МСК'][0])
		.on('click', function() {
			shopChoise.value = 'МСК'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['МСК'][1])

	DG.marker(shops['ПАВ'][0])
		.on('click', function() {
			shopChoise.value = 'ПАВ'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ПАВ'][1])
	
	DG.marker(shops['ПАР'][0])
		.on('click', function() {
			shopChoise.value = 'ПАР'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ПАР'][1])
	
	DG.marker(shops['ПИО'][0])
		.on('click', function() {
			shopChoise.value = 'ПИО'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ПИО'][1])
	
	DG.marker(shops['ПОБ'][0])
		.on('click', function() {
			shopChoise.value = 'ПОБ'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ПОБ'][1])
	
	DG.marker(shops['ПШК'][0])
		.on('click', function() {
			shopChoise.value = 'ПШК'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ПШК'][1])

	DG.marker(shops['САВ'][0])
		.on('click', function() {
			shopChoise.value = 'САВ'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['САВ'][1])
	
	DG.marker(shops['САХ'][0])
		.on('click', function() {
			shopChoise.value = 'САХ'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['САХ'][1])
	
	DG.marker(shops['СИБ'][0])
		.on('click', function() {
			shopChoise.value = 'СИБ'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['СИБ'][1])

	DG.marker(shops['СЛВ'][0])
		.on('click', function() {
			shopChoise.value = 'СЛВ'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['СЛВ'][1])
	
	DG.marker(shops['ТАТ'][0])
		.on('click', function() {
			shopChoise.value = 'ТАТ'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ТАТ'][1])
	
	DG.marker(shops['УНИ'][0])
		.on('click', function() {
			shopChoise.value = 'УНИ'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['УНИ'][1])
	
	DG.marker(shops['Ф106'][0])
		.on('click', function() {
			shopChoise.value = 'Ф106'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['Ф106'][1])
	
	DG.marker(shops['ФУЧ'][0])
		.on('click', function() {
			shopChoise.value = 'ФУЧ'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ФУЧ'][1])
		
	DG.marker(shops['Ч15'][0])
		.on('click', function() {
			shopChoise.value = 'Ч15'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['Ч15'][1])
	
	DG.marker(shops['ЧЕТ'][0])
		.on('click', function() {
			shopChoise.value = 'ЧЕТ'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ЧЕТ'][1])
	
	DG.marker(shops['ЧЕХ'][0])
		.on('click', function() {
			shopChoise.value = 'ЧЕХ'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ЧЕХ'][1])

	DG.marker(shops['ЧИС'][0])
		.on('click', function() {
			shopChoise.value = 'ЧИС'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ЧИС'][1])
	
	DG.marker(shops['ЯПЕ'][0])
		.on('click', function() {
			shopChoise.value = 'ЯПЕ'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ЯПЕ'][1])
	
	DG.marker(shops['Д11'][0])
		.on('click', function() {
			shopChoise.value = 'Д11'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['Д11'][1])

	DG.marker(shops['ЧЕТ20'][0])
		.on('click', function() {
			shopChoise.value = 'ЧЕТ20'
			tg.MainButton.show()
		})
		.addTo(map)
		.bindLabel(shops['ЧЕТ20'][1])
})


timeChoise.onchange = function changeTime () {
	timeChoise.style.backgroundColor = "#FFFFFF"
	commentChoise.style.backgroundColor = "#FDFF47"
	tg.MainButton.show()
}

Telegram.WebApp.onEvent('mainButtonClicked', function () { //тут сообщение отправляется в тг
	shop_code = shopChoise.value
	time = timeChoise.value
 	comment = commentChoise.value
	if (!time) {
		alert('Поле выбора времени пустое!')
		return
	}
	if (!comment) {comment = 'Без комментариев'}
	tg.sendData(`${shop_code}|${time}|${comment}`)
	
})
