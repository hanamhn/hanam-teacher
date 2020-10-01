import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// App components
import Featured from "./Featured";
import Header from "./Header";
import NotFound from "./NotFound";
import Teachers from "./Teachers";
import About from "./About";
import Home from "./Home";
import Courses from "./Courses";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" render={() => <About title="About" />} />
          <Route exact path="/teachers" component={Teachers} />
          <Route path="/teachers/:topic/:name" component={Featured} />
          <Route path="/courses" component={Courses} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
