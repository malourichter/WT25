import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Form } from './form/form';
import { Table } from './table/table';
import { Home } from './home/home';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Header, Footer, Form, Table, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'uebung6';
}
