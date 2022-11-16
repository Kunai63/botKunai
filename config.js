module.exports = {
    app: {
        token: 'MTAxNTY0MzUwMTg0Njg2NDA1Mw.Grwd7g.-sUF26-CmfFKeEfB7EGggfLFtG1kaQXd2qs7Uc',
        playing: 'Kunai 苦無 ☯🎶',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
