import * as React from "react";

import { useMediaQuery } from "@/app/shared/hooks/useMidiaQuery";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/app/shared/utils";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/shared/components/ui/dialog";
import {
  Drawer,
  //   DrawerClose,
  DrawerContent,
  DrawerDescription,
  //   DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/app/shared/components/ui/drawer";

/**
 * Tailwind‑first size variants for desktop `DialogContent`.
 * Mobile `DrawerContent` already spans full width, so only desktop needs sizing.
 */
const contentVariants = cva("w-full", {
  variants: {
    size: {
      sm: "sm:max-w-[360px]",
      md: "sm:max-w-[425px]",
      lg: "sm:max-w-[560px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface ResponsiveDialogProps
  extends React.PropsWithChildren,
    VariantProps<typeof contentVariants> {
  /**
   * Element that toggles the dialog/drawer. Usually a `<Button>`.
   * Rendered with `asChild` to preserve props. Example:
   * ```tsx
   * <ResponsiveDialog trigger={<Button>Edit</Button>} title="Edit profile">…</ResponsiveDialog>
   * ```
   */
  trigger: React.ReactElement;
  /** Main heading shown on both desktop and mobile. */
  title: React.ReactNode;
  /** Optional sub‑heading under the title. */
  description?: React.ReactNode;
  /** Controlled open state (optional). */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

/**
 * A11y‑friendly component that renders a **Dialog** on ≥768 px screens and a
 * **Drawer** on mobile, sharing the same API. It is fully controlled/uncontrolled,
 * supports sizing variants via CVA and allows any custom children as content.
 */
export function ResponsiveDialog({
  trigger,
  title,
  description,
  children,
  open,
  onOpenChange,
  size,
}: ResponsiveDialogProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className={cn(contentVariants({ size }))}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  // Mobile drawer
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>

        <div className="px-4 pb-4">{children}</div>
      </DrawerContent>
    </Drawer>
  );
}
