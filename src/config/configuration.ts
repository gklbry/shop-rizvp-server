import { registerAs } from "@nestjs/config";
import { sqlConfig } from "./sql.config";

export const databseConfig = registerAs('database', () => ({
    sql: {
        ...sqlConfig(),
    }
}))