declare module 'acm' {
    namespace config {}
    function config<T>(str: string): T;

    export = config;
}

declare module 'twilio/lib/TwimlResponse' {
    type NODE_NAME = 'Dial' | 'Enqueue' | 'Gather' | 'Message' | 'Response';

    type LEGAL_NODE = 'Body' | 'Client' | 'Conference' | 'Dial' | 'Enqueue' |
        'Gather' | 'Hangup' | 'Leave' | 'Media' | 'Message' | 'Number' |
        'Pause' | 'Pause' | 'Play' | 'Queue' | 'Record' | 'Redirect' |
        'Reject' | 'Say' | 'Sip' | 'Sms' | 'Task';

    class Node {
        topLevel: boolean;
        name: NODE_NAME;
        legalNodes: LEGAL_NODE[];
        children: Node[];
        text: string;
    }

    namespace response {}
    function response(): Node;

    export = response;
}
