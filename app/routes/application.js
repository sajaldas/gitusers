import Route from "@ember/routing/route";
import ENV from "../config/environment";

export default Route.extend({
  
  redirect: function() {
    this.transitionTo("users");
  }
});
