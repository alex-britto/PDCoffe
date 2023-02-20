import { CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { CoffeeContextProps } from "../../@types/coffee";
import {
  CartCatalog,
  Header,
  SelectPaymentInput,
  TextInput,
} from "../../components";
import Typography from "../../components/Typography";
import { CoffeeContext } from "../../contexts";
import { useAddressAutoComplete } from "../../hooks";
import {
  ContentContainer,
  FormContainer,
  InfoContainer,
  PaymentButtonsContainer,
  PaymentFormContainer,
} from "./styles";

export function Cart() {
  // CONTEXTS
  const { cartItems, handleRemoveItemFromCart } = useContext(
    CoffeeContext
  ) as CoffeeContextProps;
  const theme = useTheme();

  // STATES
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const { address, isLoading, handleAddressAutoComplete } =
    useAddressAutoComplete();

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value);
  };

  useEffect(() => {
    if (cep.length === 8) {
      handleAddressAutoComplete(cep);
    }
  }, [cep]);

  return (
    <>
      <Header cartItems={cartItems} />

      <ContentContainer>
        <InfoContainer>
          <FormContainer>
            <header>
              <MapPin size={22} color={theme.colors.yellow.dark} />
              <div>
                <Typography color={theme.colors.base.subtitle}>
                  Endereço de entrega
                </Typography>
                <Typography color={theme.colors.base.text} size={14}>
                  Informe o endereço onde deseja receber seu pedido
                </Typography>
              </div>
            </header>
            <TextInput
              placeholder="CEP"
              onChange={handleCepChange}
              isCep
              value={cep}
            />

            <TextInput
              placeholder="Rua"
              value={address.logradouro}
              onChange={() => {}}
            />

            <div className="flex gap-4 items-stretch w-full">
              <TextInput
                placeholder="Número"
                value={numero}
                onChange={(event) => setNumero(event.target.value)}
                type="number"
              />

              <TextInput
                placeholder="Complemento"
                endLabel="Opcional"
                value={complemento}
                onChange={(event) => setComplemento(event.target.value)}
              />
            </div>

            <div className="grid grid-cols-3 gap-4 items-stretch w-full">
              <TextInput
                placeholder="Bairro"
                value={address.bairro}
                onChange={() => {}}
              />

              <TextInput
                placeholder="Cidade"
                value={address.localidade}
                onChange={() => {}}
              />

              <TextInput
                placeholder="UF"
                value={address.uf}
                onChange={() => {}}
              />
            </div>
          </FormContainer>

          <PaymentFormContainer>
            <header>
              <CurrencyDollar size={22} color={theme.colors.purple.default} />
              <div>
                <Typography color={theme.colors.base.subtitle}>
                  Pagamento
                </Typography>
                <Typography color={theme.colors.base.text} size={14}>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </Typography>
              </div>
            </header>

            <PaymentButtonsContainer>
              <SelectPaymentInput
                id="1"
                label="Cartão de crédito"
                icon={
                  <CreditCard size={16} color={theme.colors.purple.default} />
                }
              />
              <SelectPaymentInput
                id="2"
                label="Cartão de débito"
                icon={
                  <CreditCard size={16} color={theme.colors.purple.default} />
                }
              />

              <SelectPaymentInput
                id="3"
                label="Dinheiro"
                icon={<Money size={16} color={theme.colors.purple.default} />}
              />
            </PaymentButtonsContainer>
          </PaymentFormContainer>
        </InfoContainer>

        <CartCatalog
          cartItems={cartItems}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
        />
      </ContentContainer>
    </>
  );
}
