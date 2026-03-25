export default (t) => {
    return /*html*/`
        <section class="about" style="margin-top: 50px;">
            <div class="about__illustrations">
                <img src="/images/about.png" alt="" class="about__image">
            </div>
            <div class="about__text">
                ${t.description.map(text => /*html*/`
                    <p class="about__description">${text}</p>
                `).join("")}
            </div>
        </section>
    `
}