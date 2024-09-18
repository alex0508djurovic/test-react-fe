// env.ts
import { z } from "zod";

const client = z.object({
    REACT_APP_BACKEND_URL: z.string(),
    REACT_APP_API_KEY: z.string(),
});

const processEnv: Record<keyof z.infer<typeof client>, string | undefined> = {
    REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL,
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
};

type ClientOutput = { [key: string]: string };
type ClientSafeParseReturn = z.SafeParseReturnType<typeof client, ClientOutput>;

let env = process.env as ClientOutput;

if (!process.env.SKIP_ENV_VALIDATION) {
    const parsed = client.safeParse(processEnv) as ClientSafeParseReturn;

    if (!parsed.success) {
        console.error("❌ Invalid environment variables:", parsed.error.flatten().fieldErrors);
        throw new Error("Invalid environment variables");
    }
    env = new Proxy(parsed.data, {
        get(target, prop) {
            if (typeof prop !== "string") return undefined;

            if (prop in target) {
                return target[prop as keyof typeof target];
            } else {
                return undefined;
            }
        },
    });
}

export { env };
