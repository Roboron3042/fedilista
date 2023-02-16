const lista_mastodon = [
    "mastodon.uy",
    "chilemasto.casa",
    "mstdn.es",
    "mstdn.mx",
    "sivar.cafe",
    "col.social",
    "mastodonperu.xy",
    "mastodon.la",
    "mastodon.cl",
    "seda.social",
    "devschile.social",
    "bizkaia.social",
    "masto.nobigtech.es",
    "masto.es",
    "tkz.one",
    "xarxa.cloud",
    "culturaeinnovacion.social",
    "sindicato.social",
    "hispagatos.space",
    "paquita.masto.host",
    "loa.masto.host",
    "mastodon.com.py",
    "social.politicaconciencia.org",
    "red.niboe.info",
    "tuiter.rocks",
    "txs.es",
    "lile.cl",
    "libertalia.world",
    "mastodon.blaster.com.a",
    "tuetue.org",
    "fur.cl",
    "bloom.surf",
    "masto.komintern.work",
    "malaga.social",
    "mastodon.cr",
    "oye.social",
    "mastodonte.club",
    "rebel.ar",
    "espod.social",
    "mastodon.lajaqueria.org",
    "soymas.to",
    "mst.universoalterno.es",
    "frikiverse.zone",
    "shrimply.social",
    "mast.lat",
    "mastodonperu.xyz",
    "fediunam.site",
    "mastorol.es",
    "masto.friki.lol"
]

const limpiar_emojis = (cadena) => cadena.replace(/:.*/, '');


lista_mastodon.forEach((dominio) => {
    fetch(`https://${dominio}/api/v1/instance`).then((result) => 
        result.json()
    ).then((servidor) => {
        let tarjeta = '<div class="tarjeta">'
        tarjeta += '<img class=cabecera src="' + servidor.thumbnail + '"' + ' onerror="null; this.src=\'https://files.mastodon.social/site_uploads/files/000/000/001/@1x/57c12f441d083cde.png\'"/>'
        tarjeta += '<div class=contenido>'
        tarjeta += '<a class="titulo" href="https://' + servidor.uri + '" target="_blank">'
        tarjeta += '<img class="icono-servidor" src="./assets/mastodon.png" alt="Mastodon" />'
        tarjeta += servidor.uri + '</a>'
        tarjeta += '<p class="descripcion">' + servidor.short_description + "</p>"
        tarjeta += '<div class=info>'
        tarjeta += '<div style="flex-basis:40%">'
        tarjeta += '<div style="display:flex;">'
        tarjeta += '<span style="width:7rem;">Registros:</span>'
        tarjeta += '<span>' + (servidor.registrations ? '🔓 Abiertos' : '🔒 Cerrados' ) + '</span>'
        tarjeta += '</div>' //registro
        tarjeta += '<div style="display:flex;">'
        tarjeta += '<span style="width:7rem;">Aprobación:</span>' 
        tarjeta += '<span>' + (servidor.approval_required ? '✋ Manual' : '🤖 Automática' ) + '</span>'
        tarjeta += '</div>' //aprobacion
        tarjeta += '</div>' //registro+aprobacion
        tarjeta += '<div style="display:flex;flex-basis:60%;">'
        tarjeta += '<img class=avatar src="' + servidor.contact_account.avatar + '"/>'
        tarjeta += '<div>'
        tarjeta += 'Administrado por: ' + (servidor.contact_account.display_name != '' ?
                    limpiar_emojis(servidor.contact_account.display_name) :
                    servidor.contact_account.username );
        tarjeta += '</br>Correo: <a href=mailto:' + servidor.email + '" >' + servidor.email + "</a>"
        tarjeta += '</div>' //contacto
        tarjeta += '</div>' //admin
        tarjeta += '</div>' //info
        tarjeta += '</div>' //contenido
        tarjeta += '</div>' //tarjeta
        document.getElementById("mastodon").innerHTML += tarjeta
    }).catch(function (err) {
        console.warn('Algo falló', err);
    });
})
