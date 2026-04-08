import proxy from "../proxies/media"

const media = {
    linkedin: {
        id: "",
        tag: "Oumy.dev",
    },
    stackOverflow: {
        id: "19758208",
        name: "Oumy",
    },
    github: "OumyThiam",
    figma: "Oumy_dev",
    replit: "OumyDev",
    codewars: "OumyDevis",
    devTo: "Oumydevis",
    cssBattle: "Oumy_dev",
    codepen: "Oumy_dev",
    dribble: "Oumy_dev",
    email: "oumyt@outlook.fr"

}

export default new Proxy(media, proxy);

