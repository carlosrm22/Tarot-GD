declare module '*.json' {
    const value: any;
    export default value;
}

declare module '*.svg' {
    const content: any;
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.jpg' {
    const content: string;
    export default content;
}

declare module '*.jpeg' {
    const content: string;
    export default content;
}

declare namespace NodeJS {
    interface Require {
        context(directory: string, useSubdirectories: boolean, regExp: RegExp): any;
    }
}