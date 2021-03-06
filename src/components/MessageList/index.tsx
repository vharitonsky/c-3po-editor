import * as React from "react";
import { Message } from "src/lib/parser";
import { MessageItem } from "src/components/Message";

type MessageListProps = {
  messages: Message[];
  language?: string;
  onMsgUpdate: (msgid: string, msgctxt: string, idx: number, value: string) => void;
};

export const MessageList = (props: MessageListProps) => {
    return (
        <div>
          {props.messages.map(m => (
            <div style={{marginTop: "10px"}}>
              <MessageItem
                language={props.language}
                key={`${m.msgctxt}-${m.msgid}`}
                message={m}
                onUpdate={props.onMsgUpdate}
              />
            </div>
          ))}
        </div>
    );
};
