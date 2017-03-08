/* import * as Bluebird from 'Bluebird'; */
/* declare function Promise<T> = Bluebird<T>; */
/* declare interface Promise<R> extends Bluebird<R> { */
    /* constructor(callback: (resolve : (result: R) => void, reject: (error: any) => void) => void);  */
        /* ///... */
/* } */

declare module 'acm' {
    namespace config {}
    function config<T>(str: string): T;

    export = config;
}

declare module 'twilio/lib/TwimlResponse' {
    namespace response {
        type NODE_NAME = 'Dial' | 'Enqueue' | 'Gather' | 'Message' | 'Response';

        type LEGAL_NODE = 'Body' | 'Client' | 'Conference' | 'Dial' | 'Enqueue' |
            'Gather' | 'Hangup' | 'Leave' | 'Media' | 'Message' | 'Number' |
            'Pause' | 'Pause' | 'Play' | 'Queue' | 'Record' | 'Redirect' |
            'Reject' | 'Say' | 'Sip' | 'Sms' | 'Task';

        export class Node {
            topLevel: boolean;
            name: NODE_NAME;
            legalNodes: LEGAL_NODE[];
            children: Node[];
            text: string;
        }
    }

    function response(): response.Node;

    export = response;
}
