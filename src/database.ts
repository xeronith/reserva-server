import path from "path";
import fspromises from "fs/promises";
import fs from "fs";
import { DefaultModel } from "./model";

const FILE_PATH = path.join(__dirname, "database.json");

export const initialize = <T>(initialData: T) => {
    const read = async () => {
        const data = await fspromises.readFile(FILE_PATH, { encoding: "utf-8" });
        return JSON.parse(data) as unknown as T;
    };

    const write = async (data: T) => {
        await fspromises.writeFile(FILE_PATH, JSON.stringify(data), {
            encoding: "utf-8",
        });
    };

    if (!fs.existsSync(FILE_PATH)) {
        write(initialData);
    }

    return {
        read,
        write,
    };
};

const Database = initialize(DefaultModel);

export { Database };
