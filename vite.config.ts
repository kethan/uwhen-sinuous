import * as path from "path";

export default {
    build: {
        lib: {
            entry: path.resolve(__dirname, "./src/index.ts"),
            name: "uwhen",
            formats: ["es", "umd", "cjs", "iife"]
        }
    }
}