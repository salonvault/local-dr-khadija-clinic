"use client";

import * as React from "react";
import { Dialog } from "radix-ui";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Sheet = Dialog.Root;
const SheetTrigger = Dialog.Trigger;
const SheetClose = Dialog.Close;
const SheetPortal = Dialog.Portal;

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Overlay>) {
  return (
    <Dialog.Overlay
      className={cn("fixed inset-0 z-50 bg-navy/55 backdrop-blur-[2px]", className)}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Dialog.Content>) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <Dialog.Content
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(86vw,360px)] flex-col bg-white p-5 text-navy shadow-lift outline-none",
          className
        )}
        {...props}
      >
        <div className="flex justify-end">
          <SheetClose className="inline-flex h-9 w-9 items-center justify-center rounded-[3px] border border-bordercol text-navy transition-colors hover:bg-panel">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </div>
        {children}
      </Dialog.Content>
    </SheetPortal>
  );
}

export { Sheet, SheetClose, SheetContent, SheetTrigger };
