export default ({ type, text, link }) => {
    return /*html*/ `
        <a class="button ${type}" href="${link}" target="_blank" rel="noopener noreferrer">${text}</a>
    `;
};
