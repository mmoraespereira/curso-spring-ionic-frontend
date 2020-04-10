import { RefDTO } from "./ref.dto";
import { PagamentoDTO } from "./pagemento.dto";
import { ItemPedidoDTO } from "./item-pedido.dto";

export interface PedidoDTO{
    cliente: RefDTO;
    enderecoDeEntrega: RefDTO;
    pagamento: PagamentoDTO;
    itens: ItemPedidoDTO[];
}