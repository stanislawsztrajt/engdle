import React, { ReactNode } from "react";
import { FCC } from "utils/types";

interface Props {
  children: ReactNode
}

const ModalLayout: FCC<Props> = ({ children }: Props) => {
  return (
    <div className='fixed top-0 left-0 z-10 flex items-center justify-center w-screen h-screen p-2 bg-black bg-opacity-30'>
      {children}
    </div>
  )
}

export default ModalLayout