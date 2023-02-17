import React, { Component } from "react";
import {
  // Button,
  Input,
  // Footer,
  Card,
  CardBody,
  CardHeader,
  // CardImage,
  // CardTitle,
  // CardText
} from "@chakra-ui/react";

// import blankImg from "./blank.gif";


import countries from "./countries";

class Search extends Component {
  state = {
    search: ""
  };

  renderCountry = country => {
    const { search } = this.state;
    var code = country.code.toLowerCase();

    /*if( search !== "" && country.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
    }*/

    return (
      <div className="w-md" style={{ marginTop: "20px" }}>
        <Card>
          <CardBody>
            <p className="">
              <img
                src={""}
                className={"flag flag-" + code}
                alt={country.name}
              />
            </p>
            <CardHeader title={country.name}>
              {country.name.substring(0, 15)}
              {country.name.length > 15 && "..."}

            </CardHeader>
            <p>{country.code}</p>
          </CardBody>
        </Card>
      </div>
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredCountries = countries.filter(country => {
      return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="flyout">
        <main style={{ marginTop: "4rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <center>
                  <h3>
                    <a
                      href="https://www.youtube.com/watch?v=RM_nXOyHwN0"
                      target="_blank"
                    >
                      Watch youtube demo here
                    </a>
                  </h3>
                </center>
              </div>
              <div className="col">
                <Input
                  label="Search Country"
                  icon="search"
                  onChange={this.onchange}
                />
              </div>
              <div className="col" />
            </div>
            <div className="row">
              {filteredCountries.map(country => {
                return this.renderCountry(country);
              })}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Search;
