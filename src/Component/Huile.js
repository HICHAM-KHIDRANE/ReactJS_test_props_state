import React from "react";

class Huile extends React.Component {
  constructor(props) {
    super();
    this.state = {
      Huile: props.data,
      quantite: 1,
      prix_i: parseFloat(props.data.prix.replace(",", "."))
    };
  }
  contenance_f = (p) => {
    //console.log(p.target.value)
    this.setState({
      prix_i: p.target.value
    });
  };

  quantite(p) {
    if (
      p === "+" &&
      this.state.quantite < Math.max(...this.state.Huile.quantite)
    ) {
      this.setState({ quantite: this.state.quantite + 1 });
    } else {
      if (p === "-" && this.state.quantite > 0) {
        this.setState({
          quantite: this.state.quantite - 1
        });
      }
    }
  }
  render() {
    return (
      <div className="col-12 col-md-6 g-5">
        <div className="card ">
          <div className="card-body">
            <h5 className="card-title">{this.state.Huile.genre}</h5>
            <h2 className="card-title fw-bold ">{this.state.Huile.titre}</h2>
            <h6 className="card-subtitle mb-2 text-muted">
              {this.state.Huile.pays}
            </h6>
            <div className=" d-flex ">
              <p>{this.state.Huile.description}</p>
              <img
                src={this.state.Huile.image}
                className="rounded float-end"
                alt={this.state.Huile.titre}
                width={"150px"}
              />
            </div>
            <div className="row mt-3 ">
              <div className="col-6">
                <select onChange={this.contenance_f} className="form-select ">
                  <option
                    value={parseFloat(this.state.Huile.prix.replace(",", "."))}
                  >
                    --contenance--
                  </option>
                  {this.state.Huile.contenance.map((C, i) => {
                    let contenance = C.split(" – ");
                    return (
                      <option
                        key={i}
                        value={parseFloat(contenance[1].replace(",", "."))}
                      >
                        {contenance[0]}
                      </option>
                    );
                  })}
                </select>
                <div className=" mt-3 ">
                  <button
                    className=" btn btn-success "
                    onClick={() => this.quantite("+")}
                    disabled={
                      this.state.quantite <
                      Math.max(...this.state.Huile.quantite)
                        ? false
                        : true
                    }
                  >
                    +
                  </button>
                  <span className=" p-3 ">{this.state.quantite}</span>
                  <button
                    className=" btn btn-success"
                    onClick={() => this.quantite("-")}
                    disabled={
                      this.state.quantite >
                      Math.min(...this.state.Huile.quantite)
                        ? false
                        : true
                    }
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="col-6 row text-center ">
                <div className="col-12">
                  <div className=" fw-bold fs-4">{this.state.prix_i} €</div>
                  <span className="col-12  p-3 ">
                    {this.state.quantite} x {this.state.prix_i} € ={" "}
                    {(this.state.quantite * this.state.prix_i).toFixed(2)} €
                  </span>
                </div>
                <button
                  className="btn btn-success"
                  disabled={this.state.quantite > 0 ? false : true}
                >
                  AJOUTER AU PANIER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Huile;
