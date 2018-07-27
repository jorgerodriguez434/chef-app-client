import React from "react";
import Ingredients from "./ingredients";
import ClassifyAs from "./classify-as";
import InputIngredient from "./input-ingredient";
import Links from "./links";
import { API_BASE_URL } from "../config";
import { connect } from "react-redux";
import * as actions from "../actions";
import "./post-dish.css";
import { Redirect } from "react-router-dom";
import { RingLoader } from "react-spinners";

export class PostDish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "landing",
      name: "none",
      image: "none",
      message: "",
      isPending: false
    };
    this._dishName = React.createRef();
   // this._dishImage = React.createRef();
  }

  setMessageToNull = () => {
    setTimeout(() => {
      this.setState({
        message: null
      });
    }, 1500);
  };

  promisePostRequest = () => {
    const submit = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Success!");
      }, 1000);
    });

    const error= new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Error!");
      }, 1500);
    });

    const success = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Success!");
      }, 1500);
    });

    submit.then(() => {
      if (this.props.ingredients.length === 0) {
        error
          .then(() => {
            console.log(this.props.ingredients.length);
            this.setState({
              message: "You must enter at least 1 ingredient!",
              isPending: false
            });
          })
          .then(this.setMessageToNull);
        return false;
      } else if (this.props.categories.length === 0) {
        error
          .then(() => {
            this.setState({
              message: "You must check at least one category!",
              isPending: false
            });
          })
          .then(this.setMessageToNull);
        return false;
      } 
      else {
        success
          .then(() => {
            this.setState({
                display: "select a picture!"
            });
            this.setState({
              isPending: false
            });
          })
      }
    });
  }

  onSubmit = e => {
    console.log("clicked");
    e.preventDefault();
    console.log(this.props);
    this.addCategory(e);
    this.setName();
    //this.setImage();
    this.setState({
      isPending: true
    });
    this.promisePostRequest();
  
  };

  componentDidMount = () => {
    this.props.dispatch(actions.clearIngredients());
    this.props.dispatch(actions.clearCategories());
    if (localStorage.getItem("isAuthenticated")) {
      console.log("authenticated!");
      

    } else {
      
      this.setState({
          display: "login"
      }); 
    }
  };

  postRequest = () => {
    const data = {
      name: this.state.name,
      ingredients: this.props.ingredients,
      categories: this.props.categories,
      image: this.state.image
    };

    fetch(API_BASE_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      type: "HEAD",
      url: this.state.image
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
  };

  goBack = () => {
    this.props.dispatch(actions.clearIngredients());
    this.props.dispatch(actions.clearCategories());
    this.setState({
      image: "none",
      display:"menu"
    });
  };

  setName = () => {
    const name = this._dishName.current.value;
    this.setState({
      name
    });
  };

  burger = () => {
    this.setState({
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfGG6GyZ4WKV8BnzwDmY--G_t5Hz5m23OtwXbg7-mw9pkPu8y",
        burgerBorder: "border",
        saladBorder: "",
        steakBorder:"",
        noMeatBorder:"",
        genericBorder: ""
    });
  }
  salad = () => {
    this.setState({
        image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4587564.jpg",
        saladBorder: "border",
        burgerBorder: "",
        noMeatBorder:"",
        steakBorder:"",
        genericBorder: ""
    });
  }

  noMeat = () => {
    this.setState({
      image: "https://png.pngtree.com/element_origin_min_pic/17/09/25/314fe5b73bf5d737d138b0566e95810b.jpg",
      noMeatBorder: "border",
      burgerBorder: "",
      steakBorder:"",
      saladBorder:"",
      genericBorder: ""
  });
  }
  steak = () => {
    this.setState({
      image: "https://png.pngtree.com/element_origin_min_pic/16/08/28/1657c29a1f544a1.jpg",
      steakBorder: "border",
      saladBorder: "",
      burgerBorder: "",
      noMeatBorder:"",
      genericBorder: ""
  });
  }

  generic = () => {
    this.setState({
      image: "https://t4.ftcdn.net/jpg/00/59/69/95/240_F_59699563_A0mCz2LkgfPHrj0PbAPd0FaccfOrPELQ.jpg",
      steakBorder: "",
      saladBorder: "",
      burgerBorder: "",
      noMeatBorder:"",
      genericBorder: "border"
  });
  }

  setImage = () => {
    this.setState({
      isPending: true
    })
    const wait = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Success!");
      }, 1000);
    });

    const anotherPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Success!");
      }, 1500);
    });

    wait.then(() => {
      if (this.state.image === "none") {
        anotherPromise
          .then(() => {
            console.log("another promise");
            this.setState({
              message: "You must select a picture!",
              isPending: false
            });
          })
          .then(this.setMessageToNull);
        return false;
      }
      else {
        anotherPromise
          .then(() => {
            this.setState({
              isPending: false,
              display: "Success!"
            });
          })
          .then(this.postRequest);
      }
    })
    
  }

  addCategory = e => {
    const checkboxes = e.currentTarget.getElementsByClassName(
      "classify-as-checkbox"
    );

    Object.values(checkboxes).map(checkbox => {
      if (checkbox.checked) {
        this.props.dispatch(actions.addCategory(checkbox.value));
      }

      return checkbox.value;
    });
  };

  render = () => {

    if (this.state.display === "landing") {
      return (
        <div>
          <Links />
          <div className="intro-image-post-dish">
            <h1> POST A DISH </h1>
          </div>
          <section className="post-dish-outside-container">
            <div className="post-dish-container">
              <p> Please add a dish by entering the following information </p>

              <form className="add-ingredients-main-box">
            
                 <h2> Add Ingredients </h2>
                  <InputIngredient />
              
              </form>
              <form onSubmit={this.onSubmit} className="the-dish">
                
                  <h2> The dish </h2>
                  <label htmlFor="dish-name">Name of dish</label>
                  <input
                    className="input my-text width-90"
                    type="text"
                    placeholder="e.g. Burger Deluxe"
                    ref={this._dishName}
                    required
                  />
                <div className="checkbox-container">
                  <ClassifyAs />
                  </div>
                  <p className="red-font"> {this.state.message}</p>
                <div className="post-dish-spinner-container">
                  <div className="post-dish-spinner">
                    <RingLoader
                      color={"#123abc"}
                      loading={this.state.isPending}
                    />
                  </div>
                </div>
                  <button type="submit" className="button">
                    {" "}
                    POST DISH!{" "}
                  </button>
                
              </form>
            </div>
          </section>
        </div>
      );
    } //if
    if (this.state.display === "Success!") {
      return (
        <div>
          <section className="post-dish-outside-container">
            <div className="post-dish-container">
              <h1> Success! </h1>
              <h2> Dish Name: {this.state.name}</h2>
              <h2>
                <img src={this.state.image} alt={this.state.name} />{" "}
              <div className="ingredients">
                <Ingredients ingredients={this.props.ingredients} />{" "}
                </div>
              </h2>
            
              <button onClick={this.goBack} className="post-dish-buttons">
                {" "}
                GO TO MENU{" "}
              </button>
            </div>
          </section>
        </div>
      );
      //reset State
    } //if
     if (this.state.display=== "login") {
       return <Redirect to="/login" />;
     }
     if (this.state.display=== "menu") {
      return <Redirect to="/menu" />;
    }
    if (this.state.display=== "select a picture!") {
      console.log(this.state);
      return (


        <div>
          <h1> Select a picture! </h1>
          <img className={`choose-pic ${this.state.burgerBorder}`} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfGG6GyZ4WKV8BnzwDmY--G_t5Hz5m23OtwXbg7-mw9pkPu8y" onClick={this.burger} alt="burger"/>
          <img className={`choose-pic ${this.state.noMeatBorder}`} src=" https://png.pngtree.com/element_origin_min_pic/17/09/25/314fe5b73bf5d737d138b0566e95810b.jpg" onClick={this.noMeat} alt="burger"/>
          <img className={`choose-pic ${this.state.saladBorder}`} src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4587564.jpg" onClick={this.salad} alt="salad"/>
          <img className={`choose-pic ${this.state.steakBorder}`} src="https://png.pngtree.com/element_origin_min_pic/16/08/28/1657c29a1f544a1.jpg" onClick={this.steak} alt="steak"/>
          <img className={`choose-pic ${this.state.genericBorder}`} src="https://t4.ftcdn.net/jpg/00/59/69/95/240_F_59699563_A0mCz2LkgfPHrj0PbAPd0FaccfOrPELQ.jpg" onClick={this.generic} alt="generic"/>
          <p className="red-font"> {this.state.message}</p>
          <div className="post-dish-spinner">
                    <RingLoader
                      color={"#123abc"}
                      loading={this.state.isPending}
                    />
                  </div>
          <button className="button" onClick={this.setImage}> SET IMAGE </button>
          </div>
          
        
      );
    }
  };
}

export const mapStateToProps = state => ({
  ingredients: state.ingredients,
  categories: state.categories,
  isAuthenticated: state.isAuthenticated,
  displayRedux: state.displayRedux,
  isPending: state.isPending
});

export default connect(mapStateToProps)(PostDish);

/*

<img className={`choose-pic ${this.state.burgeBorder}`} src=" https://png.pngtree.com/element_origin_min_pic/16/08/28/1657c29a1f544a1.jpg" onClick={this.burger} alt="no-meat"/>
*/