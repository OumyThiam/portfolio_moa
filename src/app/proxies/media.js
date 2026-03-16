import websites from "../consts/websites"


export default {
    get(target, name) {
        if (name === "emailRaw") 
            return target.email
        
        if (name === "linkedin") return `https://${websites.linkedin}${target.linkedin.id}`
        if (name === "linkedinTag") return target.linkedin.tag

        return `${name === "email" ? "" : "https://"}${websites[name] ?? ""}${target[name]}`
    }
}