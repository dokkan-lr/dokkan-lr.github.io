loadPage = function() {

	var flair_class = '';

	//SPECIAL FLAIRS
	loadSpecial = function() {
		var enter = document.getElementById('special');

		var name = [
			261,1413,
			367,1619,
			416,1445,
			459,1847,
			530,1707,
			562,1816,
			578,
			649,
			669,1492,
			718,1881,
			720,1927,
			748,1663,
			870,2444,
			935,2066,
			1001,2195,
			1035,1928,
			1045,2001,
			1085,
			1123,2357,
			1192,1764,
			1240,2034,
			1268,
			1314,2578,
			1362,1921,
			1391,2035,
			1404,1593,
			1434,1880,
			1473,2631,
			1532,1543,
			1571,2372,
			1588,2245,
			1610,2232,
			1652,2373,
			1698,2159,
			1747,2434,
			1751,1922,
			1763,5012,
			1794,
			1832,2138,
			1869,2505,
			1883,
			1910,
			1935,2300,
			1951,
			1985,
			2007,
			2023,
			2025,
			2074,2363,
			2076,2588,
			2099,
			2113,
			2148,
			2181,
			2201,
			2234,2500,
			2236,
			2251,
			2265,
			2302,
			2330,
			2338,
			2365,
			2418,
			2433,
			2441,
			2446,
			2465,
			2475,
			2477,
			2534,
			2536,
			2561,
			2577,
			2601,
			2603,
			2651,2681,
			2672,
			2686,
			2700,
			5014,
		]

		//creates HTML for special flairs
		for (var v in name) {
				var flair_special = document.createElement('span');
				flair_special.setAttribute('class', 'flair');
				flair_special.setAttribute('id', name[v]);
				flair_special.setAttribute('style', 'background-image: url(images/icons/'+name[v]+'.png)');

				enter.appendChild(flair_special);
		}
	}
	loadSpecial();
}

//waits for DOM to load before executing function
document.addEventListener('DOMContentLoaded', loadPage, false);