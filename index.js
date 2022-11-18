const lista_mastodon = [
    "masto.es",
    "mastodon.la",
    "social.politicaconciencia.org",
    "masto.nobigtech.es",
    "tkz.one",
    "laterracita.online",
    "viajes.social",
    "federa.social",
    "txs.es",
    "seda.social",
    "social.dexzone.es",
    "comunidad.nvda.es",
    "mst.universoalterno.es",
    "xarxa.cloud",
    "libertalia.world",
    "tuiter.rocks",
    "masto.rocks",
    "mstdn.mx",
    "mastodon.uy",
    "lile.cl",
    "col.social",
    "malaga.social",
    "social.ferrocarril.net",
    "sivar.cafe",
    "mastodon.cr",
    "owo.cafe",
]


lista_mastodon.forEach((dominio) => {
    fetch(`https://${dominio}/api/v1/instance`).then((result) => 
        result.json()
    ).then((servidor) => {
        let tarjeta = "<div class=tarjeta>"
        tarjeta += '<img class=cabecera src="' + servidor.thumbnail + '"/>'
        tarjeta += '<div class=contenido>'
        tarjeta += '<a href="https://' + servidor.uri + '" target="_blank">' + servidor.uri + "</a>"
        tarjeta += "<p>" + servidor.short_description + "</p>"
        tarjeta += "<div class=info>"
        tarjeta += '<div>'
        tarjeta += "Registros: " + (servidor.registrations ? "Abiertos" : "Cerrados" );
        tarjeta += "</br>Aprobación: " + (servidor.approval_required ? "Manual" : "Automática" )
        tarjeta += '</div>' //registro
        tarjeta += '<div style="display:flex;">'
        tarjeta += '<img class=avatar src="' + servidor.contact_account.avatar + '"/>'
        tarjeta += '<div>'
        tarjeta += "Administrado por: " + (servidor.contact_account.display_name != '' ?
                    servidor.contact_account.display_name :
                    servidor.contact_account.username );
        tarjeta += '</br>Correo: <a href=mailto:' + servidor.email + '" >' + servidor.email + "</a>"
        tarjeta += '</div>' //contacto
        tarjeta += '</div>' //admin
        tarjeta += '</div>' //info
        tarjeta += '</div>' //contenido
        tarjeta += "</div>" //tarjeta
        document.getElementById("mastodon").innerHTML += tarjeta
    }).catch(function (err) {
        console.warn('Algo falló', err);
    });
})