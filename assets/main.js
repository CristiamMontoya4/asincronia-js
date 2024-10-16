//trayendo videos desde una pi de youtube
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9';

const content = document.getElementById('content');

const options = {
    method: 'GET',
    headers: {
		'x-rapidapi-key': 'fc2aeafb67msh71d9cd54cabf8f6p1cbcb3jsna671024ee2ec',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

// Ahora vamos usar un nuevo concepto: ++una función que se invoca a sí misma++;
// con JavaScript podemos tener funciones anónimas que permitan llamarse automáticamente
(async () => {

    try{
        const videos = await fetchData(API);
        //aquí hacemos un template para cada videos
        let view = `
        ${videos.items.map(video => `
                <div class="group relative">
                    <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${video.snippet.title}
                        </h3>
                    </div>
                </div>
            `).slice(0,4).join('')}    
        `;

        content.innerHTML = view;

    } catch(error) {
        console.error(error);
    }
})();

