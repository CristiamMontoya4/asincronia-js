//trayendo videos desde una pi de youtube
const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=9";

const content = null || document.getElementById('content');

const options = {
    method: 'GET',
    Headers: {
        'X-RapidApi-Host': 'youtube-v31.p.rapidapi.com',
        'X-RapidApi-Key': 'fc2aeafb67msh71d9cd54cabf8f6p1cbcb3jsna671024ee2ec'
    }
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

fetchData(API)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))


// Ahora vamos usar un nuevo concepto: ++una función que se invoca a sí misma++;
// con JavaScript podemos tener funciones anónimas que permitan llamarse automáticamente
(async () => {

    try{
        const videos = await fetchData(API);
        //aquí hacemos un template para cada videos
        let view = `
        ${videos.items.map(videos => `
                <div class="group relative">
                    <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
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

