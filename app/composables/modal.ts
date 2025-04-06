import type { OrugaOptions } from "@oruga-ui/oruga-next"

type ModalProgrammaticProps = Readonly<OrugaOptions["modal"]>

type ModalProgrammaticParams<C> = Omit<ModalProgrammaticProps, "component"> & {
  component: C
  closeAll?: boolean
  onClose?: (res: CloseArg<C>) => unknown
}

type CloseArg<C> = C extends { emits?: infer CEmits }
  ? CEmits extends { close: infer CEmitsClose }
    ? CEmitsClose extends { (arg: infer CEmitsCloseArg): void }
      ? CEmitsCloseArg
      : never
    : never
  : never

export function useOpenModal() {
  const oruga = useOruga()

  return function openModal<C extends Exclude<object, null>>(componentOrParams: C | ModalProgrammaticParams<C>) {
    const params = typeof componentOrParams === "object" && "component" in componentOrParams ? componentOrParams : { component: componentOrParams }
    const { closeAll = true } = params
    if (closeAll) {
      oruga.modal.closeAll()
    }
    const modal = oruga.modal.open({ ...params, closeIcon: "" })
    modal.promise.then(res => params.onClose?.(res as CloseArg<C>))
    return modal
  }
}
