function getGitHubAPI(){
    fetch('https://api.github.com/users/erick-porto/repos')
    .then(async res => {
        if(!res.ok) throw new Error(res.status);
        const data = await res.json();
        data.map( i => {
            getLanguages(`${i.languages_url}`);
            
            document.getElementById('portfolio').innerHTML = `
            <div class="card swiper-slide">
                <div class="image-content">
                    <div class="card-image">
                        <img src="${i.html_url}/blob/main/src/images/logo.jpg?raw=true" class="card-img"></img>
                    </div>
                </div>

                <div class="card-content">
                    <h2 class="project-name">${i.name}</h2>
                    <span class='project-language'>${i.language}</span>
                    <p class="project-date">
                        ${ Intl.DateTimeFormat('pt-br').format(new Date(i.created_at)) }
                    </p>

                    <a href="${i.html_url}" target="_blank" class="project-repos-url">Ver Repositório</a>
                </div>
            </div>`;
        })
    
        
    
    }) 
}

getGitHubAPI()