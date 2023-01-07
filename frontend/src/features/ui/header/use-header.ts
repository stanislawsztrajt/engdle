import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useHeader = () => {
  const router = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [router])

  return {
    isMenuOpen,
    setIsMenuOpen
  };
};

export default useHeader;
