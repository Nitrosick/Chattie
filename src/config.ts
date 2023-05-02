export const config = {
    apiRoot: 'http://nitrosick.eternalhost.info/apis/chattie.php',
    apiKey: 'GdmvJKk543ljSJmc583mnKmfcv12',
    apis: {
        users: '?users',
        profile: '?profile',
        avatars: '?avatars',
        dialogs: '?dialogs',
        messages: '?messages',
    },
    defaults: {
        usersOnPage: 15,
        totalUsers: 20,
        requestsFrequency: 5000
    }
}
