let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let timeChoise = document.getElementById('getorder-time')
timeChoise.min = new Date().toISOString().slice(0, -8)


let map
let shops = {
	'АМИ': [[55.829140, 49.133510], 'ул. Ф. Амирхана, 10', 'Казань, Ново-Савиновский район'],
	'БАУ': [[55.792851, 49.112692], 'ул. Баумана, 38/17', 'Казань, Вахитовский район']
/*	
	'БЕЛ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.101015%2C55.861308&mode=search&oid=28202707539&ol=biz&sll=49.101015%2C55.861308&text=holland&z=16',	
	'БИГ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.254561%2C55.781496&mode=search&oid=97456772243&ol=biz&sll=49.254561%2C55.781496&text=holland&z=16',	
	'ВИШ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.146303%2C55.785132&mode=search&oid=72178542010&ol=biz&sll=49.146303%2C55.785132&text=holland&z=16',	
	'ВОС': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.068592%2C55.832345&mode=search&oid=90464841972&ol=biz&sll=49.068592%2C55.832345&text=holland&z=16',	
	'ГАГ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.089160%2C55.835726&mode=search&oid=18603392162&ol=biz&sll=49.089160%2C55.835726&text=holland&z=16',	
	'ГВА': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.170906%2C55.788722&mode=search&oid=213016406099&ol=biz&sll=49.170906%2C55.788722&text=holland&z=16',
	'ГОР': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.138544%2C55.794074&mode=search&oid=132785029633&ol=biz&sll=49.138544%2C55.794074&text=holland&z=16',
	'ГУБ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.190720%2C55.805465&mode=search&oid=185140938451&ol=biz&sll=49.190720%2C55.805465&text=holland&z=16',
	'Д40': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.180103%2C55.764762&mode=search&oid=163532602468&ol=biz&sll=49.180103%2C55.764762&text=holland&z=16',
	'ДЕК': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.089998%2C55.820134&mode=search&oid=220734194938&ol=biz&sll=49.089998%2C55.820134&text=holland&z=16',
	'ДОС': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.154793%2C55.788111&mode=search&oid=237644359130&ol=biz&sll=49.154793%2C55.788111&text=holland&z=16',
	'ЕРШ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.183154%2C55.800494&mode=search&oid=111702055150&ol=biz&sll=49.183154%2C55.800494&text=holland&z=16',
	'ЗОР': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.222299%2C55.742885&mode=search&oid=119379299168&ol=biz&sll=49.222299%2C55.742885&text=holland&z=16',
	'КЛН': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.147003%2C55.783040&mode=search&oid=23366454746&ol=biz&sll=49.147003%2C55.783040&text=holland&z=16',
	'КОС': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.188066%2C55.801566&mode=search&oid=217270655070&ol=biz&sll=49.188066%2C55.801566&text=holland&z=16',
	'ЛЕН': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.085731%2C55.862304&mode=search&oid=22469840907&ol=biz&sll=49.085731%2C55.862304&text=holland&z=16',
	'ЛОМ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.230397%2C55.767172&mode=search&oid=228768362208&ol=biz&sll=49.230397%2C55.767172&text=holland&z=16',
	'ЛУК': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.090188%2C55.861954&mode=search&oid=28888710249&ol=biz&sll=49.090188%2C55.861954&text=holland&z=16',
	'МАК': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.079574%2C55.862919&mode=search&oid=167789163140&ol=biz&sll=49.079574%2C55.862919&text=holland&z=16',
	'МРС': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.137647%2C55.795269&mode=search&oid=157134491588&ol=biz&sll=49.137647%2C55.795269&text=holland&z=16',
	'МСК': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.084519%2C55.830593&mode=search&oid=74911952640&ol=biz&sll=49.084519%2C55.830593&text=holland&z=16',
	'ПАВ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.148431%2C55.766649&mode=search&oid=66495086038&ol=biz&sll=49.148431%2C55.766649&text=holland&z=16',
	'ПАР': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.189769%2C55.745739&mode=search&oid=29910588982&ol=biz&sll=49.189769%2C55.745739&text=holland&z=16',		
	'ПИО': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.185149%2C55.805840&mode=search&oid=103392130342&ol=biz&sll=49.185149%2C55.805840&text=holland&z=16',		
	'ПОБ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.220710%2C55.768300&mode=search&oid=112890755875&ol=biz&sll=49.220710%2C55.768300&text=holland&z=16',		
	'ПШК': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.122976%2C55.786570&mode=search&oid=1645643275&ol=biz&sll=49.122976%2C55.786570&text=holland&z=16',
	'САВ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.150096%2C55.827630&mode=search&oid=29136626608&ol=biz&sll=49.150096%2C55.827630&text=holland&z=16',
	'САХ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.233613%2C55.780401&mode=search&oid=85712801621&ol=biz&sll=49.233613%2C55.780401&text=holland&z=16',
	'СИБ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.182654%2C55.809970&mode=search&oid=1465762934&ol=biz&sll=49.182654%2C55.809970&text=holland&z=16',
	'СЛВ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=48.907657%2C55.855640&mode=search&oid=85591292351&ol=biz&sll=48.907657%2C55.855640&text=holland&z=16',
	'ТАТ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.116853%2C55.782212&mode=search&oid=219382741699&ol=biz&sll=49.116853%2C55.782212&text=holland&z=16',
	'УНИ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.123437%2C55.790145&mode=search&oid=77882752607&ol=biz&sll=49.123437%2C55.790145&text=holland&z=16',
	'Ф106': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.232375%2C55.769707&mode=search&oid=213883763512&ol=biz&sll=49.232375%2C55.769707&text=holland&z=16',
	'ФУЧ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.232357%2C55.755849&mode=search&oid=211680143113&ol=biz&sll=49.232357%2C55.755849&text=holland&z=16',
	'Ч15': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.106065%2C55.819481&mode=search&oid=101046037813&ol=biz&sll=49.106065%2C55.819481&text=holland&z=16',
	'ЧЕТ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.121416%2C55.824597&mode=search&oid=22377431664&ol=biz&sll=49.121416%2C55.824597&text=holland&z=16',
	'ЧЕХ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.147576%2C55.789670&mode=search&oid=68683820458&ol=biz&sll=49.147576%2C55.789670&text=holland&z=16',
	'ЧИС': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.100406%2C55.819285&mode=search&oid=146226951517&ol=biz&sll=49.100406%2C55.819285&text=holland&z=16',
	'ЯПЕ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.116204%2C55.798754&mode=search&oid=221947341800&ol=biz&sll=49.116204%2C55.798754&text=holland&z=16',
*/
}

