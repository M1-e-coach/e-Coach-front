import {Component, OnInit, ViewEncapsulation, ElementRef, Inject} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {StripeService, Elements, Element as StripeElement, ElementsOptions} from 'ngx-stripe';
import { ApiService } from '../../services/api-service.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.scss'],
  providers: [
    ApiService
  ],
  encapsulation: ViewEncapsulation.None
})
export class RechargeComponent implements OnInit {
  elements: Elements;
  card: StripeElement;
  packname: string;
  amountGC: number;
  gc;
  prix;
  actualGC;
  // optional parameters
  elementsOptions: ElementsOptions = {
    locale: 'fr'
  };
  stripe: any;
  paymentRequest: any;
  prButton: any;
  stripeTest: FormGroup;
  prixAPayer;

  packs = [
    {
      'name': 'XS',
      'color': '#1faa00',
      'gc': '10',
      'price': '2'
    },
    {
      'name': 'SM',
      'color': '#00bfa5',
      'gc': '30',
      'price': '5'
    },
    {
      'name': 'MD',
      'color': '#2962ff',
      'gc': '100',
      'price': '15'
    },
    {
      'name': 'LG',
      'color': '#aa00ff',
      'gc': '200',
      'price': '25'
    },
    {
      'name': 'XL',
      'color': '#c51162',
      'gc': '300',
      'price': '30'
    },
    {
      'name': 'XXL',
      'color': '#d50000',
      'gc': '500',
      'price': '50'
    }
  ];

  constructor(private fb: FormBuilder, private stripeService: StripeService, private apiService: ApiService) {
  }

  ngOnInit() {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.stripeService.elements(this.elementsOptions)
      .subscribe(elements => {
        this.elements = elements;
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                iconColor: '#32325d',
                color: '#32325d',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '18px',
                '::placeholder': {
                  color: '#aab7c4'
                }
              }
            }
          });
          this.card.mount('#card-element');
        }
      });
  }

  buy(amount) {
    console.log(amount)
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card, {name}, )
      .subscribe(result => {
        if (result.token) {
          // Use the token to create a charge or a customer
          // https://stripe.com/docs/charges
          $('#carouselPaiement').carousel('next');
          
          let currentUser = JSON.parse(localStorage.getItem('connectedUser'));
          console.log(currentUser.nbCoin);
          currentUser.nbCoin = Number(currentUser.nbCoin) + Number(amount);
          localStorage.setItem('connectedUser', JSON.stringify(currentUser));
          console.log(localStorage.getItem('connectedUser'));
          this.apiService.putGolcoin(currentUser.id, currentUser.nbCoin).subscribe( data => {
            console.log(data);
          });
          setTimeout(function(){ 
            window.location.href = '/'; }, 3000);
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }

  openAchatModal(pack) {
    $('#achatModal').modal({
      keyboard: false,
    });
    this.packname = pack.name;
    this.gc = pack.gc;
    this.prix = pack.price;
    this.prixAPayer = pack.price;
  }

  achatTermine() {

  }
}
