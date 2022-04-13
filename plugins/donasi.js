let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Maxis [60147366955]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
