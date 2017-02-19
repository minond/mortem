import * as create from 'twilio/lib/TwimlResponse';

type NODE_NAME = create.NODE_NAME;
type Node = create.Node;

function sub(name: NODE_NAME, text?: string): Node {
    let node = create();
    node.name = name;
    node.text = text;
    node.topLevel = false;
    return node;
}

export function response(...children: Node[]): Node {
    let node = create();
    node.children = children;
    return node;
}

export function message(text: string): Node {
    return sub('Message', text);
}
