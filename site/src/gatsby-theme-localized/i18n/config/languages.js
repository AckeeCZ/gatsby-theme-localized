module.exports = [
    {
        locale: "cs",
        label: "Čeština",
        routes: {
            "/": "/",
            "/page1": "/stranka1",
            "/subpage/page1": "/podstranka/stranka1",
            "/subpage/subsubpage/page1": "/podstranka/podpodstranka/stranka1",
            "notFound": '/404.html',
        }
    },
    {
        locale: "de",
        label: "Deutsch",
        routes: {
            "/": "/",
            "/page1": "/stranka1",
            "/subpage/page1": "/podstranka/stranka1",
            "/subpage/subsubpage/page1": "/podstranka/podpodstranka/stranka1",
            "notFound": '/404.html',
        }
    },
    {
        default: true,
        locale: "en",
        label: "English",
        routes: {
            "/": "/",
            "/page1": "/page1",
            "/subpage/page1": "/subpage/page1",
            "/subpage/subsubpage/page1": "/subpage/subsubpage/page1",
            "notFound": '/404.html',
        }
    }
];
