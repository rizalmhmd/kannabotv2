import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'url nya mana ngenn?'
let res = await fetch(`https://zenzapis.xyz/downloader/musically?apikey=f9fccfcff1&url=${args[0]}`)
 if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendFile(m.chat, json.result.audio, m)
}

handler.help = ['tiktokmp3 <url>']
handler.tags = ['downloader']
handler.command = /^tiktokmp3$/i
export default handler
