class Indecision extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "What do you want to do?";
    const options = ["Learn React More", "Practice with the app more"];

    return (
      <div>
        <Header title={title} />

        <main>
          <ActionButton label={subtitle} options={options} />

          <Options options={options} />

          <Form />
        </main>
      </div>
    );
  }
}

class ActionButton extends React.Component {
  onMakeDecision() {}

  render() {
    return (
      <>
        <button
          disabled={this.props.options.length === 0}
          onClick={this.onMakeDecision}
        >
          {this.props.label}
        </button>
      </>
    );
  }
}

class Form extends React.Component {
  onSubmitHandler(e) {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
      // app.options.push(option);
      e.target.elements.option.value = "";
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);

    this.onRemoveHandler = this.onRemoveHandler.bind(this);
  }

  onRemoveHandler() {
    console.log("Onremove: ", this.props);
  }

  render() {
    return (
      <div>
        {this.props.options.length > 0 ? (
          <ol>
            {this.props.options.map((op) => (
              <li key={op}>{op}</li>
            ))}
          </ol>
        ) : (
          <p>No data found</p>
        )}

        <button onClick={this.onRemoveHandler}>Remove All</button>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return <header>{this.props.title}</header>;
  }
}

ReactDOM.render(<Indecision />, document.getElementById("root"));
