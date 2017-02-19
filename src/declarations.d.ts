declare module 'acm' {
    function config<T>(str: string): T;
    namespace config {}
    export = config;
}
