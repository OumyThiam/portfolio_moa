import skills from "@/consts/skills";
import techs from "@/consts/techs";

export default (t, t2) => {
    const icons = {
        modelisation_projet: `
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="12" rx="2"></rect>
                <path d="M3 9h18"></path>
                <path d="M9 15v6"></path>
                <path d="M15 15v6"></path>
            </svg>
        `,
        language: `
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="8 6 2 12 8 18"></polyline>
                <polyline points="16 6 22 12 16 18"></polyline>
            </svg>
        `,
        database: `
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"></path>
                <path d="M21 12c0 1.7-4 3-9 3s-9-1.3-9-3"></path>
            </svg>
        `,
        dataScience: `
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 17 9 11 13 15 21 7"></polyline>
                <circle cx="3" cy="17" r="1"></circle>
                <circle cx="9" cy="11" r="1"></circle>
                <circle cx="13" cy="15" r="1"></circle>
                <circle cx="21" cy="7" r="1"></circle>
            </svg>
        `,
        framework: `
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <path d="M2 12l10 5 10-5"></path>
                <path d="M2 17l10 5 10-5"></path>
            </svg>
        `,
    };

    const levels = {
        js: 85, ts: 80, python: 80, VBA: 70,
        sql_server: 80, postgreSql: 75,
        powerBi: 90, spark: 70, kedro: 60, mlflow: 60, shell: 70, pandas: 85, scikitLearn: 75,
        react: 80, next: 70, express: 70, flask: 70, reactNative: 65, Vujs: 60,
        methodeAgile: 85, Trello: 80, figma: 75, UML: 75, merise: 70
    };

    const renderItem = (label, value) => /*html*/ `
        <div class="skill-item">
            <div class="skill-item__row">
                <div class="skill-item__label">${label}</div>
                <div class="skill-item__value">${value}%</div>
            </div>
            <div class="progress" style="--value: ${value}%">
                <div class="progress__bar"></div>
            </div>
        </div>
    `;

    const groups = [
        {
            id: "language_database",
            title: `${t2.language} & ${t2.database}`,
            icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <ellipse cx="18" cy="6" rx="5" ry="2.5"></ellipse>
                    <path d="M13 6v6c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V6"></path>
                    <polyline points="2 7 8 12 2 17"></polyline>
                    <polyline points="8 7 2 12 8 17"></polyline>
                </svg>
            `,
            keys: ["language", "database"],
        },
        { id: "modelisation_projet", title: t2.modelisation_projet, icon: icons.modelisation_projet, keys: ["modelisation_projet"] },
        { id: "dataScience", title: t2.dataScience, icon: icons.dataScience, keys: ["dataScience"] },
        { id: "framework", title: t2.framework, icon: icons.framework, keys: ["framework"] },
    ];

    const renderGroup = (group) => {
        const items = group.keys.flatMap((k) => skills[k]);
        return /*html*/ `
            <div class="skill-card">
                <div class="skill-card__title">
                    <span class="skill-card__icon">${group.icon ?? icons.framework}</span>
                    <span>${group.title}</span>
                </div>
                <div class="skill-card__items">
                    ${
                        items
                            .map((key) => {
                                const label = techs[key] ?? key;
                                const value = levels[key] ?? 75;
                                return renderItem(label, value);
                            })
                            .join("")
                    }
                </div>
            </div>
        `;
    };

    return /*html*/ `
        <section class="skills">
            <h2 class="h2">${t.title}</h2>
            <div class="skills__grid">
                ${groups.map(renderGroup).join("")}
            </div>
        </section>
    `;
}
