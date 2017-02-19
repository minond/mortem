import * as create from 'twilio/lib/TwimlResponse';

type Node = create.Node;

export function response(...children: Node[]): Node {
    let node = create();
    node.children = children;
    return node;
}

export function message(text: string): Node {
    let node = create();
    node.name = 'Message';
    node.text = text;
    node.topLevel = false;
    return node;
}
