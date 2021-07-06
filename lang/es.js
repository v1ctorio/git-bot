const options = {
    bannertitle: (guildname) => `Banner de ${guildname}`,
    footerauthor: (author) => `Pedido por ${author}`,
    icontitle: (guildname) => `Icono de ${guildname}`,
    ping: (timeTaken) => `¡Pong! Este mensaje tiene la latencia de ${timeTaken}ms `,
    random_no: "Debes poner dos numeros para conseguir uno aleatorio en ese rango \n Ejemplo: `&random 1 8`",
    random_mucho: "Los numeros elejidos son muy grandes, usa numeros menores a `1000`",
    random_negativo: "Usa numeros positivos",
    random_numero: (numero) => `El numero elejido es ||${numero}||`,
    cat: "Buscando gatos...",
    sin_permisos: "No tienes los permisos necesarios para usar el comando.",
    prefix_largo: "El prefix debe de tener menos de 4 caracteres",
    prefix_no: "Debes escribir un prefix nuevo.",
    prefix_establecido: (prefix) => `El nuevo prefix se estableció en ${prefix}`,
    activities_novc: "Unete a un canal de voz para utilizar este comando",
    activities_yt: (link) => `[Pulsa aqui para entrar a youtube](${link})`,
    activities_ch: (link) => `[Pulsa aqui para entrar a ajedrez](${link})`,
    jumbo_invalid: `Emoji invalido`,
    nick_noargs1: `no dijiste, a quien le quieres cambiar el apodo`,
    nick_noargs2: `No escribiste el nuevo apodo.`,
    nick_error: "No se pudo cambiar el apodo",
    nick: (persona, nuevo, autor) => `Se cambio el nick de ${persona} a ${nuevo} \n por ${autor}`,
    setlang_idiomas: (idiomas) => `Actualmente estan disponibles los siguientes idiomas ${idiomas}`,
    setlang: (idioma) => `El nuevo idioma para este servidor es ${idioma}`,
    lang: `El idioma de este servidor es español`,
    serverinfo_actual: `**INFORMACION ACTUAL DEL SERVIDOR**`,
    serverinfo_creacion: `**FECHA DE CREACION**`,
    serverinfo_region: `**REGION**`,
    serverinfo_owner: "**PROPIETARIO DEL SERVIDOR**",
    serverinfo_canales: "**CANALES**",
    serverinfo_miembros: "**MIEMBROS**",
    serverinfo_verificacion: "**NIVEL DE VERIFICACION**",
    setwelcome_textont: "Debes elejir un canal de texto",
    setwelcome_argsnt: "Menciona o ingresa la id del canal donde se pongan las bienvenidas"
}

function translator(key, ...args) {
    if (typeof options[key] == "function") return options[key](...args)
    else return options[key]
}

module.exports = translator