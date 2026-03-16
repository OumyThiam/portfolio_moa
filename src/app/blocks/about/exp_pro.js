export default (t) => {
    return /*html*/`
        <div>
            <h2 class="h2">${t.title}</h2><br><br>
            <div class="exps__content">
            <h4 class="h4">${t.poste}</h4>
            <p>${t.date} | ${t.location}</p>
              <ul class="exp__list" style="color: var(--gray); ">
              ${t.list.map(exp => /*html*/`
                        <li class="exp__item">${exp}</li>
                    `).join("")}
              </ul>
                    <br><br>
     </div>
            <div class="exps__content">
             <h4 class="h4">${t.poste2}</h4>
            <p>${t.date2} | ${t.location2}</p>
            
                    <ul class="exp__list" style="color: var(--gray);">
              
                    ${t.list2.map(exp => /*html*/`
                        <li class="exp__item">${exp}</li>
                    `).join("")}
                    </ul>
    
            </div>

        </div>
    `
}