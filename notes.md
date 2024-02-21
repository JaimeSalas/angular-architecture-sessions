# Frontend Frameworks

> Update UI: `when` and `which` part?

## AngularJS

```js
$timeout;
$promise;
```

## React

```jsx
export const Heading = (props) => (
    <div>
        <h1>{props.heading}</h1>
    </div>
)
```

```js
function Heading(props) {
    return React.createElement(
        "div",
        null,
        //
    )
}
```

## Incremental DOM

```html
<script>
    const sendLog = console.log;
    let amount = 100;
    let rate = 4.0;
    $: exchange = amount / rate;
    $: sendLog(exchange);
</script>
.......
<div>exchange: {exchange}</div>
```

```js
let div2, t6, t7, ...
c() {
  ...
  div2 = element('div');
  t6 = text('exchange: ');
  t7 = text(/*exchange*/ ctx[2])
},
m(target, anchor) {
  ...
  append(div3, div2);
  append(div2, t6);
  append(div2, t7);
}
```

## Immutable Opt

### React 

> UI = fn(state, props)

> Memoize 

### Angular OnPush

```ts
@Component({
  selector: "foo",
  changDetection: ChangeDetectionStrategy.OnPush,
  template: `<div>....</div>`,
})
export class ListingComponent {
  // ...
}
```

## Proactive vs Reactive

- Proactive - Imperative
- Reactive - Declaritive, Inversion of Control

### Imperative

```js
    let rate = 4.0;
    let amount = 100;
    let exchange = amount / rate;
    
    rate = 3.8;
    exchange // Manually
```

### Reactive Streams

```js
    let rate$ = 4.0;
    let amount$ = 100;
    let exchange$ = amount$ / rate$;
    
    rate$ = 3.8
    exchange // Result updated
```

## Signals

```ts
const rate = signal(3.94);
const amount = signal(1000); 
const exchange = computed(() => maount() / rate());

rate.set(3.93);

effect(() => console.log(exchange()))
```

## DI

POO -> Clases -> Obj (Methods + State)

SOLID

```ts
interface IConnection {
  connect(): void;
  disConnect(): void;
}

class A implements IConnection {
  connect(): void {

  }
  disConnect(): void {

  }
}

class B {
  constructor(connectionManager: IConnection) {
    this.connedtion = connectionManager;
  }

  methodC(){}
  methodD(){}
}
```

<pre>

  <app-root> (M) >> PeopleService
    -<app-person>
    -<app-female> >> PeopleService -> FemaleService
      -<app-person>
      
</pre>

## Estructura Solución

"Best practice"

- Servicios -> DI
- Routing
- Components
- Directives 
- Pipes
- NgModules? 

### Library Feature - POC

- Servicios -> DI
- Routing
  - R1
  - R1
  - R1
  - R1
  - R1
  - R1
  - R1
  - R1
  - R1
  - R1
  - R1
  - R1
- Components
  - C1
  - C1
  - C1
  - C1
  - C1
  - C1
  - C1
  - C1
  - C1
  - C1
  - C1
  - C1
  - C1
  - C1
  - C1
  - C1
  - C1
  - C1
  - C1
  - C1
- Directives 
  - D1
  - D2
  - D3
  - D3
  - D5
- Pipes
- AppModule
 

```
app/
├─ shared-ui/
├─ common/
├─ suscripcion/
├─ siniestro/
│  ├─ components/
│  ├─ directivas/
│  ├─ routes.ts
│  ├─ siniestro.module.ts
├─ src/
│  ├─ index.css
│  ├─ index.js
├─ .gitignore
├─ package.json
├─ README.md
```

<pre>
project root/
└── src/
    ├── app/
    │   ├── core/
    │   │    ├── core.module.ts
    │   │    ├── exception.service.ts
    │   │    └── user-profile.service.ts
    │   ├── games/
    │   │    ├── game
    │   │    │    └── game.components.ts
    │   │    ├── game-list
    │   │    │    └── game-list.components.ts
    │   │    ├── shared
    │   │    │    ├── game.model.ts
    │   │    │    ├── game.service.ts
    │   │    │    └── game-button.component.ts
    │   │    ├── games.component.model.ts
    │   │    ├── games.module.model.ts
    │   │    └── games-routing.module.model.ts
    │   │    
    │   ├── home/
    │   ├── shared/
    │   │    ├── shared.module.ts
    │   │    ├── start.component.ts
    │   │    └── text-filter.service.ts
    │   ├── user/
    │   │      .....
    │   ├── app.component.ts
    │   ├── app.module.ts
    │   └── app-routing.module.ts
    ├── main.ts
    └── index.html
</pre>