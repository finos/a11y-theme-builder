import { Util } from "./util";

export enum LogLevel {
    None = 1,
    Critical = 2,
    Error = 3,
    Warn = 4,
    Info = 5,
    Trace = 6,
    Debug = 7,
}

const logLevelNames: string[] = [ "NULL", "NONE", "CRITICAL", "ERROR", "WARNING", "INFO", "TRACE", "DEBUG"];

export class Logger {

    public readonly name: string;
    public level: LogLevel;

    constructor(name: string, level?: LogLevel) {
        this.name = name;
        this.level = level || LogLevel.Debug;
    }

    public err(msg: string) {
        this.log(LogLevel.Error, msg);
    }

    public warn(msg: string) {
        this.log(LogLevel.Warn, msg);
    }

    public info(msg: string) {
        this.log(LogLevel.Info, msg);
    }

    public trace(msg: string) {
        this.log(LogLevel.Trace, msg);
    }

    public debug(msg: string) {
        this.log(LogLevel.Debug, msg);
    }

    public log(level: LogLevel, msg: string) {
        if (level <= this.level) {
            console.log(`${Util.formatNow()} ${logLevelNames[level]} ${this.name} ${msg}`);
        }
    }

}