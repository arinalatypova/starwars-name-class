import React from 'react';
import { uniqueNamesGenerator, starWars } from 'unique-names-generator';
import './starWarsNameClass.css';

interface IStarWarsNameClassState {
  name: string;
  count: number;
}

export class StarWarsNameClass extends React.PureComponent<
  {},
  IStarWarsNameClassState
> {
  state: Readonly<IStarWarsNameClassState> = {
    name: this.randomeName(),
    count: 0,
  }; // инициализация состояния через перегрузку

  // constructor(props: {}) {
  //   super(props);

  //   this.state = { name: '123' };
  // }

  public render() {
    console.log('>>', this.state.count);
    return (
      <section>
        <span>{this.state.name}</span>
        <button onClick={this.handleClick}>Мне нужно имя!</button>
      </section>
    );
  }

  private handleClick = () => {
    this.setState((state, props) => ({
      name: this.randomeName(),
      count: state.count + 1,
    }));
    this.setState({ count: this.state.count + 1 }); // WRONG!
    this.setState((state, props) => ({ count: state.count + 1 })); // Батчинг
  };

  private randomeName(): string {
    // this.state.name = '1233'; // Пытаемся изменить Readonly поле
    return uniqueNamesGenerator({ dictionaries: [starWars], length: 1 });
  }
}
