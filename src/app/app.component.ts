import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
// here is where we import the costume interface
import { Costume } from './costume';
import { CostumeItems } from './costumeItems.service';
import { data } from './data.json';
import { Task } from './task.model';
import { Priority } from './task.model';

interface DATA {
  id: number;
  price: number;
  date: string;
  factNum: number;
  cant: number;
  name: string;
  middlename: string;
  surname: string;
  lastsurname: string;
  category: string;
  type: string;
  costumeName: string;
  gender: string;
  total: number;
  payment: number;
  debt: number;
  rentValue: number;
  returnDate: string;
  deliveryDate: string;
  size: string;
  phone: number;
  status: string;
  image: string;
  description: string;
  paymentType: string;
  progress: number;
}

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  states: string[] = ['TO DO', 'IN PROGRESS', 'DONE'];
  lastStateIdex: number = this.states.length - 1;
  categories: string[] = ['venta', 'alquiler'];
  priorities: Priority[] = [
    { description: 'Alta', color: '#ff4a4a' },
    { description: 'Media', color: '#ffcf4a' },
    { description: 'Baja', color: '#8bfc92' },
  ];

  tasks: Task[] = [
    {
      description: 'Comprar alimento para gato',
      state: 0,
      category: this.categories[2],
      priority: this.priorities[2],
      deliveryDate: this.categories[4],
      progress: 0,
      costumeName: '',
      factNum: 0,
    },
    {
      description: 'Entregar Disfraz naruto',
      state: 0,
      category: this.categories[0],
      priority: this.priorities[0],
      deliveryDate: this.categories[4],
      progress: 0,
      costumeName: '',
      factNum: 0,
    },
    {
      description: 'Entregar disfraz de principe',
      state: 2,
      category: this.categories[0],
      priority: this.priorities[1],
      deliveryDate: this.categories[4],
      progress: 0,
      costumeName: '',
      factNum: 0,
    },
    {
      description: 'Entregar Anya Forger',
      state: 2,
      category: this.categories[3],
      priority: this.priorities[1],
      deliveryDate: this.categories[4],
      progress: 0,
      costumeName: '',
      factNum: 0,
    },
    {
      description: 'Pruebas Thor mujer',
      state: 1,
      category: this.categories[2],
      priority: this.priorities[2],
      deliveryDate: this.categories[4],
      progress: 0,
      costumeName: '',
      factNum: 0,
    },
  ];

  newTask: Task = {
    description: '',
    state: 0,
    category: '',
    priority: { description: '', color: '' },
    deliveryDate: '',
    progress: 0,
    costumeName: '',
    factNum: 0,
  };

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  addTask() {
    this.tasks.push({ ...this.newTask });
    this.newTask = {
      description: '',
      state: 0,
      category: '',
      priority: { description: '', color: '' },
      deliveryDate: '',
      progress: 0,
      costumeName: '',
      factNum: 0,
    };
  }

  nextState(index: number) {
    if (this.tasks[index].state < this.lastStateIdex) this.tasks[index].state++;
  }

  prevState(index: number) {
    if (this.tasks[index].state > 0) this.tasks[index].state--;
  }

  myDate: Date = new Date();
  newCostume: Costume = {
    id: -1,
    date: '',
    factNum: 0,
    cant: 0,
    name: '',
    middlename: '',
    surname: '',
    lastsurname: '',
    category: '',
    type: '',
    costumeName: '',
    gender: '',
    price: 0,
    total: 0,
    payment: 0,
    debt: 0,
    rentValue: 0,
    returnDate: '',
    deliveryDate: '',
    size: '',
    phone: 0,
    status: '',
    paymentType: '',
    description: '',
    image: '',
    progress: 0,
  };

  editCostume: Costume = {
    id: -1,
    date: '',
    factNum: 0,
    cant: 0,
    name: '',
    middlename: '',
    surname: '',
    lastsurname: '',
    category: '',
    type: '',
    costumeName: '',
    gender: '',
    price: 0,
    total: 0,
    payment: 0,
    debt: 0,
    rentValue: 0,
    returnDate: '',
    deliveryDate: '',
    size: '',
    phone: 0,
    status: '',
    paymentType: '',
    description: '',
    image: '',
    progress: 0,
  };
  //costumes: DATA[] = data;
  costumes: Costume[] = data;

  constructor(public costumeItems: CostumeItems) {
    this.costumes = this.costumeItems.getCostumes();
  }

  public addCostume() {
    if (this.costumes.length == 0) {
      this.newCostume.id = 0;
    } else {
      this.newCostume.id = this.costumes[this.costumes.length - 1].id + 1;
    }
    this.costumes.push(this.newCostume);
    this.resetForm();
  }

  private resetForm() {
    this.newCostume = {
      id: -1,
      date: '',
      factNum: 0,
      cant: 0,
      name: '',
      middlename: '',
      surname: '',
      lastsurname: '',
      category: '',
      type: '',
      costumeName: '',
      gender: '',
      price: 0,
      total: 0,
      payment: 0,
      debt: 0,
      rentValue: 0,
      returnDate: '',
      deliveryDate: '',
      size: '',
      phone: 0,
      status: '',
      paymentType: '',
      description: '',
      image: '',
      progress: 0,
    };
  }

  public eliminar(position: number) {
    //splice(indiceDondeCambiaelarray,numeroelementosaeliminar)
    let res = confirm(
      '¿Esta seguro de que quiere eliminar este registro? Si da en "Aceptar" el registro se perderá y deberá ingresarlo manualmente de nuevo'
    );
    if (res) {
      this.costumes.splice(position, 1);
    }
  }

  public filterCostumes(event: Event) {
    const text = event.target as HTMLInputElement;
    let filter = text.value;
    this.costumes = this.costumes.filter((newCostume) =>
      newCostume.costumeName.toLowerCase().includes(filter)
    );
    if (text.value == '') {
      this.costumes = this.costumeItems.getCostumes();
    }
  }

  public filterCategory(event: Event) {
    const text = event.target as HTMLInputElement;
    let filter = text.value;
    this.costumes = this.costumes.filter((newCostume) =>
      newCostume.category.toLowerCase().includes(filter)
    );
    if (text.value == '') {
      this.costumes = this.costumeItems.getCostumes();
    }
  }

  public filterType(event: Event) {
    const text = event.target as HTMLInputElement;
    let filter = text.value;
    this.costumes = this.costumes.filter((newCostume) =>
      newCostume.type.toLowerCase().includes(filter)
    );
    if (text.value == '') {
      this.costumes = this.costumeItems.getCostumes();
    }
  }

  public filterDeliveryDate(event: Event) {
    const text = event.target as HTMLInputElement;
    let filter = text.value;
    this.costumes = this.costumes.filter((newCostume) =>
      newCostume.deliveryDate.includes(filter)
    );
    if (text.value == '') {
      this.costumes = this.costumeItems.getCostumes();
    }
  }
  public filterTaskDeliveryDate(event: Event) {
    const text = event.target as HTMLInputElement;
    let filter = text.value;
    this.tasks = this.tasks.filter((newTask) =>
      newTask.costumeName.toLowerCase().includes(filter)
    );
    if (text.value == '') {
      this.tasks = this.tasks;
    }
  }

  public loadInfo(position: number) {
    this.editCostume = this.costumes[position];
  }
}
