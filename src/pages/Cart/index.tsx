import { CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import {
  CoffeeContextProps,
  PaymentOptions,
  UserData,
} from "../../@types/coffee";
import {
  CartCatalog,
  Header,
  SelectPaymentInput,
  TextInput,
  Typography,
} from "../../components";
import {
  ContentContainer,
  FormContainer,
  InfoContainer,
  PaymentButtonsContainer,
  PaymentFormContainer,
} from "./styles";

import { useTheme } from "styled-components";
import { CoffeeContext } from "../../contexts";
import { useAddressAutoComplete } from "../../hooks";

export function Cart() {
  // CONTEXTS
  const { cartItems, handleRemoveItemFromCart } = useContext(
    CoffeeContext
  ) as CoffeeContextProps;
  const { address, handleAddressAutoComplete } = useAddressAutoComplete();
  const theme = useTheme();

  // STATES
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [userData, setUserData] = useState<UserData>({
    nome: "",
    cpf: "",
    telefone: "",
    cnpj: "",
  } as UserData);

  const [selectedPayment, setSelectedPayment] = useState<PaymentOptions>(
    PaymentOptions.MONEY
  );

  // FUNCTIONS
  const handleCepChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value);
  };

  // EFFECTS
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
                <Typography
                  color={theme.colors.yellow.dark}
                  size={12}
                  style={{ marginTop: "10px", fontStyle: "italic" }}
                >
                  Para os campos Telefone, CPF e CNPJ, você pode digitar apenas
                  os números.
                </Typography>
              </div>
            </header>

            <TextInput
              placeholder="Nome"
              onChange={(event) => {
                setUserData({
                  ...userData,
                  nome: event.target.value,
                });
              }}
              value={userData.nome}
            />

            <TextInput
              placeholder="Telefone"
              onChange={(event) => {
                setUserData({
                  ...userData,
                  telefone: event.target.value,
                });
              }}
              value={userData.telefone}
              mask="phone"
            />

            <div className="flex gap-4 items-stretch w-full">
              <TextInput
                placeholder="CPF"
                value={userData.cpf}
                mask="cpf"
                onChange={(event) => {
                  setUserData({
                    ...userData,
                    cpf: event.target.value,
                  });
                }}
              />

              <TextInput
                placeholder="CNPJ"
                endLabel="Opcional"
                value={userData.cnpj || ""}
                mask="cnpj"
                onChange={(event) => {
                  setUserData({
                    ...userData,
                    cnpj: event.target.value,
                  });
                }}
              />
            </div>

            <TextInput
              placeholder="CEP"
              onChange={handleCepChange}
              mask="cep"
              value={cep}
            />

            <TextInput
              placeholder="Rua"
              value={address.logradouro}
              onChange={() => {}}
              disabled
            />

            <div className="flex gap-4 items-stretch w-full">
              <TextInput
                placeholder="Número"
                value={numero}
                onChange={(event) => setNumero(event.target.value)}
              />

              <TextInput
                placeholder="Complemento"
                endLabel="Opcional"
                value={complemento}
                onChange={(event) => setComplemento(event.target.value)}
              />

              <TextInput
                placeholder="Bairro"
                value={address.bairro}
                onChange={() => {}}
                disabled
              />
            </div>

            <div className="flex gap-4 items-stretch w-full">
              <TextInput
                placeholder="Cidade"
                value={address.localidade}
                onChange={() => {}}
                disabled
              />

              <TextInput
                placeholder="UF"
                value={address.uf}
                onChange={() => {}}
                disabled
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
                onChange={() => {
                  setSelectedPayment(PaymentOptions.CREDIT_CARD);
                }}
              />
              <SelectPaymentInput
                id="2"
                label="Cartão de débito"
                icon={
                  <CreditCard size={16} color={theme.colors.purple.default} />
                }
                onChange={() => {
                  setSelectedPayment(PaymentOptions.DEBIT_CARD);
                }}
              />

              <SelectPaymentInput
                id="3"
                label="Dinheiro"
                icon={<Money size={16} color={theme.colors.purple.default} />}
                onChange={() => {
                  setSelectedPayment(PaymentOptions.MONEY);
                }}
              />
            </PaymentButtonsContainer>
          </PaymentFormContainer>
        </InfoContainer>

        <CartCatalog
          address={address}
          userData={userData}
          payment={selectedPayment}
          cartItems={cartItems}
          numero={numero}
          complemento={complemento}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
        />
      </ContentContainer>
    </>
  );
}