DG.then(function () {

   map = DG.map('map', {
   center: [55.83, 49.05],
   zoom: 10,
   fullscreenControl: false
   })

   for (key in shops) {DG.marker(shops[key][0]).addTo(map).bindPopup(shops[key][1])}

   map.locate({setView: true, watch: true})
      .on('locationfound', function(e) {
   	DG.marker([e.latitude, e.longitude]).addTo(map)
                    })
      .on('locationerror', function(e) {
         DG.popup()
         .setLatLng(map.getCenter())
         .setContent('Доступ к определению местоположения отключён')
         .openOn(map)
          		})

})


let shop = {
	'АМИ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.133510%2C55.829140&mode=search&oid=122257767856&ol=biz&sll=49.133510%2C55.829140&text=АМИРХАНА&z=16',
	'БАУ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.112692%2C55.792851&mode=search&oid=40507941895&ol=biz&sll=49.112692%2C55.792851&text=holland&z=16',	
	'БЕЛ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.101015%2C55.861308&mode=search&oid=28202707539&ol=biz&sll=49.101015%2C55.861308&text=holland&z=16',	
	'БИГ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.254561%2C55.781496&mode=search&oid=97456772243&ol=biz&sll=49.254561%2C55.781496&text=holland&z=16',	
	'ВИШ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.146303%2C55.785132&mode=search&oid=72178542010&ol=biz&sll=49.146303%2C55.785132&text=holland&z=16',	
	'ВОС': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.068592%2C55.832345&mode=search&oid=90464841972&ol=biz&sll=49.068592%2C55.832345&text=holland&z=16',	
	'ГАГ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.089160%2C55.835726&mode=search&oid=18603392162&ol=biz&sll=49.089160%2C55.835726&text=holland&z=16',	
	'ГВА': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.170906%2C55.788722&mode=search&oid=213016406099&ol=biz&sll=49.170906%2C55.788722&text=holland&z=16',
	'ГОР': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.138544%2C55.794074&mode=search&oid=132785029633&ol=biz&sll=49.138544%2C55.794074&text=holland&z=16',
	'ГУБ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.190720%2C55.805465&mode=search&oid=185140938451&ol=biz&sll=49.190720%2C55.805465&text=holland&z=16',
	'Д40': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.180103%2C55.764762&mode=search&oid=163532602468&ol=biz&sll=49.180103%2C55.764762&text=holland&z=16',
	'ДЕК': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.089998%2C55.820134&mode=search&oid=220734194938&ol=biz&sll=49.089998%2C55.820134&text=holland&z=16',
	'ДОС': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.154793%2C55.788111&mode=search&oid=237644359130&ol=biz&sll=49.154793%2C55.788111&text=holland&z=16',
	'ЕРШ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.183154%2C55.800494&mode=search&oid=111702055150&ol=biz&sll=49.183154%2C55.800494&text=holland&z=16',
	'ЗОР': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.222299%2C55.742885&mode=search&oid=119379299168&ol=biz&sll=49.222299%2C55.742885&text=holland&z=16',
	'КЛН': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.147003%2C55.783040&mode=search&oid=23366454746&ol=biz&sll=49.147003%2C55.783040&text=holland&z=16',
	'КОС': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.188066%2C55.801566&mode=search&oid=217270655070&ol=biz&sll=49.188066%2C55.801566&text=holland&z=16',
	'ЛЕН': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.085731%2C55.862304&mode=search&oid=22469840907&ol=biz&sll=49.085731%2C55.862304&text=holland&z=16',
	'ЛОМ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.230397%2C55.767172&mode=search&oid=228768362208&ol=biz&sll=49.230397%2C55.767172&text=holland&z=16',
	'ЛУК': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.090188%2C55.861954&mode=search&oid=28888710249&ol=biz&sll=49.090188%2C55.861954&text=holland&z=16',
	'МАК': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.079574%2C55.862919&mode=search&oid=167789163140&ol=biz&sll=49.079574%2C55.862919&text=holland&z=16',
	'МРС': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.137647%2C55.795269&mode=search&oid=157134491588&ol=biz&sll=49.137647%2C55.795269&text=holland&z=16',
	'МСК': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.084519%2C55.830593&mode=search&oid=74911952640&ol=biz&sll=49.084519%2C55.830593&text=holland&z=16',
	'ПАВ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.148431%2C55.766649&mode=search&oid=66495086038&ol=biz&sll=49.148431%2C55.766649&text=holland&z=16',
	'ПАР': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.189769%2C55.745739&mode=search&oid=29910588982&ol=biz&sll=49.189769%2C55.745739&text=holland&z=16',		
	'ПИО': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.185149%2C55.805840&mode=search&oid=103392130342&ol=biz&sll=49.185149%2C55.805840&text=holland&z=16',		
	'ПОБ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.220710%2C55.768300&mode=search&oid=112890755875&ol=biz&sll=49.220710%2C55.768300&text=holland&z=16',		
	'ПШК': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.122976%2C55.786570&mode=search&oid=1645643275&ol=biz&sll=49.122976%2C55.786570&text=holland&z=16',
	'САВ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.150096%2C55.827630&mode=search&oid=29136626608&ol=biz&sll=49.150096%2C55.827630&text=holland&z=16',
	'САХ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.233613%2C55.780401&mode=search&oid=85712801621&ol=biz&sll=49.233613%2C55.780401&text=holland&z=16',
	'СИБ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.182654%2C55.809970&mode=search&oid=1465762934&ol=biz&sll=49.182654%2C55.809970&text=holland&z=16',
	'СЛВ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=48.907657%2C55.855640&mode=search&oid=85591292351&ol=biz&sll=48.907657%2C55.855640&text=holland&z=16',
	'ТАТ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.116853%2C55.782212&mode=search&oid=219382741699&ol=biz&sll=49.116853%2C55.782212&text=holland&z=16',
	'УНИ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.123437%2C55.790145&mode=search&oid=77882752607&ol=biz&sll=49.123437%2C55.790145&text=holland&z=16',
	'Ф106': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.232375%2C55.769707&mode=search&oid=213883763512&ol=biz&sll=49.232375%2C55.769707&text=holland&z=16',
	'ФУЧ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.232357%2C55.755849&mode=search&oid=211680143113&ol=biz&sll=49.232357%2C55.755849&text=holland&z=16',
	'Ч15': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.106065%2C55.819481&mode=search&oid=101046037813&ol=biz&sll=49.106065%2C55.819481&text=holland&z=16',
	'ЧЕТ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.121416%2C55.824597&mode=search&oid=22377431664&ol=biz&sll=49.121416%2C55.824597&text=holland&z=16',
	'ЧЕХ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.147576%2C55.789670&mode=search&oid=68683820458&ol=biz&sll=49.147576%2C55.789670&text=holland&z=16',
	'ЧИС': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.100406%2C55.819285&mode=search&oid=146226951517&ol=biz&sll=49.100406%2C55.819285&text=holland&z=16',
	'ЯПЕ': 'https://yandex.ru/map-widget/v1/?filter=chain_id%3A190469064514&indoorLevel=1&ll=49.116204%2C55.798754&mode=search&oid=221947341800&ol=biz&sll=49.116204%2C55.798754&text=holland&z=16',
}

let mapWidget = document.getElementById('map')
let shopChoice = document.getElementById('selectshop')

function changeShop() {
	shop_code = shopChoice.value
	let iframe = document.getElementById('map-widget')
	iframe.src = shop[shop_code]
	tg.MainButton.show()
}



Telegram.WebApp.onEvent('mainButtonClicked', function () { //тут сообщение отправляется в тг
	shop_code = shopChoice.value
	time = timeChoise.value
 	comment = document.getElementById('comment').value
	if (!shop) {
		alert('Выберите магазин из списка и нажмите "Выбрать"')
		return
	}
	if (!time) {
		alert('Выберите желаемое время получения заказа"')
		return
	}
	if (!comment) {comment = 'Без комментариев'}
	tg.sendData(`${shop_code}|${time}|${comment}|${shop_code}`)
	
})
