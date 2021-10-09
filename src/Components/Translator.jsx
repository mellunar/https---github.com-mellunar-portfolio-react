import { useTranslation } from "react-i18next";

function Translator({str}){
  const {t} = useTranslation();

  return t(str)
};

export default Translator;