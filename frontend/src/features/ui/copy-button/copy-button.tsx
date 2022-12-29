import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import { copy } from 'utils/helpers/index'

interface CopyButtonProps {
  toCopy: string
}

const CopyButton: FC<CopyButtonProps> = ({ toCopy }) => {
  return(
    <FontAwesomeIcon onClick={() => copy(toCopy)} className='-mt-2 text-gray-500 duration-100 cursor-pointer hover:text-gray-600' icon={faCopy} />
  )
}

export default CopyButton
  