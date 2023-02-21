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
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cnpj, setCnpj] = useState("");
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
              onChange={(event) => setNome(event.target.value)}
              value={nome}
            />

            <TextInput
              placeholder="Telefone"
              onChange={(event) => setTelefone(event.target.value)}
              value={telefone}
              mask="phone"
            />

            <div className="flex gap-4 items-stretch w-full">
              <TextInput
                placeholder="CPF"
                value={cpf}
                mask="cpf"
                onChange={(event) => setCpf(event.target.value)}
              />

              <TextInput
                placeholder="CNPJ"
                endLabel="Opcional"
                value={cnpj}
                mask="cnpj"
                onChange={(event) => setCnpj(event.target.value)}
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
            </div>

            <div className="grid grid-cols-3 gap-4 items-stretch w-full">
              <TextInput
                placeholder="Bairro"
                value={address.bairro}
                onChange={() => {}}
                disabled
              />

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
          address={address}
          cartItems={cartItems}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
        />
      </ContentContainer>
    </>
  );
}
