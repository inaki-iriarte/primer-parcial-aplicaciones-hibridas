function createPage(title, content) {
    let html = '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="css/styles.css">'

    html += '<title>' + title + '</title></head><body>'

    html += '<nav><a href="/">Inicio</a> | <a href="/mobile">Mobile</a> | <a href="/landing">Landing Page</a> | <a href="/webapp">Web App</a> | <a href="/ecommerce">e-Commerce</a> | <a href="/game">Games</a></nav>'

    html += content

    html += '</body></html>'

    return html
}

function createProjectsPage(projects, section) {
    let html = `<h1>${section}</h1>`

    html += '<div class="container">'

    for (let i=0; i<projects.length; i++) {
        html += '<div class="card">'
        html += `<img src="${projects[i].img}" alt="${projects[i].name}">`
        html += `<h2>${projects[i].name}</h2>`
        html += `<p>${projects[i].description}</p>`
        html += `<p>Tecnologías: ${projects[i].technologies}</p>`
        html += `<a href="${projects[i].link}" target="_blank">Repositorio</a>`
        html += '</div>'
    }

    html += '</div>'

    return createPage(section, html)
}

export {
    createPage,
    createProjectsPage
}