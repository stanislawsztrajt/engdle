import { useDispatch } from "react-redux";
import textsServices from "utils/api/texts-services";
import { closeTextById, removeTextById, uncloseTextById } from "../slice/texts-slice";
import { Itext } from "../types";

const useTextItem = (text: Itext) => {
  const dispatch = useDispatch()

  const deleteText = () => {
    dispatch(removeTextById(text.id))
    textsServices.remove(text.id)
  }

  const closeText = () => {
    dispatch(closeTextById(text.id))
    textsServices.update(text.id, { isClosed: true })
  }

  const uncloseText = () => {
    dispatch(uncloseTextById(text.id))
    textsServices.update(text.id, { isClosed: false })
  }

  return {
    deleteText,
    closeText,
    uncloseText
  };
};

export default useTextItem;
