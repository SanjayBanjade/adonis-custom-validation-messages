const validationMessages = {
    max(field, validation, args) {
        return `This field must have less than ${args} characters.`
    },
    min(field, validation, args) {
        return `This field must have at least ${args} characters`
    },
    array: "This field must be an array",
    boolean: "This field must be a boolean",
    date: "This field must be a date",
    required: "This field is required",
    float: "This field must be a float",
    integer: "This filed must be an integer",
    number: "This field must be a number",
    range(field, validation, args) {
        return `This field must be between ${args[0]} and ${args[1]} length`
    },
    object: "This field must be an object",
    equals(field, validation, args) {
        return `"This field must be equal to ${args}" field`
    },
    email: "This field must be an email",
    ip: "This field must be an ip",
    ipv4: "This field must be an ipv4",
    ipv6: "This field must be an ipv6",
    json: "This field must be a json",
    regex: "This field is invalid",
    string: "This field must be a string",
    url: "This field must be a valid URL"
}

module.exports = validationMessages
