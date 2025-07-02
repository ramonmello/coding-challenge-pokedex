import * as React from 'react'

import { useMediaQuery } from '@/app/shared/hooks/useMidiaQuery'
import { XIcon } from '@/app/shared/components/icons/x-icon'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/app/shared/components/ui/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose
} from '@/app/shared/components/ui/drawer'

export interface ResponsiveDialogProps extends React.PropsWithChildren {
  /**
   * Element that toggles the dialog/drawer. Usually a `<Button>`.
   * Rendered with `asChild` to preserve props. Example:
   * ```tsx
   * <ResponsiveDialog trigger={<Button>Edit</Button>} title="Edit profile">…</ResponsiveDialog>
   * ```
   */
  trigger: React.ReactElement
  /** Main heading shown on both desktop and mobile. */
  title: React.ReactNode
  /** Optional sub‑heading under the title. */
  description?: React.ReactNode
  /** Controlled open state (optional). */
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

/**
 * A11y‑friendly component that renders a **Dialog** on ≥768 px screens and a
 * **Drawer** on mobile, sharing the same API. It is fully controlled/uncontrolled
 * and allows any custom children as content.
 */
export function ResponsiveDialog({
  trigger,
  title,
  description,
  children,
  open,
  onOpenChange
}: ResponsiveDialogProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent showCloseButton={false}>
          <DialogHeader className='flex flex-row items-center justify-between'>
            <DialogTitle className='text-2xl font-bold capitalize'>
              {title}
            </DialogTitle>
            <DialogClose className='cursor-pointer'>
              <XIcon className='size-5' />
            </DialogClose>
            {description && (
              <DialogDescription className='sr-only'>
                {description}
              </DialogDescription>
            )}
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    )
  }

  // Mobile drawer
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='flex flex-row items-center justify-between'>
          <DrawerTitle className='text-2xl font-bold capitalize'>
            {title}
          </DrawerTitle>
          <DrawerClose className='cursor-pointer'>
            <XIcon className='size-5' />
          </DrawerClose>
          {description && (
            <DrawerDescription className='sr-only'>
              {description}
            </DrawerDescription>
          )}
        </DrawerHeader>

        {children}
      </DrawerContent>
    </Drawer>
  )
}
