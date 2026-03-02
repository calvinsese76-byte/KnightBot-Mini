/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rFGLnfIjpiEUFRtBFFhI19KKHAUm4WIOKE/75B9/T0POzO9r7VLfLkycxT30FR4hotUQ/U76Ai+AYbNCybvkJABZM2SRABIxDDBgIVIGNLT/E1OkoT96aXS+qyDTjGfLD2WRMD6Dld65WCZqfF5gU8R6BqjxmOfgO4JesrPxnnfixR7ebcnXvPCnm0GBtFIiwM/hZ4NWlyyp3wL+A5IEJMcJEa1QnliMBsiXoHYvI1+r2OnM6MlGuVa6bEJHMqFCP5lYyv3Oqk0KxuOqgaw2SVe1+jL7RJJIknGD6o6ZzXHGfuH8cYhbwWcVhZFDe7a3mn7+iT906/xmmBYitGRYOb/su6d1N2d1nbHoUW1aF6NYzXqIxYwbgfICmvbsv7Y0efGEHp818jvluE3dXumVUfuNWFa32OdpfJkUykKsn0qMq1hU0ttnKQWb8Sd8hHVi7/R3d+FtJLfn8vr0ulY8+3Jizow2w1p9bXZbQt+S1RrIoprqt98DX6Shunvo0RdfR2kRssQtG+6c5ZTuTGE11peenF/mKvjmuP/6QPm5b8jqXCB/0xMSb3tqr2uGsfC6mON7O84L3IV+6tcnbvFyGuBZPcq2lyr3hlNXXxObfnW0P20pBzjYg1x9vHZprNHn4oiUtNe3nr6IJ6KwYq8xwBglJcNwQ2uCyGM0EcARjftigiqHlTF/TpGNlutT0wluPbzlzWl1xMN2K+k+19rh9Xaw4y5pTIcfQCRqAiZYTqGsVzXDcl6VeormGKaqD++dcIFOjevPs2VOOYEUgwqRuvaKushPGHqR+XMIrKtmi2fRHpwwIRoNKfx6hpcJHWg4xtAUl0wjekn2BTAzWBWY1+NogIioHakBb9HFq9jAfdTW4tboK1DUYgf/MDx0AFrMAzDCvIjMzQKsP/UX/rBlhYVd8K1IARyN6eMbJMSxIrsSwvCyw3vBwunj8ZDoAxaiDOaqAC/VV3+ciaGuv8nK/o2UwzUk1PNfDZ0Ucy3qWfjMU96phHvVMEzb/dlWJfKV7araR5IR/88hRd5IAOTBHTL/8AAlSA87iU07F/3h9JfdQuV9lidXMbuJGx1+YS09FcWNwE+tLt6byY7ZxFdhY3u7ZazHde3l3KIlFS3TpkRSxQ2slouKk3SV+GajG64Qj9WkxP/G6zZ83yRKbtabmYhCl3Xu6Z6w7nQcccdrqnUDauZdM6LOOD6XhwJZKE8naM/TARrtcWF4WuF1CaxVWtqbfUVd+8Z/ZtZrIffxV+i9Pg1bBNMHob/QIODv63d+/Eh4jRz9EvGD8+k38ZyMkmobJDvY4kY4w2JpGTkIHJ3lpNX+/C2GSu1mHhzNazCSob8Hz+NQJVBpukJDlQASxiUuIYjAAp2yGzVpGUvymma5413aTW0HkG60b7nIMdzlHdwLwCKiNJLK8wLKu8v3JIWc1hfQIqcPyLMAHPvwFf9unzUwcAAA==',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
