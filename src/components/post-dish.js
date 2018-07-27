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
      // else if (this.state.image.match(/\.(jpeg|jpg|gif|png)$/) === null) {
      //   error
      //     .then(() => {
      //       this.setState({
      //         message: "You must enter a valid image URL!",
      //         isPending: false
      //       });
      //     })
      //     .then(this.setMessageToNull);
      //   return false;
      // } 
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
          // .then(this.postRequest);
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
    console.log('burger image clicked!');
    this.setState({
        image: "https://icon2.kisspng.com/20180203/oaw/kisspng-hamburger-cheeseburger-veggie-burger-cartoon-clip-burgers-cliparts-5a765956e579e2.36672725151770555894.jpg",
        burgerBorder: "border",
        saladBorder: ""
    });
  }
  salad = () => {
    console.log('salad image clicked!');
    this.setState({
        image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4587564.jpg",
        saladBorder: "border",
        burgerBorder: ""
    });
  }

  setImage = () => {
      console.log("post request");
      this.setState({
        display: "Success!"
      })
      this.postRequest();
  }

  // setImage = () => {
  //   const image = this._dishImage.current.value;
  //   // if (image.match(/\.(jpeg|jpg|gif|png)$/) === null){
  //   //   this.setState({
  //   //     image: 'http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg'
  //   //   });
  //   // }
  //   // else {
  //   //   this.setState({
  //   //     image
  //   //   });
  //   // }

  //   this.setState({
  //         image
  //       });
  
  // };

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
                  {/* <label htmlFor="dish-img">
                    Choose a url image for the dish!
                  </label>
                  <input
                    className="input my-text width-90"
                    type="text"
                    placeholder="URL image"
                    ref={this._dishImage}
                    required
                  /> */}
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
          <h1> select a picture! </h1>
          <img className={`choose-pic ${this.state.burgerBorder}`} src="https://icon2.kisspng.com/20180203/oaw/kisspng-hamburger-cheeseburger-veggie-burger-cartoon-clip-burgers-cliparts-5a765956e579e2.36672725151770555894.jpg" onClick={this.burger} />
          <img className={`choose-pic ${this.state.saladBorder}`} src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4587564.jpg" onClick={this.salad} />
          <button className="button" onClick={this.setImage}> SET IMAGE </button>
          {/* 
            i wanna have 4 pictures
            On click, depending on the picture,
            the dish will have that picture
            So how to do it?
            e.g

            if (this.pic.clicked){
              then this pic is the pic of the dish
            }

            <img src="image-src.jps" onClick={this.Burger} />

            Burger = () => {
              this.setState({
                  image: "burger.jpg"
              });
            }
            https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4587564.jpg
          
          
          
          */}
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
