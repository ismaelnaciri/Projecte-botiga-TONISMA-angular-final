import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UsersService} from "../users.service";


declare global {
  interface Window {
    ethereum: any;
  }
}

@Component({
  selector: 'app-registre-andlogin',
  templateUrl: './registre-andlogin.component.html',
  styleUrls: ['./registre-andlogin.component.css']
})
export class RegistreANDLoginComponent  {
  //Registrar

  registre: any[] =[]

  nom:any;
  contrasenya:any;
  correu:any;
  autenticat = this.serveiUsuari.autenticat;
  nomAutenticat: any;

  //Login
  [x: string]: any;

  login: any[] =[]

  name:any;
  email:any;
  password:any;
  correuTrobat: any;

/*
  //Contacte
  missatge: any;
*/
  constructor(private http:HttpClient, public router:Router, private serveiUsuari: UsersService) {


  }



  registrar(){
    let registreFormulari = document.getElementById("sign-in-form")
    this.registre=[{
      nom:this.nom,
      contrasenya:this.contrasenya,
      correu:this.correu
    }]
    this.http.post("http://localhost:3080/signin",{json:this.registre}).subscribe(
      (response)=>{
        if(response == true){
          window.alert("S'han inserit les dades a la base de dades")
        }else{
          window.alert("Ha hagut un error en l'inici de sessio")
        }
      }
    );
  }
  iniciar() {
    const formData = {
      email: this.email,
      password: this.password,
    };

    this.http.post<any>('http://localhost:3080/login', formData).subscribe(
      (response) => {
        if(response==false){
          window.alert("Inici de sessió incorrecte")
        }else{
          window.alert("Inici de sessió exitós")
          this.serveiUsuari.usuariAutenticat=response.nomPersona
          this.mostrarUsuari();

        this.router.navigate(["/perfil"]);

        }
      },
      (error) => {

        console.error(error);
      }
    );
  }

  mostrarUsuari(){
    this.serveiUsuari.autenticat=true
    this.serveiUsuari.emailAutenticat=this.email
  }

  // openMetaMaskWallet() {
  //   //@ts-ignore
  //   document.getElementById("checkData").addEventListener('click', (event) => {
  //     let account;
  //     //@ts-ignore
  //     ethereum.request({method: 'eth_requestAccounts'}).then((accounts: any[]) => {
  //       account = accounts[0];
  //       this.serveiUsuari.walletName = account;
  //       console.log(account);
  //       //@ts-ignore

        // window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']}).then((result: string) => {
        //   console.log(result);
        //   let wei = parseInt(result, 16);
        //   let balance = wei / (10**18);
        //   console.log(balance + " ETH");
        // })
      // })
    // })

  async loginWallet() {
    if (window.ethereum) {
      try {
        // Request account access from the user
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('User has logged in with MetaMask!');

        // Additional logic after successful login

      } catch (error) {
        console.error('Error logging in with MetaMask:', error);
      }
    } else {
      console.error('MetaMask is not installed');
    }
    //@ts-ignore
    document.getElementById("checkData").addEventListener('click', (event) => {
      let account;
      window.ethereum.request({method: 'eth_requestAccounts'}).then((accounts: any[]) => {
        account = accounts[0];
        console.log(account);

        window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']}).then((result: string) => {
          console.log(result);
          let wei = parseInt(result, 16);
          let balance = wei / (10**18);
          console.log(balance + " ETH");
        })
      })
    })
  }
}

