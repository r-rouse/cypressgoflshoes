"use client";

import { useState, type ReactNode } from "react";

type AccordionItem = {
  id: string;
  title: string;
  content: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="border-t border-line">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div key={item.id} className="border-b border-line">
            <h3>
              <button
                type="button"
                className="flex w-full items-baseline justify-between gap-4 py-4 text-left text-sm"
                aria-expanded={open}
                onClick={() => setOpenId(open ? null : item.id)}
              >
                <span>{item.title}</span>
                <span className="text-mute">{open ? "−" : "+"}</span>
              </button>
            </h3>
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-5 text-sm leading-relaxed text-mute">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
