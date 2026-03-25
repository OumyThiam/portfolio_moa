/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
    {
        id: "deplos",
        links: {
           
            live: "gestion-portefeuille.vercel.app",
            github: "OumyThiam/management_portefolio"
        },
        techs: ["python", "yfinance", "pandas", "scikitLearn",  "plot"],
        hasImage: true,
        image: "gestion_portefeuille.png"
    },

        {
        id: "powerbi",
        links: {
           
            live: "app.powerbi.com/groups/me/reports/e2c1189c-ca9c-4eb0-b932-df9154b68aaf/54014b392ea4a8a34e40?ctid=d4631af5-0cc6-4de3-a208-423783c27bf4&experience=power-bi&bookmarkGuid=7045c0c3-03b3-4212-9a02-b26b2ee8b2e1&visual=b6c7817e85bb70999136",
            github: "OumyThiam/Power-BI"
        },
        techs: ["powerBi", "DAX","PowerQuery"],
        hasImage: true,
        image: "image.png"
    },

     {
        id: "maquette",
        links: {
           
            live: "figma.com/proto/tX378ZXeoQ5trrQYBUPHUO/AARON-APP?node-id=1202-5109&p=f&t=VVLBWh33iypytzAk-1&scaling=scale-down&content-scaling=fixed&page-id=615%3A704&starting-point-node-id=1202%3A5109&show-proto-sidebar=1",
            github: "figma.com/design/tX378ZXeoQ5trrQYBUPHUO/AARON-APP?node-id=615-704&p=f"
        },
        techs: ["figma"],
        hasImage: true,
        image: "maquette.png"
    },
    
    
   
];

export default projects;
