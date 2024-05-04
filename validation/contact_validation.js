const { z } = require("zod");

const contact_schema = z.object({
  username: z
    .string({ required_error: "name must be in string" })
    .trim()
    .min(3, { message: "name should be greater than 3 length" })
    .max(255, { message: "name should not be more than 255 length" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  message: z.string({ required_error: "message is required" }),
});
module.exports = contact_schema;
