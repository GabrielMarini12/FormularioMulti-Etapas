import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { useEffect } from "react";
import { SelectOption } from "../../components/SelectOption";

export const FormSep2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    });
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/step2");
    } else {
      alert("Preencha os dados!");
    }
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo a baixo com seu nome completo</p>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="😅"
        />

        <SelectOption
          title="Sou programador"
          description="Já programo há 2 anos ou mais"
          icon="😎"
        />

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
