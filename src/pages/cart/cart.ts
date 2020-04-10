import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartItem } from '../../models/cart.item';
import { CartService } from '../../services/domain/cart.service';
import { ProdutoDTO } from '../../models/produto.dto';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  items: CartItem[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cartService: CartService) {
  }

  ionViewDidLoad() {
    let cart = this.cartService.getCart();
    this.items = cart.items;
  }

  removeItem(produto: ProdutoDTO){
    this.items = this.cartService.removeProduto(produto).items;
  }

  increaseQuantity(produto: ProdutoDTO){
      this.items = this.cartService.increaseProduto(produto).items;
  }

  decreaseQuantity(produto: ProdutoDTO){
    this.items = this.cartService.decreaseProduto(produto).items;
  }

  total(): number{
      return this.cartService.total();
  }

  goOn(){
    this.navCtrl.setRoot("CategoriasPage");
  }

}
