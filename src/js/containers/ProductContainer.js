import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartBar } from "@fortawesome/free-solid-svg-icons";

class ProductContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tags = this.props.data.tags ? (
      this.props.data.tags.map(tag => {
        return <span className="tags">{tag}</span>;
      })
    ) : (
      <span />
    );

    const icons = [
      <div id="overview-icon">
        <a href="">
          <FontAwesomeIcon icon={faHome} />
          <span id="overview-icon-text">OVERVIEW</span>
        </a>
      </div>,
      <div id="sales-icon">
        <a href="">
          <FontAwesomeIcon icon={faChartBar} />
          <span id="sales-icon-text">SALES</span>
        </a>
      </div>
    ];

    const alt = this.props.data.title
      ? this.props.data.title + " image"
      : "No image";

    return (
      <Product
        src={this.props.data.image}
        title={this.props.data.title}
        subtitle={this.props.data.subtitle}
        tags={tags}
        icons={icons}
        alt={alt}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

export default connect(
  mapStateToProps,
  null
)(ProductContainer);
