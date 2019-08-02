## Usage

-   If you used `adonis make:validator` command:

```
"use strict"

const validationMessages = require("adonis-custom-validation-messages")

class ProductCreate {
    get rules() {
        return {
            // your rules
        }
    }

    get messages() {
        return validationMessages
    }

    async fails(errorMessages) {
        return this.ctx.response.unprocessableEntity(errorMessages)
    }
}
```

-   If you validate directly from your controller:

```
const validationMessages = require("adonis-custom-validation-messages")
validate(data, rules, validationMessages)
```
