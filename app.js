let tg = window.Telegram.WebApp;

tg.expand()

let mapWidget = document.getElementById('map')
let shopChoise = document.getElementById('selectshop')
let commentChoise = document.getElementById('comment')

tg.MainButton.setParams(
	{
	'text': 'Продолжить далее',
	'color': '#808080',
	'textColor': '#FFFFFF',
	'is_active': false,
	'is_visible': true
	}
	)

let timeChoise = document.getElementById('getorder-time')
timeChoise.min = new Date().toISOString().slice(0, -8)

let shops = {
	'АМИ': [[55.82862, 49.13423], 'ул. Ф. Амирхана, 10', 'Казань, Ново-Савиновский район', 'ami'],
	'БАУ': [[55.7926, 49.110168], 'ул. Баумана, 38/17', 'Казань, Вахитовский район', 'bau'],
	'БЕЛ': [[55.853796, 49.081886], 'ул. Белинского, 5А', 'Казань, Авиастроительный район', 'bel'],
	'БИГ': [[55.783176, 49.223059], 'ул. Бигичева, 3', 'Казань, Советский район', 'big'],
	'ВИШ': [[55.784503, 49.14964], 'ул. Вишневского, 14', 'Казань, Вахитовский район', 'vish'],
	'ВОС': [[55.832655, 49.062536], 'ул. ​Восстания, 83а', 'Казань, Московский район', 'vos'],
	'ГАГ': [[55.837599, 49.087749], 'ул. Гагарина, 83', 'Казань, Московский район', 'gag'],
	'ГВА': [[55.788734, 49.170843], 'ул. Гвардейская, 20', 'Казань, Советский район', 'gva'],
	'ГОР': [[55.793769, 49.13827], 'ул. Горького, 29/19', 'Казань, Вахитовский район', 'gor'],
	'ГУБ': [[55.805458, 49.190471], 'ул. Губкина, 13', 'Казань, Советский район', 'gub'],
	'Д40': [[55.764494, 49.177422], 'ул. Даурская, 40', 'Казань, Советский район', 'd40'],
	'ДЕК': [[55.819725, 49.089485], 'ул. Декабристов, 85Б', 'Казань, Московский район', 'dek'],
	'ДОС': [[55.787674, 49.153271], 'ул. Достоевского, 50', 'Казань, Вахитовский район', 'dos'],
	'ЕРШ': [[55.800535, 49.182331], 'ул. Николая Ершова, 78Б', 'Казань, Советский район', 'ersh'],
	'ЗОР': [[55.743438, 49.221473], 'ул. Рихарда Зорге, 101', 'Казань, Приволжский район', 'zor'],
	'КЛН': [[55.782583, 49.145888], 'ул. Калинина, 52', 'Казань, Вахитовский район', 'kln'],
	'КОС': [[55.801849, 49.187171], 'ул. Космонавтов, 1А', 'Казань, Советский район', 'kos'],
	'ЛЕН': [[55.86196, 49.085052], 'ул. Ленинградская, 23', 'Казань, Авиастроительный район', 'len'],
	'ЛОМ': [[55.767152, 49.230466], 'ул. Ломжинская, 17/1', 'Казань, Советский район', 'lom'],
	'ЛУК': [[55.861824, 49.090169], 'ул. Лукина, 11Б', 'Казань, Авиастроительный район', 'luk'],
	'МАК': [[55.863415, 49.078302], 'ул. Максимова, 50', 'Казань, Авиастроительный район', 'mak'],
	'МРС': [[55.795344, 49.137072], 'ул. Карла Маркса, 59', 'Казань, Вахитовский район', 'mrs'],
	'МСК': [[55.829777, 49.081568], 'ул. Декабристов, 150А', 'Казань, Московский район', 'msk'],
	'ПАВ': [[55.765922, 49.148654], 'ул. Павлюхина, 99', 'Казань, Приволжский район', 'pav'],
	'ПАР': [[55.745782, 49.190249], 'ул. Парина, 6', 'Казань, Приволжский район', 'par'],
	'ПИО': [[55.805613, 49.187073], 'ул. Пионерская, 5/9', 'Казань, Советский район', 'pio'],
	'ПОБ': [[55.767635, 49.22062], 'просп. Победы, 100', 'Казань, Советский район', 'pob'],
	'ПШК': [[55.786776, 49.121034], 'ул. Пушкина, 5', 'Казань, Вахитовский район', 'pshk'],
	'САВ': [[55.826703, 49.147909], 'просп. Ямашева, 93, корп. 1', 'Казань, Ново-Савиновский район', 'sav'],
	'САХ': [[55.780063, 49.23056], 'ул. Академика Сахарова, 12', 'Казань, Советский район', 'sakh'],
	'СИБ': [[55.810061, 49.18247], 'ул. Сибирский Тракт, 16', 'Казань, Советский район', 'sib'],
	'СЛВ': [[55.854902, 48.899283], 'ул. Наиля Юсупова, 9','Казань, Кировский район', 'slv'],
	'ТАТ': [[55.782495, 49.115108], 'ул. Татарстан, 16', 'Казань, Вахитовский район', 'tat'],
	'УНИ': [[55.790152, 49.123379], 'ул. Университетская, 22', 'Казань, Вахитовский район', 'uni'],
	'Ф106': [[55.769664, 49.232271], 'ул. Юлиуса Фучика, 106А', 'Казань, Советский район', 'f106'],
	'ФУЧ': [[55.756727, 49.232172], 'ул. Юлиуса Фучика, 72', 'Казань, Приволжский район', 'fuch'],
	'Ч15': [[55.819767, 49.113033], 'ул. Чистопольская, 15', 'Казань, Ново-Савиновский район', 'ch15'],
	'ЧЕХ': [[55.789771, 49.147665], 'ул. Чехова, 2', 'Казань, Вахитовский район', 'cheh'],
	'ЧЕТ': [[55.824506, 49.12133], 'ул. Четаева, 35', 'Казань, Ново-Савиновский район', 'chet'],
	'ЧИС': [[55.819121, 49.098895], 'ул. Чистопольская, 3', 'Казань, Московский район', 'chis'],
	'ЯПЕ': [[55.798572, 49.115571], 'ул. Япеева, 9/7', 'Казань, Вахитовский район', 'yape'],
	'Д11': [[55.764745, 49.166586], 'ул. Даурская, 11', 'Казань, Советский район', 'd11'],
	'ЧЕТ20': [[55.823464, 49.132391], 'ул. Четаева, 20а', 'Казань, Ново-Савиновский район', 'chet20']
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
		markerTarget=DG.marker(shops[shopChoise.value][0])
		shops[shopChoise.value][3].openPopup()
		blink(timeChoise)
	}


	shops['АМИ'][3] = DG.marker(shops['АМИ'][0])
		.on('click', function() {
			shopChoise.value = 'АМИ'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['АМИ'][1])

	shops['БАУ'][3] = DG.marker(shops['БАУ'][0])
		.on('click', function() {
			shopChoise.value = 'БАУ'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['БАУ'][1])

	shops['БЕЛ'][3] = DG.marker(shops['БЕЛ'][0])
		.on('click', function() {
			shopChoise.value = 'БЕЛ'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['БЕЛ'][1])

	shops['БИГ'][3] = DG.marker(shops['БИГ'][0])
		.on('click', function() {
			shopChoise.value = 'БИГ'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['БИГ'][1])

	shops['ВИШ'][3] = DG.marker(shops['ВИШ'][0])
		.on('click', function() {
			shopChoise.value = 'ВИШ'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ВИШ'][1])

	shops['ВОС'][3] = DG.marker(shops['ВОС'][0])
		.on('click', function() {
			shopChoise.value = 'ВОС'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ВОС'][1])

	shops['ГАГ'][3] = DG.marker(shops['ГАГ'][0])
		.on('click', function() {
			shopChoise.value = 'ГАГ'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ГАГ'][1])

	shops['ГВА'][3] = DG.marker(shops['ГВА'][0])
		.on('click', function() {
			shopChoise.value = 'ГВА'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ГВА'][1])

	shops['ГОР'][3] = DG.marker(shops['ГОР'][0])
		.on('click', function() {
			shopChoise.value = 'ГОР'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ГОР'][1])

	shops['ГУБ'][3] = DG.marker(shops['ГУБ'][0])
		.on('click', function() {
			shopChoise.value = 'ГУБ'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ГУБ'][1])

	shops['Д40'][3] = DG.marker(shops['Д40'][0])
		.on('click', function() {
			shopChoise.value = 'Д40'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['Д40'][1])
		
	shops['ДЕК'][3] = DG.marker(shops['ДЕК'][0])
		.on('click', function() {
			shopChoise.value = 'ДЕК'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ДЕК'][1])
	
	shops['ДОС'][3] = DG.marker(shops['ДОС'][0])
		.on('click', function() {
			shopChoise.value = 'ДОС'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ДОС'][1])
	
	shops['ЕРШ'][3] = DG.marker(shops['ЕРШ'][0])
		.on('click', function() {
			shopChoise.value = 'ЕРШ'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ЕРШ'][1])

	shops['ЗОР'][3] = DG.marker(shops['ЗОР'][0])
		.on('click', function() {
			shopChoise.value = 'ЗОР'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ЗОР'][1])

	shops['КЛН'][3] = DG.marker(shops['КЛН'][0])
		.on('click', function() {
			shopChoise.value = 'КЛН'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['КЛН'][1])

	shops['КОС'][3] = DG.marker(shops['КОС'][0])
		.on('click', function() {
			shopChoise.value = 'КОС'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['КОС'][1])
	
	shops['ЛЕН'][3] = DG.marker(shops['ЛЕН'][0])
		.on('click', function() {
			shopChoise.value = 'ЛЕН'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ЛЕН'][1])

	shops['ЛОМ'][3] = DG.marker(shops['ЛОМ'][0])
		.on('click', function() {
			shopChoise.value = 'ЛОМ'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ЛОМ'][1])

	shops['ЛУК'][3] = DG.marker(shops['ЛУК'][0])
		.on('click', function() {
			shopChoise.value = 'ЛУК'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ЛУК'][1])

	shops['МАК'][3] = DG.marker(shops['МАК'][0])
		.on('click', function() {
			shopChoise.value = 'МАК'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['МАК'][1])
	
	shops['МРС'][3] = DG.marker(shops['МРС'][0])
		.on('click', function() {
			shopChoise.value = 'МРС'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['МРС'][1])

	shops['МСК'][3] = DG.marker(shops['МСК'][0])
		.on('click', function() {
			shopChoise.value = 'МСК'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['МСК'][1])

	shops['ПАВ'][3] = DG.marker(shops['ПАВ'][0])
		.on('click', function() {
			shopChoise.value = 'ПАВ'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ПАВ'][1])
	
	shops['ПАР'][3] = DG.marker(shops['ПАР'][0])
		.on('click', function() {
			shopChoise.value = 'ПАР'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ПАР'][1])
	
	shops['ПИО'][3] = DG.marker(shops['ПИО'][0])
		.on('click', function() {
			shopChoise.value = 'ПИО'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ПИО'][1])
	
	shops['ПОБ'][3] = DG.marker(shops['ПОБ'][0])
		.on('click', function() {
			shopChoise.value = 'ПОБ'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ПОБ'][1])
	
	shops['ПШК'][3] = DG.marker(shops['ПШК'][0])
		.on('click', function() {
			shopChoise.value = 'ПШК'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ПШК'][1])

	shops['САВ'][3] = DG.marker(shops['САВ'][0])
		.on('click', function() {
			shopChoise.value = 'САВ'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['САВ'][1])
	
	shops['САХ'][3] = DG.marker(shops['САХ'][0])
		.on('click', function() {
			shopChoise.value = 'САХ'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['САХ'][1])
	
	shops['СИБ'][3] = DG.marker(shops['СИБ'][0])
		.on('click', function() {
			shopChoise.value = 'СИБ'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['СИБ'][1])

	shops['СЛВ'][3] = DG.marker(shops['СЛВ'][0])
		.on('click', function() {
			shopChoise.value = 'СЛВ'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['СЛВ'][1])
	
	shops['ТАТ'][3] = DG.marker(shops['ТАТ'][0])
		.on('click', function() {
			shopChoise.value = 'ТАТ'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ТАТ'][1])
	
	shops['УНИ'][3] = DG.marker(shops['УНИ'][0])
		.on('click', function() {
			shopChoise.value = 'УНИ'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['УНИ'][1])
	
	shops['Ф106'][3] = DG.marker(shops['Ф106'][0])
		.on('click', function() {
			shopChoise.value = 'Ф106'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['Ф106'][1])
	
	shops['ФУЧ'][3] = DG.marker(shops['ФУЧ'][0])
		.on('click', function() {
			shopChoise.value = 'ФУЧ'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ФУЧ'][1])
		
	shops['Ч15'][3] = DG.marker(shops['Ч15'][0])
		.on('click', function() {
			shopChoise.value = 'Ч15'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['Ч15'][1])
	
	shops['ЧЕТ'][3] = DG.marker(shops['ЧЕТ'][0])
		.on('click', function() {
			shopChoise.value = 'ЧЕТ'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ЧЕТ'][1])
	
	shops['ЧЕХ'][3] = DG.marker(shops['ЧЕХ'][0])
		.on('click', function() {
			shopChoise.value = 'ЧЕХ'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ЧЕХ'][1])

	shops['ЧИС'][3] = DG.marker(shops['ЧИС'][0])
		.on('click', function() {
			shopChoise.value = 'ЧИС'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ЧИС'][1])
	
	shops['ЯПЕ'][3] = DG.marker(shops['ЯПЕ'][0])
		.on('click', function() {
			shopChoise.value = 'ЯПЕ'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ЯПЕ'][1])
	
	shops['Д11'][3] = DG.marker(shops['Д11'][0])
		.on('click', function() {
			shopChoise.value = 'Д11'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['Д11'][1])

	shops['ЧЕТ20'][3] = DG.marker(shops['ЧЕТ20'][0])
		.on('click', function() {
			shopChoise.value = 'ЧЕТ20'
			map.setView(center=shops[shopChoise.value][0], map.getZoom())
			blink(timeChoise)
		})
		.addTo(map)
		.bindPopup(shops['ЧЕТ20'][1])
})

function blink(element){
	if (element.value != '') {return}
	element.scrollIntoView()
	element.focus()
	element.style.backgroundColor = "#FFFFFF"
	setTimeout(function() {
	element.style.backgroundColor = "#FDFF47"
	}, 500)
	setTimeout(function() {
	element.style.backgroundColor = "#FFFFFF"
	}, 1000)
	setTimeout(function() {
	element.style.backgroundColor = "#FDFF47"
	}, 1500)

}



timeChoise.onchange = function changeTime () {
	timeChoise.style.backgroundColor = "#FFFFFF"
	tg.MainButton.isActive = true
	tg.MainButton.color = '#2cab37'
	blink(commentChoise)
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
